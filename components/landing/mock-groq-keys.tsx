import { PlusIcon } from "@phosphor-icons/react/ssr"

import { cn } from "@/lib/utils"

// Colours sampled from GroqCloud's API keys page. Like GroqCloud's default, they follow the OS theme, not the page theme.
const groqTheme = cn(
  "[--gq-bg:#fff] [--gq-border:#f0603f] [--gq-button:#f8f8f7] [--gq-text:#1f1f1f]",
  "system-dark:[--gq-bg:#161616] system-dark:[--gq-border:#e8604b] system-dark:[--gq-button:#46443f] system-dark:[--gq-text:#e8e6e3]"
)

/** The Create API Key button on console.groq.com/keys. */
export const MockGroqCreateKey = () => (
  <div
    role="img"
    aria-label="GroqCloud's Create API Key button, with a plus sign before the label."
    className={cn(
      groqTheme,
      "my-4 flex justify-center border bg-(--gq-bg) px-5 py-6 [font-family:system-ui,sans-serif] text-(--gq-text)"
    )}
  >
    <span className="flex items-center gap-3 rounded-md border border-(--gq-border) bg-(--gq-button) px-4 py-2 text-sm">
      <PlusIcon aria-hidden className="size-4" />
      Create API Key
    </span>
  </div>
)
