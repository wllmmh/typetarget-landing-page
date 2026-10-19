"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion, useTransform, type MotionValue } from "motion/react"

import type { Point } from "@/components/mock-context-menu/layout"
import { VERSION } from "@/lib/site"
import { cn } from "@/lib/utils"

import {
  LANGUAGE_ENTRIES,
  LANGUAGE_OPTION_COUNT,
  MODEL_ENTRIES,
  getEntryLabel,
} from "./default-entries"
import {
  POPUP_METRICS,
  SCROLLBAR_METRICS,
  getMaxScroll,
  getScrollbarThumb,
  type PanelEntry,
} from "./layout"

export type PopupMenu = "model" | "language"

// The extension's popup.css tokens. Like Chrome's popups, they follow the OS theme, not the page theme.
const popupTheme = cn(
  "[--tt-divider:#c4c7c5] [--tt-menu:#fff] [--tt-on-primary:#fff] [--tt-outline:#747775] [--tt-primary:#0b57d0] [--tt-surface:#fff] [--tt-text-secondary:#444746] [--tt-text:#1f1f1f]",
  "system-dark:[--tt-divider:#444746] system-dark:[--tt-menu:#2d2e30] system-dark:[--tt-on-primary:#062e6f] system-dark:[--tt-outline:#8e918f] system-dark:[--tt-primary:#a8c7fa] system-dark:[--tt-surface:#1f1f1f] system-dark:[--tt-text-secondary:#c4c7c5] system-dark:[--tt-text:#e3e3e3]",
  "[--tt-hover:color-mix(in_srgb,var(--tt-text)_8%,transparent)] [--tt-primary-tint:color-mix(in_srgb,var(--tt-primary)_10%,transparent)]",
  // Chrome's own scrollbar and range track colours, which popup.css leaves alone.
  "[--sb-thumb:#8b8b8b] [--sb-track:#fcfcfc] system-dark:[--sb-thumb:#9f9f9f] system-dark:[--sb-track:#2c2c2c]",
  "[--range-border:#b2b2b2] [--range-track:#efefef] system-dark:[--range-border:#858585] system-dark:[--range-track:#3b3b3b]"
)

// popup.css's stack. The headings below are divs so the page's h2 font rule doesn't reach them.
const FONT_STACK = "[font-family:system-ui,sans-serif]"

const SHADOW = "shadow-[0_1px_3px_rgb(0_0_0/0.3),0_4px_8px_3px_rgb(0_0_0/0.15)]"

const PlayIcon = () => (
  <svg viewBox="0 0 12 12" width={12} height={12} aria-hidden>
    <path d="M2 1.2 L10.5 6 L2 10.8 Z" fill="currentColor" />
  </svg>
)

/**
 * Chrome's range input under popup.css's accent colour, measured from a
 * render: a 16px thumb over an 8px rounded track, here at the slider's
 * minimum, which is the default.
 */
const RangeInput = () => (
  <div className="relative mt-0.5 h-4">
    <div className="absolute inset-x-0 top-1 h-2 rounded-full border border-(--range-border) bg-(--range-track)" />
    <div className="absolute top-0 left-0 size-4 rounded-full bg-(--tt-primary)" />
  </div>
)

const Heading = ({ children }: { children: string }) => (
  <div className="mb-1.5 h-[18px] text-[12px] leading-[18px] font-medium">
    {children}
  </div>
)

const Section = ({ children }: { children: ReactNode }) => (
  <section className="border-t border-(--tt-divider) pt-[10px] pb-3">
    {children}
  </section>
)

const PrimaryButton = ({ children }: { children: string }) => (
  <div className="mt-2 flex">
    <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-transparent bg-(--tt-primary) px-4 py-1.5 font-medium text-(--tt-on-primary)">
      <PlayIcon /> {children}
    </span>
  </div>
)

type PanelProps = {
  menu: PopupMenu
  entries: PanelEntry[]
  selectedId: string
  hovered: string | null
  scroll: MotionValue<number>
  /** Options in the real list, when `entries` is only its start. */
  optionCount?: number
}

const { arrowWidth, arrowHeight, arrowInset } = SCROLLBAR_METRICS
const arrowLeft = (SCROLLBAR_METRICS.width - arrowWidth) / 2

