import type { Point } from "./layout"

/**
 * Slow-ish start, quick middle and a long, gentle deceleration into the
 * target, like a hand homing in on a menu item.
 */
export const HUMAN_EASE = [0.3, 0.05, 0.15, 1] as const

/** Fitts's law: longer moves take longer, but sublinearly. In seconds. */
export const getHumanMoveDuration = (from: Point, to: Point) =>
  0.28 + 0.14 * Math.log2(Math.hypot(to.x - from.x, to.y - from.y) / 24 + 1)

/**
 * A cubic Bézier from `from` to `to` that arcs to one side. `bow` is the
 * bulge as a fraction of the distance; positive bends to the right of the
 * direction of travel (screen coordinates), negative to the left. The arc is
 * strongest early on and straightens out on approach, as wrist movements do.
 */
export const createHumanPath = (from: Point, to: Point, bow: number) => {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const length = Math.hypot(dx, dy) || 1
  // Unit normal to the right of travel.
  const nx = -dy / length
  const ny = dx / length
  const offset = bow * length

  const c1 = {
    x: from.x + dx * 0.25 + nx * offset,
    y: from.y + dy * 0.25 + ny * offset,
  }
  const c2 = {
    x: from.x + dx * 0.7 + nx * offset * 0.45,
    y: from.y + dy * 0.7 + ny * offset * 0.45,
  }

  return (t: number): Point => {
    const u = 1 - t
    const a = u * u * u
    const b = 3 * u * u * t
    const c = 3 * u * t * t
    const d = t * t * t

    return {
      x: a * from.x + b * c1.x + c * c2.x + d * to.x,
      y: a * from.y + b * c1.y + c * c2.y + d * to.y,
    }
  }
}
