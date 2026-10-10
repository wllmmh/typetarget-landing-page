import type { ReactNode } from "react"

export type Point = { x: number; y: number }

export type MockMenuEntry =
  | {
      kind: "item"
      id: string
      label: string
      shortcut?: string
      icon?: ReactNode
      disabled?: boolean
      hasSubmenu?: boolean
    }
  | { kind: "separator" }

export type MenuHit =
  { kind: "outside" } | { kind: "gap" } | { kind: "item"; index: number }

// Measured in px from a 1280×800 Chrome screenshot of this menu.
export const MENU_METRICS = {
  rowHeight: 32,
  separatorHeight: 17,
  paddingY: 8,
  menuWidth: 400,
  submenuWidth: 160,
} as const

const { rowHeight, separatorHeight, paddingY, menuWidth, submenuWidth } =
  MENU_METRICS

const getEntryHeight = (entry: MockMenuEntry) =>
  entry.kind === "separator" ? separatorHeight : rowHeight

/** Top of each entry, relative to the top of the menu. */
export const getEntryTops = (entries: MockMenuEntry[]) =>
  entries.reduce<number[]>(
    (tops, entry, index) => [
      ...tops,
      index === 0
        ? paddingY
        : tops[index - 1] + getEntryHeight(entries[index - 1]),
    ],
    []
  )

export const getMenuHeight = (entries: MockMenuEntry[]) =>
  entries.reduce(
    (height, entry) => height + getEntryHeight(entry),
    paddingY * 2
  )

export const findEntryIndex = (entries: MockMenuEntry[], id: string) =>
  entries.findIndex((entry) => entry.kind === "item" && entry.id === id)

export const hitTestMenu = (
  entries: MockMenuEntry[],
  origin: Point,
  width: number,
  point: Point
): MenuHit => {
  const x = point.x - origin.x
  const y = point.y - origin.y

  if (x < 0 || x >= width || y < 0 || y >= getMenuHeight(entries)) {
    return { kind: "outside" }
  }

  const tops = getEntryTops(entries)
  const index = entries.findIndex(
    (entry, i) =>
      entry.kind === "item" && y >= tops[i] && y < tops[i] + rowHeight
  )

  return index === -1 ? { kind: "gap" } : { kind: "item", index }
}

/** Like Chrome, the submenu's first row lines up with its parent row, and it flips left when it would overflow the container. */
export const getSubmenuOrigin = ({
  menuOrigin,
  entries,
  parentIndex,
  boundsWidth,
}: {
  menuOrigin: Point
  entries: MockMenuEntry[]
  parentIndex: number
  boundsWidth: number
}): Point => {
  const right = menuOrigin.x + menuWidth

  return {
    x: right + submenuWidth > boundsWidth ? menuOrigin.x - submenuWidth : right,
    y: menuOrigin.y + getEntryTops(entries)[parentIndex] - paddingY,
  }
}
