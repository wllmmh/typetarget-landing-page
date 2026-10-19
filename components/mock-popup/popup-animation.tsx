"use client"

import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from "motion/react"

import {
  HUMAN_EASE,
  createHumanPath,
  getHumanMoveDuration,
} from "@/components/mock-context-menu/human-path"
import type { Point } from "@/components/mock-context-menu/layout"
import { MockCursor } from "@/components/mock-context-menu/mock-cursor"
import { cn } from "@/lib/utils"

import {
  DEFAULT_LANGUAGE_ID,
  DEFAULT_MODEL_ID,
  getModelEntries,
  type ModelMenuLabels,
} from "./default-entries"
import {
  POPUP_METRICS,
  findOptionIndex,
  getMaxScroll,
  getPanelEntryTops,
  getPanelOrigin,
  getTriggerOrigin,
  hitTestPanel,
  isInTrigger,
  type PanelEntry,
} from "./layout"
import { MockPopup, type PopupMenu, type PopupStrings } from "./mock-popup"

const WIDTH = 640
const HEIGHT = 600
// Centred; the popup is about 547px tall.
const POPUP_ORIGIN: Point = { x: 160, y: 26 }

const MODEL_TARGET = "large-v3-q5_0"
// One wheel notch, as Chrome scrolls it at 100% zoom.
const WHEEL_NOTCH = 100
// Each run is padded out to this, so the carousel shows the step for a set time.
const LOOP_MS = 6000

const MODEL_TRIGGER = getTriggerOrigin(
  POPUP_ORIGIN,
  POPUP_METRICS.modelTriggerTop
)
const LANGUAGE_TRIGGER = getTriggerOrigin(
  POPUP_ORIGIN,
  POPUP_METRICS.languageTriggerTop
)

// Where each run's first move heads, and where the first run starts.
const MODEL_TRIGGER_POINT: Point = {
  x: MODEL_TRIGGER.x + 200,
  y: MODEL_TRIGGER.y + 18,
}

type Panels = Record<PopupMenu, { entries: PanelEntry[]; origin: Point }>

const MODEL_PANEL_ORIGIN = getPanelOrigin(
  POPUP_ORIGIN,
  POPUP_METRICS.modelTriggerTop
)
const LANGUAGE_PANEL_ORIGIN = getPanelOrigin(
  POPUP_ORIGIN,
  POPUP_METRICS.languageTriggerTop
)

type Scene = {
  openMenu: PopupMenu | null
  modelId: string
  languageId: string
  /** `<menu>-trigger` or `<menu>:<option id>`. */
  hovered: string | null
  pressed: boolean
}

const INITIAL_SCENE: Scene = {
  openMenu: null,
  modelId: DEFAULT_MODEL_ID,
  languageId: DEFAULT_LANGUAGE_ID,
  hovered: null,
  pressed: false,
}

/** A point on an option's row, `x` px in from the panel's left edge. */
const getOptionPoint = (
  panels: Panels,
  menu: PopupMenu,
  id: string,
  scroll: number,
  x: number
): Point => {
  const { entries, origin } = panels[menu]
  const top = getPanelEntryTops(entries)[findOptionIndex(entries, id)]

  return { x: origin.x + x, y: origin.y + top - scroll + 17 }
}

const wait = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const id = setTimeout(resolve, ms)
    signal.addEventListener(
      "abort",
      () => {
        clearTimeout(id)
        reject(signal.reason)
      },
      { once: true }
    )
  })

type PopupAnimationProps = {
  strings: PopupStrings & ModelMenuLabels
  /** The Spoken language menu as the extension shows it in the page's language. */
  languageEntries: PanelEntry[]
  dir: "ltr" | "rtl"
  /** Hold the first run until this many ms after mount, e.g. while a parent fades in. */
  startDelay?: number
  /** Stop and reset. Unpausing starts again from the beginning. */
  paused?: boolean
  /** Called each time a run finishes, just before the next one starts. */
  onLoopEnd?: () => void
  /** Accessible description. Without it the animation is hidden from assistive tech. */
  label?: string
  className?: string
}

/**
 * The pointer scrolls TypeTarget's model list to the bottom without picking
 * one, then scrolls the language list the same way.
 */
