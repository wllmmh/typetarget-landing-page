import { PlusIcon } from "@phosphor-icons/react/ssr"

const questions = [
  {
    q: "Does it transcribe my own voice?",
    a: "No. TypeTarget hears what the tab plays, so on a call that's the other people. It doesn't use your microphone.",
  },
  {
    q: "Do I need an API key?",
    a: "Not to start. Local Whisper needs no key, but on most computers it can't keep up live. A Gemini or Groq key, which you get free from those providers, gives you live transcription on any machine.",
  },
  {
    q: "Where does my audio go?",
    a: "With Local Whisper, nowhere: it's transcribed inside your browser. With Gemini or Groq, it goes only to that provider, using your own key. It never goes to TypeTarget.",
  },
  {
    q: "Can the site I'm typing into see it?",
    a: "That site sees the text arrive, just as it would see your own typing, so only pick fields on sites you trust with the transcript. It never learns which tab you're listening to. Every other site can't tell TypeTarget is installed.",
  },
  {
    q: "Does it send messages in AI chats for me?",
    a: "No. It types into the box and stops there. You press Enter when you want a reply.",
  },
  {
    q: "Which browsers does it work in?",
    a: "Chrome 116 or newer, loaded unpacked. Chromium-based browsers like Edge and Brave install the same way.",
  },
]

export const Faq = () => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <h2 id="faq-heading" className="heading min-w-0 lg:col-span-4">
        Frequently asked questions.
      </h2>
      <div className="min-w-0 border-b lg:col-span-8">
        {questions.map(({ q, a }) => (
          <details key={q} className="group border-t">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-sm font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              {q}
              <PlusIcon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 group-open:rotate-45 motion-safe:transition-transform motion-safe:duration-150"
              />
            </summary>
            <p className="max-w-prose pb-6 text-sm leading-relaxed text-muted-foreground">
              {a}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
)
