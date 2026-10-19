import type { ExtensionStrings } from "@/lib/i18n/extension-strings"
import { format, plainText } from "@/lib/i18n/format"
import { LOCALE_INFO, localePath, type Locale } from "@/lib/i18n/locales"
import type { Messages } from "@/lib/i18n/messages/en"
import { CHROME_STORE_URL, REPO_URL, SITE_URL, VERSION } from "@/lib/site"

/** The FAQ as plain text, in the order and wording `Faq` shows it. */
const getFaqText = (
  m: Messages["faq"],
  extension: ExtensionStrings
): { q: string; a: string }[] => [
  m.microphone,
  m.needKey,
  {
    q: m.getKey.q,
    a: [
      m.getKey.gemini,
      ...m.getKey.geminiSteps,
      m.getKey.groq,
      ...m.getKey.groqSteps,
    ]
      .map(plainText)
      .join(" "),
  },
  m.slow,
  {
    q: m.wrongLanguage.q,
    a: plainText(
      format(m.wrongLanguage.a, {
        model: extension.modelHeading,
        spokenLanguage: extension.spokenLanguageHeading,
        auto: extension.spokenLanguageAuto,
        chunkLength: extension.chunkLength,
      })
    ),
  },
  m.audio,
  {
    q: m.languages.q,
    a: [m.languages.transcription, m.languages.interface]
      .map(plainText)
      .join(" "),
  },
  m.browsers,
  { q: m.unpacked.q, a: plainText(m.unpacked.a) },
]

/**
 * What the page is about, for search engines and AI assistants: the extension
 * as a free browser app, and the FAQ. Everything here is also visible on the page.
 */
export const StructuredData = ({
  locale,
  messages,
  extension,
}: {
  locale: Locale
  messages: Messages
  extension: ExtensionStrings
}) => {
  const url = new URL(localePath(locale), SITE_URL).href
  const inLanguage = LOCALE_INFO[locale].tag
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "TypeTarget",
        url,
        description: messages.meta.description,
        inLanguage,
        applicationCategory: "BrowserApplication",
        operatingSystem: "Chrome 116+",
        softwareVersion: VERSION,
        image: `${SITE_URL}/typetarget-icon.png`,
        installUrl: CHROME_STORE_URL,
        downloadUrl: CHROME_STORE_URL,
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        sameAs: [CHROME_STORE_URL, REPO_URL],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage,
        about: { "@id": `${SITE_URL}/#app` },
        mainEntity: getFaqText(messages.faq, extension).map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // `<` escaped so no message text can close the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
