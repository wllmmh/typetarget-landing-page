import type { ReactNode } from "react"

type Row = { label: string; value: ReactNode }

const rows: Row[] = [
  {
    label: "No recording limits.",
    value: (
      <>
        Leave it running through a full-day conference. TypeTarget puts no cap
        on how long a session can go.
        <a
          href="#limits-note"
          className="text-primary no-underline"
          aria-label="See note on provider limits"
        >
          *
        </a>
      </>
    ),
  },
  {
    label: "No storage limits.",
    value:
      "TypeTarget doesn't store transcripts, so there's nothing to fill up. Every word goes straight into the field you chose, and you can save it as a .txt file on your own computer. No servers, no accounts, no logs.",
  },
  {
    label: "Free forever.",
    value:
      "Free and open source under the MIT licence. No trial, no paid tier, no account to create. The transcription models run on your own Google or Groq account, and both offer a free tier.",
  },
]

export const SpecSheet = () => (
  <section
    id="own"
    aria-labelledby="own-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        <h2 id="own-heading" className="heading">
          No limits. Free forever.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          No meter running, no cap on what you keep. Record as much as you want, for as long as you want.
        </p>
      </div>
      <div className="min-w-0 lg:col-span-8">
        <dl className="border-b">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2 border-t py-6">
              <dt className="text-xl font-semibold tracking-tight">{label}</dt>
              <dd className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p
          id="limits-note"
          className="mt-4 text-xs leading-relaxed text-muted-foreground"
        >
          * TypeTarget sets no limit of its own. Hosted models (Gemini, Groq)
          apply their own free-tier quotas, which Google and Groq set and can
          change at any time. Local Whisper has no quota.
        </p>
      </div>
    </div>
  </section>
)
