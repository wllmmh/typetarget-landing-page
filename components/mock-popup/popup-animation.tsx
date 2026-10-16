"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
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
  LANGUAGE_ENTRIES,
  MODEL_ENTRIES,
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
import { MockPopup, type PopupMenu } from "./mock-popup"

const WIDTH = 640
const HEIGHT = 600
// Centred; the popup is about 530px tall.
const POPUP_ORIGIN: Point = { x: 160, y: 35 }

const MODEL_TARGET = "large-v3-q5_0"
// One wheel notch, as Chrome scrolls it at 100% zoom.
const WHEEL_NOTCH = 100

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

const PANELS: Record<PopupMenu, { entries: PanelEntry[]; origin: Point }> = {
  model: {
    entries: MODEL_ENTRIES,
    origin: getPanelOrigin(POPUP_ORIGIN, POPUP_METRICS.modelTriggerTop),
  },
  language: {
    entries: LANGUAGE_ENTRIES,
    origin: getPanelOrigin(POPUP_ORIGIN, POPUP_METRICS.languageTriggerTop),
  },
}

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
  menu: PopupMenu,
  id: string,
  scroll: number,
  x: number
): Point => {
  const { entries, origin } = PANELS[menu]
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
  /** Hold the first run until this many ms after mount, e.g. while a parent fades in. */
  startDelay?: number
  /** Accessible description. Without it the animation is hidden from assistive tech. */
  label?: string
  className?: string
}

/**
 * The pointer scrolls TypeTarget's model list to the bottom without picking
 * one, then scrolls the language list the same way.
 */
export const PopupAnimation = ({
  startDelay = 0,
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
      const scroll = getMaxScroll(MODEL_ENTRIES)
      const { x, y } = getOptionPoint("model", MODEL_TARGET, scroll, 150)
      modelScroll.set(scroll)
      cursorX.set(x)
      cursorY.set(y)
      return
    }
    if (!inView) return

    const controller = new AbortController()
    const { signal } = controller
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
        const { entries, origin } = PANELS[openMenu]
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
      moveTo(getOptionPoint(menu, id, scrolls[menu].get(), x), bow)

    // A wheel notch scrolls smoothly; the rows slide under a still pointer, so hover follows them.
    const wheel = async (menu: PopupMenu, notches: number, gap: number) => {
      const scroll = scrolls[menu]
      const max = getMaxScroll(PANELS[menu].entries)
      for (let notch = 0; notch < Math.abs(notches); notch++) {
        const target = Math.min(
          max,
          Math.max(0, scroll.get() + Math.sign(notches) * WHEEL_NOTCH)
        )
        await track((onComplete) =>
          animate(scroll, target, {
            duration: 0.18,
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
        modelScroll.set(0)
        languageScroll.set(0)
        update(INITIAL_SCENE)
        hoverHere()
        await wait(700, signal)

        // Browse the models: down the local ones, on past the hosted ones, to the end.
        await moveTo(MODEL_TRIGGER_POINT, -0.1)
        await wait(300, signal)
        await click({ openMenu: "model" })
        await wait(400, signal)
        await moveToOption("model", "tiny-q8_0", 150, 0.08)
        await wait(260, signal)
        await moveToOption("model", "base-q5_1", 132)
        await wait(320, signal)
        await moveToOption("model", "base", 160, -0.06)
        await wait(240, signal)
        await wheel("model", 3, 260)
        await wait(200, signal)
        await wheel(
          "model",
          Math.ceil(getMaxScroll(MODEL_ENTRIES) / WHEEL_NOTCH) - 3,
          220
        )
        await wait(700, signal)
        // Esc: the list closes under the still pointer, leaving the model unchanged.
        update({ openMenu: null })
        hoverHere()
        await wait(500, signal)

        await moveTo(
          { x: LANGUAGE_TRIGGER.x + 186, y: LANGUAGE_TRIGGER.y + 17 },
          0.12
        )
        await wait(280, signal)
        await click({ openMenu: "language" })
        await wait(380, signal)
        await moveToOption("language", "id", 140, 0.08)
        await wait(200, signal)
        await wheel("language", 16, 90)
        await wait(600, signal)
        // Esc again, leaving Auto selected. The pointer stays put and the loop
        // restarts by heading back to the model trigger.
        update({ openMenu: null })
        hoverHere()
        await wait(900, signal)
      }
    }

    run().catch((error: unknown) => {
      if (!signal.aborted) throw error
    })

    return () => {
      controller.abort()
      setScene(INITIAL_SCENE)
    }
  }, [
    inView,
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
