"use client"

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react"

import { cn } from "@/lib/utils"

import { CHROME_PAGE_MENU, TYPETARGET_SUBMENU } from "./default-entries"
import { HUMAN_EASE, createHumanPath, getHumanMoveDuration } from "./human-path"
import {
  MENU_METRICS,
  findEntryIndex,
  getEntryTops,
  getSubmenuOrigin,
  hitTestMenu,
  type MenuHit,
  type MockMenuEntry,
  type Point,
} from "./layout"
import { MockContextMenu, MockContextSubmenu } from "./mock-context-menu"
import { MockCursor } from "./mock-cursor"

type Scene = {
  mainOpen: boolean
  subOpen: boolean
  mainHighlight: number | null
  subHighlight: number | null
  pressed: boolean
}

const CLOSED_SCENE: Scene = {
  mainOpen: false,
  subOpen: false,
  mainHighlight: null,
  subHighlight: null,
  pressed: false,
}

const OUTSIDE: MenuHit = { kind: "outside" }

const PARENT_ID = "typetarget"

type ContextMenuAnimationProps = {
  /** Where the cursor rests and right-clicks, in stage px. */
  cursorStart: Point
  /** Where the cursor clicks. Defaults to a spot on the target submenu row. */
  cursorEnd?: Point
  /** Top-left of the context menu. Defaults to `cursorStart`, like a real right-click. */
  menuPosition?: Point
  submenuEntries?: MockMenuEntry[]
  /** Id of the submenu item the cursor hovers and clicks. */
  submenuTargetId?: string
  /** Rendered behind the menus, filling the container. */
  background?: ReactNode
  /** Logical stage size. Everything is laid out in these px and scaled to fit. */
  width?: number
  height?: number
  /** Accessible description. Without it the animation is hidden from assistive tech. */
  label?: string
  className?: string
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

export const ContextMenuAnimation = ({
  cursorStart,
  cursorEnd,
  menuPosition = cursorStart,
  submenuEntries = TYPETARGET_SUBMENU,
  submenuTargetId = "listen",
  background,
  width = 1280,
  height = 800,
  label,
  className,
}: ContextMenuAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [scene, setScene] = useState(CLOSED_SCENE)
  const inView = useInView(containerRef, { amount: 0.3 })
  const reduceMotion = useReducedMotion()
  const cursorX = useMotionValue(cursorStart.x)
  const cursorY = useMotionValue(cursorStart.y)

  const { x: startX, y: startY } = cursorStart
  const { x: menuX, y: menuY } = menuPosition
  const endX = cursorEnd?.x
  const endY = cursorEnd?.y

  const geometry = useMemo(() => {
    const parentIndex = findEntryIndex(CHROME_PAGE_MENU, PARENT_ID)
    const targetIndex = findEntryIndex(submenuEntries, submenuTargetId)
    const menuOrigin = { x: menuX, y: menuY }
    const submenuOrigin = getSubmenuOrigin({
      menuOrigin,
      entries: CHROME_PAGE_MENU,
      parentIndex,
      boundsWidth: width,
    })
    const opensRight = submenuOrigin.x > menuX
    const parentRowTop = submenuOrigin.y + MENU_METRICS.paddingY
    const targetRowTop =
      submenuOrigin.y + getEntryTops(submenuEntries)[targetIndex]

    return {
      parentIndex,
      targetIndex,
      menuOrigin,
      submenuOrigin,
      opensRight,
      start: { x: startX, y: startY },
      // A resting point on the parent row, near the edge the submenu opens from.
      waypoint: {
        x: opensRight ? menuX + MENU_METRICS.menuWidth - 90 : menuX + 90,
        y: parentRowTop + 14,
      },
      // Matches where the pointer sits in the reference screenshot.
      end:
        endX !== undefined && endY !== undefined
          ? { x: endX, y: endY }
          : { x: submenuOrigin.x + 118, y: targetRowTop + 26 },
    }
  }, [
    startX,
    startY,
    endX,
    endY,
    menuX,
    menuY,
    width,
    submenuEntries,
    submenuTargetId,
  ])

  useLayoutEffect(() => {
    const element = containerRef.current
    if (!element) return

    // Fires once on observe, before paint, so there's no unscaled flash.
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width)
    })
    observer.observe(element)

    return () => observer.disconnect()
  }, [width])

  useEffect(() => {
    if (reduceMotion) {
      cursorX.set(geometry.end.x)
      cursorY.set(geometry.end.y)
      return
    }
    if (!inView) return

    const controller = new AbortController()
    const { signal } = controller
    const {
      parentIndex,
      menuOrigin,
      submenuOrigin,
      opensRight,
      start,
      waypoint,
      end,
    } = geometry
    let current = CLOSED_SCENE
    let previous = start

    const update = (patch: Partial<Scene>) => {
      const next = { ...current, ...patch }
      const changed = (Object.keys(next) as (keyof Scene)[]).some(
        (key) => next[key] !== current[key]
      )
      if (!changed) return

      current = next
      setScene(next)
    }

    const hoverAt = (point: Point) => {
      const headingToSubmenu = opensRight
        ? point.x > previous.x
        : point.x < previous.x
      previous = point

      const subHit = current.subOpen
        ? hitTestMenu(
            submenuEntries,
            submenuOrigin,
            MENU_METRICS.submenuWidth,
            point
          )
        : OUTSIDE

      if (subHit.kind !== "outside") {
        update({
          mainHighlight: parentIndex,
          subHighlight:
            subHit.kind === "item" ? subHit.index : current.subHighlight,
        })
        return
      }

      const mainHit = current.mainOpen
        ? hitTestMenu(
            CHROME_PAGE_MENU,
            menuOrigin,
            MENU_METRICS.menuWidth,
            point
          )
        : OUTSIDE

      // Safe-triangle: crossing other rows on the way into an open submenu keeps it.
      if (current.subOpen && headingToSubmenu) {
        update({ mainHighlight: parentIndex, subHighlight: null })
        return
      }

      update({
        subHighlight: null,
        mainHighlight:
          mainHit.kind === "item"
            ? mainHit.index
            : mainHit.kind === "gap"
              ? current.mainHighlight
              : current.subOpen
                ? parentIndex
                : null,
      })
    }

    const moveTo = (to: Point, bow: number) =>
      new Promise<void>((resolve, reject) => {
        const from = { x: cursorX.get(), y: cursorY.get() }
        const path = createHumanPath(from, to, bow)
        const controls = animate(0, 1, {
          duration: getHumanMoveDuration(from, to),
          ease: [...HUMAN_EASE],
          onUpdate: (t) => {
            const point = path(t)
            cursorX.set(point.x)
            cursorY.set(point.y)
            hoverAt(point)
          },
          onComplete: resolve,
        })
        signal.addEventListener(
          "abort",
          () => {
            controls.stop()
            reject(signal.reason)
          },
          { once: true }
        )
      })

    const run = async () => {
      for (;;) {
        cursorX.set(start.x)
        cursorY.set(start.y)
        previous = start
        update(CLOSED_SCENE)
        await wait(700, signal)

        // Right-click: Chrome opens the menu on press.
        update({ pressed: true, mainOpen: true })
        await wait(110, signal)
        update({ pressed: false })
        hoverAt(start)
        await wait(380, signal)

        await moveTo(waypoint, -0.12)
        await wait(200, signal)
        update({ subOpen: true })
        await wait(300, signal)

        await moveTo(end, -0.05)
        await wait(450, signal)

        // Left-click: the item activates on release and the menus dismiss.
        update({ pressed: true })
        await wait(120, signal)
        update(CLOSED_SCENE)
        await wait(550, signal)

        await moveTo(start, 0.14)
        await wait(500, signal)
      }
    }

    run().catch((error: unknown) => {
      if (!signal.aborted) throw error
    })

    return () => {
      controller.abort()
      setScene(CLOSED_SCENE)
    }
  }, [inView, reduceMotion, geometry, submenuEntries, cursorX, cursorY])

  // Reduced motion: hold the final hovered frame instead of looping. The server
  // can't know the preference, so wait until mounted (scale is measured) to
  // avoid a hydration mismatch.
  const shown: Scene =
    reduceMotion && scale !== null
      ? {
          mainOpen: true,
          subOpen: true,
          mainHighlight: geometry.parentIndex,
          subHighlight: geometry.targetIndex,
          pressed: false,
        }
      : scene

  return (
    <div
      ref={containerRef}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        "pointer-events-none relative w-full overflow-hidden select-none",
        className
      )}
    >
      {background && <div className="absolute inset-0">{background}</div>}
      <div
        style={{ width, height, transform: `scale(${scale ?? 1})` }}
        className={cn(
          "absolute top-0 left-0 origin-top-left",
          scale === null && "invisible"
        )}
      >
        <MockContextMenu
          position={geometry.menuOrigin}
          open={shown.mainOpen}
          highlightedIndex={shown.mainHighlight}
          pressed={shown.pressed && shown.subHighlight === null}
        />
        <MockContextSubmenu
          entries={submenuEntries}
          position={geometry.submenuOrigin}
          open={shown.subOpen}
          highlightedIndex={shown.subHighlight}
          pressed={shown.pressed}
        />
        <MockCursor x={cursorX} y={cursorY} pressed={shown.pressed} />
      </div>
    </div>
  )
}
