import type { ReactNode } from "react"

import type { Messages } from "@/lib/i18n/messages/en"

type Row = { label: string; value: ReactNode }

const getRows = (m: Messages["spec"]): Row[] => [
  {
    label: m.recording.label,
    value: (
      <>
        {m.recording.value}
        <a
          href="#limits-note"
          className="text-primary no-underline"
          aria-label={m.limitsNoteLink}
        >
          *
        </a>
      </>
    ),
  },
  m.storage,
  m.account,
]

export const SpecSheet = ({ messages }: { messages: Messages["spec"] }) => (
  <section
    id="own"
    aria-labelledby="own-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        <h2 id="own-heading" className="heading">
          {messages.heading}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {messages.intro}
        </p>
      </div>
      <div className="min-w-0 lg:col-span-8">
        <dl className="border-b">
          {getRows(messages).map(({ label, value }) => (
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
          {messages.limitsNote}
        </p>
      </div>
    </div>
  </section>
)
