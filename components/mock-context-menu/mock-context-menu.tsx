"use client"

import { AnimatePresence, motion } from "motion/react"
import { CaretRightIcon } from "@phosphor-icons/react/ssr"

import { cn } from "@/lib/utils"

import { CHROME_PAGE_MENU, TYPETARGET_SUBMENU } from "./default-entries"
import { MENU_METRICS, type MockMenuEntry, type Point } from "./layout"

// Native menus follow the OS theme, not the page theme.
const menuTheme = cn(
  "[--mm-active:rgb(0_0_0/0.11)] [--mm-bg:#fff] [--mm-disabled:#636363] [--mm-fg:#1f1f1f] [--mm-hover:rgb(0_0_0/0.06)] [--mm-muted:#474747] [--mm-separator:#e0e0e0]",
  "[--mm-shadow:0_1px_2px_rgb(0_0_0/0.3),0_2px_6px_2px_rgb(0_0_0/0.15)]",
  "system-dark:[--mm-active:rgb(255_255_255/0.14)] system-dark:[--mm-bg:#292a2d] system-dark:[--mm-disabled:#8e918f] system-dark:[--mm-fg:#e3e3e3] system-dark:[--mm-hover:rgb(255_255_255/0.08)] system-dark:[--mm-muted:#c4c7c5] system-dark:[--mm-separator:#444746]",
  "system-dark:[--mm-shadow:0_1px_3px_rgb(0_0_0/0.5),0_4px_8px_3px_rgb(0_0_0/0.3)]"
)

type MockMenuProps = {
  entries?: MockMenuEntry[]
  /** Top-left corner, in the container's px. */
  position: Point
  open: boolean
  /** Entry index of the hovered row. */
  highlightedIndex?: number | null
  /** Shows the highlighted row in its pressed state. */
  pressed?: boolean
  className?: string
}

type MockMenuSurfaceProps = Required<Omit<MockMenuProps, "className">> & {
  width: number
  iconGutter: boolean
  className?: string
}

const MockMenuSurface = ({
  entries,
  position,
  open,
  highlightedIndex,
  pressed,
  width,
  iconGutter,
  className,
}: MockMenuSurfaceProps) => (
  <AnimatePresence>
    {open && (
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        style={{ left: position.x, top: position.y, width }}
        className={cn(
          menuTheme,
          "pointer-events-none absolute origin-top-left overflow-hidden rounded-[8px] bg-(--mm-bg) py-2 [font-family:system-ui,-apple-system,'Segoe_UI',Roboto,'Noto_Sans',Ubuntu,sans-serif] text-[14px] leading-5 font-normal tracking-normal whitespace-nowrap text-(--mm-fg) shadow-(--mm-shadow) select-none",
          className
        )}
      >
        {entries.map((entry, index) =>
          entry.kind === "separator" ? (
            <div
              key={`separator-${index}`}
              className="my-2 h-px bg-(--mm-separator)"
            />
          ) : (
            <div
              key={entry.id}
              style={{ height: MENU_METRICS.rowHeight }}
              className={cn(
                "flex items-center px-6",
                index === highlightedIndex &&
                  (pressed ? "bg-(--mm-active)" : "bg-(--mm-hover)"),
                entry.disabled && "text-(--mm-disabled)"
              )}
            >
              {iconGutter && (
                <span className="flex w-[30px] shrink-0 items-center text-(--mm-muted)">
                  {entry.icon}
                </span>
              )}
              <span className="truncate">{entry.label}</span>
              {entry.shortcut && (
                <span
                  className={cn(
                    "ml-auto pl-6",
                    !entry.disabled && "text-(--mm-muted)"
                  )}
                >
                  {entry.shortcut}
                </span>
              )}
              {entry.hasSubmenu && (
                <CaretRightIcon
                  size={14}
                  className="-mr-3 ml-auto text-(--mm-muted)"
                />
              )}
            </div>
          )
        )}
      </motion.div>
    )}
  </AnimatePresence>
)

/** Non-interactive replica of Chrome's page context menu, for animations. */
export const MockContextMenu = ({
  entries = CHROME_PAGE_MENU,
  highlightedIndex = null,
  pressed = false,
  ...props
}: MockMenuProps) => (
  <MockMenuSurface
    entries={entries}
    highlightedIndex={highlightedIndex}
    pressed={pressed}
    width={MENU_METRICS.menuWidth}
    iconGutter
    {...props}
  />
)

/** Non-interactive replica of a Chrome context submenu, for animations. */
export const MockContextSubmenu = ({
  entries = TYPETARGET_SUBMENU,
  highlightedIndex = null,
  pressed = false,
  ...props
}: MockMenuProps) => (
  <MockMenuSurface
    entries={entries}
    highlightedIndex={highlightedIndex}
    pressed={pressed}
    width={MENU_METRICS.submenuWidth}
    iconGutter={false}
    {...props}
  />
)
