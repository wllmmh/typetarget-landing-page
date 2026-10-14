import type { ReactNode } from "react"

/** Highlights text the reader types or clicks: addresses, button labels, menu items. */
export const Code = ({ children }: { children: ReactNode }) => (
  <code className="border bg-muted px-1.5 py-0.5 text-[0.8125rem] whitespace-nowrap">
    {children}
  </code>
)
