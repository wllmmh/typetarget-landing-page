import { CaretDownIcon, FileTextIcon, KeyIcon } from "@phosphor-icons/react/ssr"

import { cn } from "@/lib/utils"

// Colours sampled from AI Studio's API keys page. Like AI Studio's default, they follow the OS theme, not the page theme.
const studioTheme = cn(
  "[--as-bg:#fff] [--as-button-border:#c4c7c5] [--as-button:#fff] [--as-field-border:#e3e3e3] [--as-field:#fafafa] [--as-muted:#5f6368] [--as-text:#1f1f1f]",
  "system-dark:[--as-bg:#1b1b1b] system-dark:[--as-button-border:#333537] system-dark:[--as-button:#333537] system-dark:[--as-field-border:#282a2c] system-dark:[--as-field:#282a2c] system-dark:[--as-muted:#9aa0a6] system-dark:[--as-text:#e3e3e3]"
)

/** The top-right corner of aistudio.google.com/api-keys, in English like the page itself. `label` describes it in the reader's language. */
export const MockAiStudioKeys = ({ label }: { label: string }) => (
  <div
    role="img"
    aria-label={label}
    className={cn(
      studioTheme,
      "my-4 flex justify-center border bg-(--as-bg) px-5 py-6 [font-family:system-ui,sans-serif] text-(--as-text)"
    )}
  >
    <div className="flex flex-col items-end gap-5">
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-2 px-2">
          <FileTextIcon aria-hidden className="size-4" />
          API quickstart
        </span>
        <span className="flex items-center gap-2 rounded-xl border border-(--as-button-border) bg-(--as-button) px-3 py-2">
          <KeyIcon aria-hidden className="size-4" />
          Create API key
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-(--as-muted)">Filter by</span>
        <span className="flex w-40 items-center justify-between rounded-xl border border-(--as-field-border) bg-(--as-field) px-3 py-2">
          All projects
          <CaretDownIcon aria-hidden className="size-3.5" />
        </span>
      </div>
    </div>
  </div>
)
