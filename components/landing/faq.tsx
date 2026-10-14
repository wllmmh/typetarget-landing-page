import type { ReactNode } from "react"
import { PlusIcon } from "@phosphor-icons/react/ssr"

import { Code } from "@/components/landing/code"
import { MockAiStudioKeys } from "@/components/landing/mock-ai-studio-keys"
import { MockGroqCreateKey } from "@/components/landing/mock-groq-keys"
import {
  DOWNLOAD_URL,
  GEMINI_KEYS_URL,
  GEMINI_LANGUAGES_URL,
  GROQ_KEYS_URL,
  WHISPER_LANGUAGES_URL,
} from "@/lib/site"

const linkClass =
  "text-foreground underline decoration-primary underline-offset-4"

const questions: { q: string; a: ReactNode; id?: string }[] = [
  {
    q: "Does it transcribe my own voice?",
    a: "No. TypeTarget hears what you hear, not what you say. It doesn't use your microphone.",
  },
  {
    q: "Do I need an API key?",
    a: "Not to start. Local Whisper needs no key, but performance is dependent on your hardware. A Gemini or Groq key, which you get free from those providers, gives you live transcription on any machine.",
  },
  {
    q: "How do I get an API key?",
    a: (
      <>
        <span className="font-semibold text-foreground">Gemini.</span> Go to{" "}
        <a href={GEMINI_KEYS_URL} className={linkClass}>
          aistudio.google.com/api-keys
        </a>{" "}
        and click the <Code>Create API key</Code> button in the top right.
        <MockAiStudioKeys />
        <ol className="list-decimal space-y-1 pl-5">
          <li>Name your key anything.</li>
          <li>
            Choose <Code>Create new project</Code>, and name the project
            anything too.
          </li>
          <li>
            Click <Code>Create key</Code>.
          </li>
          <li>
            Copy the key it gives you and paste it into the API key field in
            TypeTarget.
          </li>
        </ol>
        <p className="mt-6">
          <span className="font-semibold text-foreground">Groq.</span> Go to{" "}
          <a href={GROQ_KEYS_URL} className={linkClass}>
            console.groq.com/keys
          </a>{" "}
          and click the <Code>Create API Key</Code> button.
        </p>
        <MockGroqCreateKey />
        <ol className="list-decimal space-y-1 pl-5">
          <li>Give it a Display Name of anything you want.</li>
          <li>
            Copy your Secret Key and paste it into the Groq API key field in
            TypeTarget.
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "Where does my audio go?",
    a: "With Local Whisper, nowhere: it's transcribed inside your browser. With Gemini or Groq, it goes only to that provider, using your own key. It never goes to TypeTarget.",
  },
  {
    q: "What languages do you support?",
    // The id sits on the answer so a #languages link opens the closed details element.
    id: "languages",
    a: (
      <>
        <span className="font-semibold text-foreground">Transcription.</span>{" "}
        Whisper models, local or on Groq, support{" "}
        <a href={WHISPER_LANGUAGES_URL} className={linkClass}>
          99 languages
        </a>
        . Gemini Transcribe has its own{" "}
        <a href={GEMINI_LANGUAGES_URL} className={linkClass}>
          list of supported languages
        </a>
        .
        <span className="mt-6 block">
          <span className="font-semibold text-foreground">Interface.</span> The
          TypeTarget interface is available in Arabic, Bengali, Chinese
          (Simplified and Traditional), Czech, English, Filipino, French,
          German, Hindi, Indonesian, Italian, Japanese, Korean, Marathi, Polish,
          Portuguese (Brazil and Portugal), Russian, Spanish, Telugu, Thai,
          Turkish, Ukrainian, Urdu and Vietnamese, matching your system and
          browser language.
        </span>
      </>
    ),
  },
  {
    q: "Which browsers does it work in?",
    a: "Chrome 116 or newer, installed from the Chrome Web Store. Chromium-based browsers like Edge and Brave can add it from the same listing.",
  },
  {
    q: "Can I load it without the Chrome Web Store?",
    a: (
      <>
        Yes.{" "}
        <a href={DOWNLOAD_URL} className={linkClass}>
          Download the zip
        </a>{" "}
        and extract it to get a folder called <Code>typetarget</Code>. Open{" "}
        <Code>chrome://extensions</Code> by pasting it into the address bar, as
        web pages can&rsquo;t link to it (in Edge it&rsquo;s{" "}
        <Code>edge://extensions</Code>, in Brave <Code>brave://extensions</Code>
        ). Turn on Developer mode in the top-right corner, click{" "}
        <Code>Load unpacked</Code>
        and select the extracted folder. To update later, download the new zip,
        replace the folder and press the reload arrow on TypeTarget&rsquo;s
        card.
      </>
    ),
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
        {questions.map(({ q, a, id }) => (
          <details key={q} className="group border-t">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-sm font-semibold outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              {q}
              <PlusIcon
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 group-open:rotate-45 motion-safe:transition-transform motion-safe:duration-150"
              />
            </summary>
            <div
              id={id}
              className="max-w-prose scroll-mt-28 pb-6 text-sm leading-relaxed text-muted-foreground"
            >
              {a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
)
