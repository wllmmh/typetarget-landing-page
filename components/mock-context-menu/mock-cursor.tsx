"use client"

import { motion, type MotionValue } from "motion/react"

type MockCursorProps = {
  /** Position of the arrow's tip, in the container's px. */
  x: MotionValue<number>
  y: MotionValue<number>
  pressed?: boolean
}

/** Non-interactive arrow pointer whose tip sits exactly on (x, y). */
export const MockCursor = ({ x, y, pressed = false }: MockCursorProps) => (
  <motion.div
    aria-hidden
    style={{ x, y }}
    className="pointer-events-none absolute top-0 left-0 z-10"
  >
    <motion.svg
      width={14}
      height={21}
      viewBox="0 0 14 21"
      animate={{ scale: pressed ? 0.88 : 1 }}
      transition={{ duration: 0.08 }}
      // Shift so the tip of the path, not the svg corner, is the hotspot.
      className="origin-[1px_1px] -translate-x-px -translate-y-px drop-shadow-[0_1px_1px_rgb(0_0_0/0.35)]"
    >
      <path
        d="M1 1v15.5l3.6-3.4 2.4 5.6 2.6-1.1-2.4-5.5H12z"
        fill="#000"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
    </motion.svg>
  </motion.div>
)