const ScrollArrow = ({ direction }: { direction: "up" | "down" }) => (
  <svg
    viewBox={`0 0 ${arrowWidth} ${arrowHeight}`}
    width={arrowWidth}
    height={arrowHeight}
    aria-hidden
    style={{
      left: arrowLeft,
      [direction === "up" ? "top" : "bottom"]: arrowInset,
    }}
    className="absolute fill-(--sb-thumb)"
  >
    <path
      d={
        direction === "up"
          ? `M0 ${arrowHeight} L${arrowWidth / 2} 0 L${arrowWidth} ${arrowHeight} Z`
          : `M0 0 L${arrowWidth / 2} ${arrowHeight} L${arrowWidth} 0 Z`
      }
    />
  </svg>
)

/** A still image of Chrome's scrollbar, its thumb driven by the panel's scroll. */
const ScrollBar = ({
  entries,
  scroll,
  optionCount,
}: {
  entries: PanelEntry[]
  scroll: MotionValue<number>
  optionCount?: number
}) => {
  const { length, travel, range } = getScrollbarThumb(entries, optionCount)
  const top = useTransform(
    scroll,
    (value) => SCROLLBAR_METRICS.trackInset + (travel * value) / range
  )

  return (
    <div
      style={{ width: SCROLLBAR_METRICS.width }}
      className="absolute inset-y-0 right-0 bg-(--sb-track)"
    >
      <ScrollArrow direction="up" />
      <motion.div
        style={{
          top,
          left: (SCROLLBAR_METRICS.width - SCROLLBAR_METRICS.thumbWidth) / 2,
          width: SCROLLBAR_METRICS.thumbWidth,
          height: length,
        }}
        className="absolute rounded-full bg-(--sb-thumb)"
      />
      <ScrollArrow direction="down" />
    </div>
  )
}

const Panel = ({
  menu,
  entries,
  selectedId,
  hovered,
  scroll,
  optionCount,
}: PanelProps) => {
  const y = useTransform(scroll, (value) => -value)
  const scrollable = getMaxScroll(entries) > 0

  return (
    <div
      style={{
        top: POPUP_METRICS.triggerHeight + POPUP_METRICS.panelGap,
        maxHeight: POPUP_METRICS.panelMaxHeight,
      }}
      className={cn(
        "absolute inset-x-0 z-10 overflow-hidden rounded-[8px] bg-(--tt-menu)",
        SHADOW
      )}
    >
      <motion.div
        style={{
          y,
          marginRight: scrollable ? SCROLLBAR_METRICS.width : 0,
        }}
        className="py-1"
      >
        {entries.map((entry) =>
          entry.kind === "group" ? (
            <div
              key={entry.label}
              className="flex items-baseline justify-between gap-2 px-3 pt-1.5 pb-0.5 text-[11px] leading-[16.5px] font-medium text-(--tt-text-secondary)"
            >
              {entry.label}
              {entry.action && (
                <span className="font-normal text-(--tt-primary) underline">
                  {entry.action}
                </span>
              )}
            </div>
          ) : (
            <div
              key={entry.id}
              style={{ height: POPUP_METRICS.optionHeight }}
              className={cn(
                "flex items-center justify-between gap-2 px-3",
                // As in popup.css, the selected style wins over hover.
                entry.id === selectedId
                  ? "bg-(--tt-primary-tint) text-(--tt-primary)"
                  : hovered === `${menu}:${entry.id}` && "bg-(--tt-hover)"
              )}
            >
              <span className="truncate">{entry.label}</span>
              {entry.detail && (
                <span className="shrink-0 text-[11px] text-(--tt-text-secondary) tabular-nums">
                  {entry.detail}
                </span>
              )}
              {entry.endonym && (
                <span
                  lang={entry.id}
                  className="shrink-0 text-(--tt-text-secondary)"
                >
                  {entry.endonym}
                </span>
              )}
            </div>
          )
        )}
      </motion.div>
      {scrollable && (
        <ScrollBar
          entries={entries}
          scroll={scroll}
          optionCount={optionCount}
        />
      )}
    </div>
  )
}

