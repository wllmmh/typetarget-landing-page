import type { Point } from "@/components/mock-context-menu/layout"

export type PanelEntry =
  | { kind: "group"; label: string; action?: string }
  | { kind: "option"; id: string; label: string; detail?: string }

export type PanelHit =
  { kind: "outside" } | { kind: "gap" } | { kind: "option"; id: string }

/**
 * From the extension's popup.css: 13px text on a 1.5 line height, so a
 * trigger is 6 + 19.5 + 6 + 2px border and a section is a 1px rule, 10px
 * padding and a 24px heading above it.
 */
export const POPUP_METRICS = {
  width: 320,
  paddingX: 16,
  modelTriggerTop: 77.5,
  languageTriggerTop: 158,
  triggerHeight: 33.5,
  panelGap: 4,
  panelPaddingY: 4,
  // popup.css's 260px max-height is the content box; the 4px padding adds to it.
  panelMaxHeight: 268,
  optionHeight: 31.5,
  groupHeight: 24.5,
} as const

const {
  width,
  paddingX,
  triggerHeight,
  panelGap,
  panelPaddingY,
  panelMaxHeight,
  optionHeight,
  groupHeight,
} = POPUP_METRICS

export const PANEL_WIDTH = width - paddingX * 2

/** Chrome's Fluent scrollbar on Linux, measured from a render of the panel. */
export const SCROLLBAR_METRICS = {
  width: 15,
  /** The arrow buttons take 15px at each end, then 2px before the track. */
  trackInset: 17,
  thumbWidth: 9,
  arrowWidth: 9,
  arrowHeight: 5,
  /** From each end of the gutter to the arrow's base side. */
  arrowInset: 6,
} as const

const getEntryHeight = (entry: PanelEntry) =>
  entry.kind === "group" ? groupHeight : optionHeight

/** Top of each entry, relative to the top of the panel's unscrolled content. */
export const getPanelEntryTops = (entries: PanelEntry[]) =>
  entries.reduce<number[]>(
    (tops, entry, index) => [
      ...tops,
      index === 0
        ? panelPaddingY
        : tops[index - 1] + getEntryHeight(entries[index - 1]),
    ],
    []
  )

const getContentHeight = (entries: PanelEntry[]) =>
  entries.reduce(
    (height, entry) => height + getEntryHeight(entry),
    panelPaddingY * 2
  )

export const getPanelHeight = (entries: PanelEntry[]) =>
  Math.min(getContentHeight(entries), panelMaxHeight)

export const getMaxScroll = (entries: PanelEntry[]) =>
  getContentHeight(entries) - getPanelHeight(entries)

/** The thumb's length and how far it travels over the full scroll range. */
export const getScrollbarThumb = (entries: PanelEntry[]) => {
  const height = getPanelHeight(entries)
  const track = height - SCROLLBAR_METRICS.trackInset * 2
  const length = (track * height) / getContentHeight(entries)

  return { length, travel: track - length }
}

export const findOptionIndex = (entries: PanelEntry[], id: string) =>
  entries.findIndex((entry) => entry.kind === "option" && entry.id === id)

/** Top-left of a trigger, given the popup's top-left. */
export const getTriggerOrigin = (popup: Point, triggerTop: number): Point => ({
  x: popup.x + paddingX,
  y: popup.y + triggerTop,
})

/** Top-left of the panel that opens below a trigger. */
export const getPanelOrigin = (popup: Point, triggerTop: number): Point => ({
  x: popup.x + paddingX,
  y: popup.y + triggerTop + triggerHeight + panelGap,
})

export const isInTrigger = (origin: Point, point: Point) =>
  point.x >= origin.x &&
  point.x < origin.x + PANEL_WIDTH &&
  point.y >= origin.y &&
  point.y < origin.y + triggerHeight

export const hitTestPanel = (
  entries: PanelEntry[],
  origin: Point,
  scroll: number,
  point: Point
): PanelHit => {
  const x = point.x - origin.x
  const y = point.y - origin.y

  if (x < 0 || x >= PANEL_WIDTH || y < 0 || y >= getPanelHeight(entries)) {
    return { kind: "outside" }
  }
  if (getMaxScroll(entries) > 0 && x >= PANEL_WIDTH - SCROLLBAR_METRICS.width) {
    return { kind: "gap" }
  }

  const contentY = y + scroll
  const tops = getPanelEntryTops(entries)
  const entry = entries.find(
    (candidate, i) =>
      candidate.kind === "option" &&
      contentY >= tops[i] &&
      contentY < tops[i] + optionHeight
  )

  return entry?.kind === "option"
    ? { kind: "option", id: entry.id }
    : { kind: "gap" }
}
