"use client"

import type { ReactNode } from "react"

import { ContextMenuAnimation } from "@/components/mock-context-menu/context-menu-animation"
import {
  CHROME_EDITABLE_MENU,
  CHROME_EDITABLE_MENU_WIDTH,
  TYPETARGET_FIELD_SUBMENU,
} from "@/components/mock-context-menu/default-entries"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { cn } from "@/lib/utils"

const FIELD_TEXT =
  "Audio from the tab being listened to automatically gets written into any text field."
const FIELD_TYPE_SPEED = 25
// Let the text finish typing, then hold on it briefly before the loop restarts.
const LOOP_DELAY = FIELD_TEXT.length * FIELD_TYPE_SPEED + 1000

const GREEN = "#1f9d55"
const FONT_STACK =
  "[font-family:system-ui,-apple-system,'Segoe_UI',Roboto,'Noto_Sans',Ubuntu,sans-serif]"

const IconButton = ({ children }: { children: ReactNode }) => (
  <span className="flex h-4 w-5 items-center justify-center">
    <svg viewBox="0 0 12 12" width={10} height={10} aria-hidden>
      {children}
    </svg>
  </span>
)

const FieldStage = ({ active }: { active: boolean }) => (
  <div className="absolute inset-0 bg-white">
    {active && (
      <>
        <div
          style={{ backgroundColor: GREEN }}
          className={cn(
            "absolute top-[13px] left-[10px] flex items-center rounded-t-[3px] px-[6px] py-px text-[11px] leading-4 font-semibold whitespace-nowrap text-white tabular-nums",
            FONT_STACK
          )}
        >
          <svg
            viewBox="0 0 12 12"
            width={10}
            height={10}
            aria-hidden
            className="mr-1 shrink-0"
          >
            <path d="M2 1.2 L10.5 6 L2 10.8 Z" fill="currentColor" />
          </svg>
          TypeTarget 0:01
        </div>
        <div
          style={{ backgroundColor: GREEN }}
          className="absolute top-[13px] right-[10px] flex items-center rounded-t-[3px] px-[2px] py-px text-white"
        >
          <IconButton>
            <path
              d="M6 1 V8 M3 5 L6 8 L9 5 M1.5 10.75 H10.5"
              stroke="currentColor"
              strokeWidth={1.5}
              fill="none"
            />
          </IconButton>
          <IconButton>
            <path
              d="M10 2 V7 H3 M5.5 4.5 L3 7 L5.5 9.5"
              stroke="currentColor"
              strokeWidth={1.5}
              fill="none"
            />
          </IconButton>
          <IconButton>
            <path
              d="M2.5 2.5 L9.5 9.5 M9.5 2.5 L2.5 9.5"
              stroke="currentColor"
              strokeWidth={1.75}
              fill="none"
            />
          </IconButton>
        </div>
      </>
    )}
    <div
      style={
        active
          ? { outline: `4px double ${GREEN}`, outlineOffset: -4 }
          : undefined
      }
      className={cn(
        "absolute top-[30px] right-[10px] -bottom-1 left-[10px] rounded-t-[4px] px-4 py-3 text-[15px] leading-[1.5] font-normal tracking-normal text-[#1f1f1f]",
        FONT_STACK,
        !active && "border border-[#c4c7c5]"
      )}
    >
      {/* Mounted on click so the text types from the start on every loop. */}
      {active && (
        <TypingAnimation
          className="leading-[inherit] tracking-[inherit]"
          duration={FIELD_TYPE_SPEED}
          startOnView={false}
          cursorStyle="line"
        >
          {FIELD_TEXT}
        </TypingAnimation>
      )}
    </div>
  </div>
)

export const TypeToFieldAnimation = ({
  label,
  startDelay,
}: {
  label: string
  startDelay?: number
}) => (
  <ContextMenuAnimation
    cursorStart={{ x: 625, y: 95 }}
    menuEntries={CHROME_EDITABLE_MENU}
    menuWidth={CHROME_EDITABLE_MENU_WIDTH}
    submenuEntries={TYPETARGET_FIELD_SUBMENU}
    submenuTargetId="type-to-field"
    renderStage={(clicked) => <FieldStage active={clicked} />}
    loopDelay={LOOP_DELAY}
    startDelay={startDelay}
    width={1280}
    height={660}
    label={label}
  />
)
