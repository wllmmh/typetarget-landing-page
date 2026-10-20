import type { ReactNode } from "react"
import { PlusIcon } from "@phosphor-icons/react/ssr"

import { Code } from "@/components/landing/code"
import { MockAiStudioKeys } from "@/components/landing/mock-ai-studio-keys"
import { MockGroqCreateKey } from "@/components/landing/mock-groq-keys"
import {
  CONTACT_URL,
  DOWNLOAD_URL,
  GEMINI_KEYS_URL,
  GEMINI_LANGUAGES_URL,
  GROQ_KEYS_URL,
  WHISPER_LANGUAGES_URL,
} from "@/lib/site"
import type { ExtensionStrings } from "@/lib/i18n/extension-strings"
import { format, rich } from "@/lib/i18n/format"
import type { Messages } from "@/lib/i18n/messages/en"

const linkClass =
  "text-foreground underline decoration-primary underline-offset-4"

const code = (text: string) => <Code>{text}</Code>
const bold = (text: string) => (
  <span className="font-semibold text-foreground">{text}</span>
)
const linkTo = (href: string, text: string) => (
  <a href={href} className={linkClass}>
    {text}
  </a>
)
const link = (href: string) => (text: string) => linkTo(href, text)

const getQuestions = (
  m: Messages["faq"],
  extension: ExtensionStrings
): { q: string; a: ReactNode; id?: string }[] => [
  m.microphone,
  m.needKey,
  {
    q: m.getKey.q,
    a: (
      <>
        {rich(m.getKey.gemini, {
          b: bold,
          link: link(GEMINI_KEYS_URL),
          code,
        })}
        <MockAiStudioKeys label={m.getKey.aiStudioImage} />
        <ol className="list-decimal space-y-1 ps-5">
          {m.getKey.geminiSteps.map((step) => (
            <li key={step}>{rich(step, { code })}</li>
          ))}
        </ol>
        <p className="mt-6">
          {rich(m.getKey.groq, { b: bold, link: link(GROQ_KEYS_URL), code })}
        </p>
        <MockGroqCreateKey label={m.getKey.groqImage} />
        <ol className="list-decimal space-y-1 ps-5">
          {m.getKey.groqSteps.map((step) => (
            <li key={step}>{rich(step, { code })}</li>
          ))}
        </ol>
      </>
    ),
  },
  m.slow,
  {
    q: m.wrongLanguage.q,
    // The extension's own setting names, so they match its popup.
    a: rich(
      format(m.wrongLanguage.a, {
        model: extension.modelHeading,
        spokenLanguage: extension.spokenLanguageHeading,
        auto: extension.spokenLanguageAuto,
        chunkLength: extension.chunkLength,
      }),
      { code }
    ),
  },
  m.audio,
  {
    q: m.languages.q,
    // The id sits on the answer so a #languages link opens the closed details element.
    id: "languages",
    a: (
      <>
        {rich(m.languages.transcription, {
          b: bold,
          whisper: link(WHISPER_LANGUAGES_URL),
          gemini: link(GEMINI_LANGUAGES_URL),
        })}
        <span className="mt-6 block">
          {rich(m.languages.interface, { b: bold })}
        </span>
      </>
    ),
  },
  m.browsers,
  {
    q: m.unpacked.q,
    a: rich(m.unpacked.a, { download: link(DOWNLOAD_URL), code }),
  },
  {
    q: m.contact.q,
    a: rich(m.contact.a, { contact: link(CONTACT_URL) }),
  },
]

export const Faq = ({
  messages,
  extension,
}: {
  messages: Messages["faq"]
  /** The extension's own text, for the settings an answer names. */
  extension: ExtensionStrings
}) => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <h2 id="faq-heading" className="heading min-w-0 lg:col-span-4">
        {messages.heading}
      </h2>
      <div className="min-w-0 border-b lg:col-span-8">
        {getQuestions(messages, extension).map(({ q, a, id }) => (
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
