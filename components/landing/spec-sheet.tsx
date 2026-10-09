import type { ReactNode } from "react"

type Row = { label: string; value: ReactNode }

const rows: Row[] = [
  {
    label: "Who sees your transcripts",
    value:
      "You, and the page you type into. TypeTarget has no servers, accounts, analytics or logs, so its developer never receives your audio, your text or your keys.",
  },
  {
    label: "Storage limits",
    value:
      "None. TypeTarget doesn't store transcripts at all. They live in the field you chose, and you can save them as a .txt file on your own computer.",
  },
  {
    label: "Recording length",
    value: (
      <>
        Up to 18 hours nonstop on the Gemini API free tier.
        <a
          href="#gemini-note"
          className="text-primary no-underline"
          aria-label="See note on Gemini limits"
        >
          *
        </a>{" "}
        When a session hits Gemini&rsquo;s time limit, TypeTarget reconnects by
        itself without losing audio.
      </>
    ),
  },
  {
    label: "Price",
    value:
      "Free and open source, under the MIT licence. Hosted models run on your own API key, under your own account with Google or Groq, and both offer a free tier.",
  },
  {
    label: "Offline mode",
    value:
      "Local Whisper runs inside your browser with no key and no network, so audio never leaves your computer. It keeps up live only on fast machines, and TypeTarget tells you when it's falling behind.",
  },
  {
    label: "Models",
    value:
      "Gemini 3.5 Transcribe Live, Whisper Large v3 and v3 Turbo on Groq, or Local Whisper from tiny to medium.",
  },
  {
    label: "Languages",
    value:
      "Dozens with Gemini or Groq. The Local Whisper models are English-only.",
  },
  {
    label: "API keys",
    value:
      "Stored in this browser only, sent only to the provider they belong to, and never shown again once saved.",
  },
  {
    label: "Your own typing",
    value:
      "New text goes in after what's already there and leaves your edits alone, so you can annotate as it runs.",
  },
  {
    label: "Permissions",
    value:
      "No access to every site. It only acts on a tab when you right-click it or open the popup there.",
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
          Own your notes.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          TypeTarget is a pipe from a tab to a text box. It doesn&rsquo;t keep
          anything that goes through it.
        </p>
      </div>
      <div className="min-w-0 lg:col-span-8">
        <dl className="border-b">
          {rows.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-1 border-t py-4 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8"
            >
              <dt className="text-sm font-semibold">{label}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p
          id="gemini-note"
          className="mt-4 text-xs leading-relaxed text-muted-foreground"
        >
          * Subject to the Gemini API free-tier limits, which Google sets and
          can change at any time. Check your quota in Google AI Studio.
        </p>
      </div>
    </div>
  </section>
)