export const PopupAnimation = ({
  strings,
  languageEntries,
  dir,
  startDelay = 0,
  paused = false,
  onLoopEnd,
  label,
  className,
}: PopupAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [scene, setScene] = useState(INITIAL_SCENE)
  const inView = useInView(containerRef, { amount: 0.3 })
  const reduceMotion = useReducedMotion()
  // A deadline rather than a duration, so scrolling out and back in doesn't wait again.
  const [readyAt] = useState(() => performance.now() + startDelay)
  const cursorX = useMotionValue(MODEL_TRIGGER_POINT.x)
  const cursorY = useMotionValue(MODEL_TRIGGER_POINT.y)
  const modelScroll = useMotionValue(0)
  const languageScroll = useMotionValue(0)
  const loopEnded = useEffectEvent(() => onLoopEnd?.())
  const panels = useMemo<Panels>(
    () => ({
      model: { entries: getModelEntries(strings), origin: MODEL_PANEL_ORIGIN },
      language: { entries: languageEntries, origin: LANGUAGE_PANEL_ORIGIN },
    }),
    [strings, languageEntries]
  )

  useLayoutEffect(() => {
    const element = containerRef.current
    if (!element) return

    // Fires once on observe, before paint, so there's no unscaled flash.
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / WIDTH)
    })
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      // The target is near the bottom of the list, so hold it scrolled there.
      const scroll = getMaxScroll(panels.model.entries)
      const { x, y } = getOptionPoint(
        panels,
        "model",
        MODEL_TARGET,
        scroll,
        150
      )
      modelScroll.set(scroll)
      cursorX.set(x)
      cursorY.set(y)
      return
    }
    if (!inView || paused) return

    const controller = new AbortController()
    const { signal } = controller
    const [firstLanguageId = DEFAULT_LANGUAGE_ID] =
      panels.language.entries.flatMap((entry) =>
        entry.kind === "option" && entry.id !== DEFAULT_LANGUAGE_ID
          ? [entry.id]
          : []
      )
    const scrolls: Record<PopupMenu, MotionValue<number>> = {
      model: modelScroll,
      language: languageScroll,
    }
    let current = INITIAL_SCENE

    const update = (patch: Partial<Scene>) => {
      const next = { ...current, ...patch }
      const changed = (Object.keys(next) as (keyof Scene)[]).some(
        (key) => next[key] !== current[key]
      )
      if (!changed) return

      current = next
      setScene(next)
    }

    const hitAt = (point: Point): string | null => {
      const { openMenu } = current
      if (openMenu) {
        const { entries, origin } = panels[openMenu]
        const hit = hitTestPanel(
          entries,
          origin,
          scrolls[openMenu].get(),
          point
        )
        if (hit.kind === "option") return `${openMenu}:${hit.id}`
        if (hit.kind === "gap") return null
      }
      if (isInTrigger(MODEL_TRIGGER, point)) return "model-trigger"
      return isInTrigger(LANGUAGE_TRIGGER, point) ? "language-trigger" : null
    }

    const hoverHere = () =>
      update({ hovered: hitAt({ x: cursorX.get(), y: cursorY.get() }) })

    const track = (start: (onComplete: () => void) => { stop: () => void }) =>
      new Promise<void>((resolve, reject) => {
        const controls = start(resolve)
        signal.addEventListener(
          "abort",
          () => {
            controls.stop()
            reject(signal.reason)
          },
          { once: true }
        )
      })

    const moveTo = (to: Point, bow: number) => {
      const from = { x: cursorX.get(), y: cursorY.get() }
      const path = createHumanPath(from, to, bow)

      return track((onComplete) =>
        animate(0, 1, {
          duration: getHumanMoveDuration(from, to),
          ease: [...HUMAN_EASE],
          onUpdate: (t) => {
            const point = path(t)
            cursorX.set(point.x)
            cursorY.set(point.y)
            hoverHere()
          },
          onComplete,
        })
      )
    }

    const moveToOption = (menu: PopupMenu, id: string, x: number, bow = 0) =>
      moveTo(getOptionPoint(panels, menu, id, scrolls[menu].get(), x), bow)

    // A wheel notch scrolls smoothly; the rows slide under a still pointer, so hover follows them.
    const wheel = async (
      menu: PopupMenu,
      notches: number,
      gap: number,
      duration = 0.18
    ) => {
      const scroll = scrolls[menu]
      const max = getMaxScroll(panels[menu].entries)
      for (let notch = 0; notch < Math.abs(notches); notch++) {
        const target = Math.min(
          max,
          Math.max(0, scroll.get() + Math.sign(notches) * WHEEL_NOTCH)
        )
        await track((onComplete) =>
          animate(scroll, target, {
            duration,
            ease: "easeOut",
            onUpdate: hoverHere,
            onComplete,
          })
        )
        await wait(gap, signal)
      }
    }

    // The click lands on release, like the popup's buttons.
    const click = async (patch: Partial<Scene>) => {
      update({ pressed: true })
      await wait(110, signal)
      update({ pressed: false, ...patch })
      hoverHere()
    }

    const run = async () => {
      await wait(Math.max(0, readyAt - performance.now()), signal)
      for (;;) {
        const loopStart = performance.now()
        modelScroll.set(0)
        languageScroll.set(0)
        update(INITIAL_SCENE)
        hoverHere()
        await wait(200, signal)

        // Browse the models: into the local ones, then a quick spin past the hosted ones to the end.
        await moveTo(MODEL_TRIGGER_POINT, -0.1)
        await wait(120, signal)
        await click({ openMenu: "model" })
        await wait(200, signal)
        await moveToOption("model", "tiny-q8_0", 150, 0.08)
        await wait(100, signal)
        await wheel(
          "model",
          Math.ceil(getMaxScroll(panels.model.entries) / WHEEL_NOTCH),
          20,
          0.1
        )
        await wait(250, signal)
        // Esc: the list closes under the still pointer, leaving the model unchanged.
        update({ openMenu: null })
        hoverHere()
        await wait(150, signal)

        await moveTo(
          { x: LANGUAGE_TRIGGER.x + 186, y: LANGUAGE_TRIGGER.y + 17 },
          0.12
        )
        await wait(120, signal)
        await click({ openMenu: "language" })
        await wait(200, signal)
        // The first language after Auto, which depends on the page's language.
        await moveToOption("language", firstLanguageId, 140, 0.08)
        await wait(80, signal)
        await wheel("language", 6, 40)
        await wait(250, signal)
        // Esc again, leaving Auto selected. The pointer rests for whatever is
        // left of the run, then the loop restarts by heading back to the model trigger.
        update({ openMenu: null })
        hoverHere()
        await wait(Math.max(0, loopStart + LOOP_MS - performance.now()), signal)
        loopEnded()
      }
    }

    run().catch((error: unknown) => {
      if (!signal.aborted) throw error
    })

    return () => {
      controller.abort()
      setScene(INITIAL_SCENE)
      // So the next run starts from rest, as the first one does.
      cursorX.set(MODEL_TRIGGER_POINT.x)
      cursorY.set(MODEL_TRIGGER_POINT.y)
    }
  }, [
    panels,
    inView,
    paused,
    reduceMotion,
    readyAt,
    cursorX,
    cursorY,
    modelScroll,
    languageScroll,
  ])

  // Reduced motion: hold a frame of the open model list instead of looping.
  // The server can't know the preference, so wait until mounted (scale is
  // measured) to avoid a hydration mismatch.
  const shown: Scene =
    reduceMotion && scale !== null
      ? {
          ...INITIAL_SCENE,
          openMenu: "model",
          hovered: `model:${MODEL_TARGET}`,
        }
      : scene

  return (
    <div
      ref={containerRef}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      // The stage is laid out in px from the left; the popup sets its own direction.
      dir="ltr"
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      className={cn(
        "pointer-events-none relative w-full overflow-hidden select-none",
        className
      )}
    >
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          transform: `scale(${scale ?? 1})`,
        }}
        className={cn(
          "absolute top-0 left-0 origin-top-left",
          scale === null && "invisible"
        )}
      >
        <MockPopup
          position={POPUP_ORIGIN}
          strings={strings}
          modelEntries={panels.model.entries}
          languageEntries={panels.language.entries}
          dir={dir}
          modelId={shown.modelId}
          languageId={shown.languageId}
          openMenu={shown.openMenu}
          hovered={shown.hovered}
          modelScroll={modelScroll}
          languageScroll={languageScroll}
        />
        <MockCursor x={cursorX} y={cursorY} pressed={shown.pressed} />
      </div>
    </div>
  )
}