type DropdownProps = Omit<PanelProps, "selectedId"> & {
  value: string
  open: boolean
}

const Dropdown = ({ value, open, ...panel }: DropdownProps) => (
  <div className="relative">
    <div
      style={{ height: POPUP_METRICS.triggerHeight }}
      className={cn(
        "flex items-center justify-between gap-1.5 rounded-[8px] border border-(--tt-outline) bg-(--tt-surface) px-3",
        panel.hovered === `${panel.menu}-trigger` && "bg-(--tt-hover)"
      )}
    >
      <span className="truncate">{getEntryLabel(panel.entries, value)}</span>
      <span aria-hidden>▾</span>
    </div>
    {open && <Panel selectedId={value} {...panel} />}
  </div>
)

type MockPopupProps = {
  /** Top-left corner, in the container's px. */
  position: Point
  modelId: string
  languageId: string
  openMenu: PopupMenu | null
  /** `model-trigger`, `language-trigger`, or `<menu>:<option id>`. */
  hovered: string | null
  modelScroll: MotionValue<number>
  languageScroll: MotionValue<number>
}

/** Non-interactive replica of the extension's toolbar popup, for animations. */
export const MockPopup = ({
  position,
  modelId,
  languageId,
  openMenu,
  hovered,
  modelScroll,
  languageScroll,
}: MockPopupProps) => (
  <div
    aria-hidden
    style={{
      left: position.x,
      top: position.y,
      width: POPUP_METRICS.width,
    }}
    className={cn(
      popupTheme,
      FONT_STACK,
      SHADOW,
      "pointer-events-none absolute bg-(--tt-surface) px-4 pt-3 pb-2 text-[13px] leading-[19.5px] font-normal tracking-normal whitespace-nowrap text-(--tt-text) select-none"
    )}
  >
    <div className="mb-2 flex items-center gap-2 font-mono text-[15px] leading-[22.5px] font-medium tracking-[-0.06em]">
      <Image
        src="/typetarget-icon.png"
        alt=""
        width={20}
        height={20}
        className="rounded-[4px]"
      />
      TypeTarget
    </div>
    <Section>
      <Heading>Model</Heading>
      <Dropdown
        menu="model"
        entries={MODEL_ENTRIES}
        value={modelId}
        open={openMenu === "model"}
        hovered={hovered}
        scroll={modelScroll}
      />
    </Section>
    <Section>
      <Heading>Spoken language</Heading>
      <Dropdown
        menu="language"
        entries={LANGUAGE_ENTRIES}
        optionCount={LANGUAGE_OPTION_COUNT}
        value={languageId}
        open={openMenu === "language"}
        hovered={hovered}
        scroll={languageScroll}
      />
    </Section>
    <Section>
      <Heading>Listening to</Heading>
      <p>No tab selected</p>
      <PrimaryButton>Start listening</PrimaryButton>
      <div className="mt-2">
        <div className="flex items-baseline justify-between gap-2">
          Chunk length
          <span className="mt-1 text-[11px] leading-[16.5px] text-(--tt-text-secondary) tabular-nums">
            3 seconds
          </span>
        </div>
        <RangeInput />
      </div>
    </Section>
    <Section>
      <Heading>Typing to</Heading>
      <p>No field selected</p>
      <PrimaryButton>Start typing</PrimaryButton>
      <div className="mt-2 flex items-center gap-2">
        <span className="flex size-[13px] items-center justify-center rounded-[2px] bg-(--tt-primary) text-(--tt-on-primary)">
          <svg viewBox="0 0 12 12" width={10} height={10} aria-hidden>
            <path
              d="M2.5 6.25 L5 8.75 L9.75 3.5"
              stroke="currentColor"
              strokeWidth={1.75}
              fill="none"
            />
          </svg>
        </span>
        Show outline
      </div>
    </Section>
    <Section>
      <div className="mt-1 flex items-baseline gap-4 text-[12px] leading-[18px] text-(--tt-text-secondary)">
        <span>Diagnostics</span>
        <span>Help</span>
        <span>Contact</span>
        <span className="ml-auto text-[11px] leading-[16.5px]">v{VERSION}</span>
      </div>
    </Section>
  </div>
)
