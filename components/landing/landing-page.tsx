import type { Metadata } from "next"

import { Faq } from "@/components/landing/faq"
import { Hero } from "@/components/landing/hero"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { SpecSheet } from "@/components/landing/spec-sheet"
import { UseCases } from "@/components/landing/use-cases"
import { getLanguageEntries } from "@/components/mock-popup/spoken-languages"
import { EXTENSION_STRINGS } from "@/lib/i18n/extension-strings"
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_INFO,
  localePath,
  type Locale,
} from "@/lib/i18n/locales"
import { getMessages } from "@/lib/i18n/messages"
import { SITE_URL } from "@/lib/site"

/** Title, description, and links to every language's version of the page for search engines. */
export const getPageMetadata = (locale: Locale): Metadata => {
  const { meta } = getMessages(locale)
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(locale),
      languages: {
        ...Object.fromEntries(
          LOCALES.map((alternate) => [
            LOCALE_INFO[alternate].tag,
            localePath(alternate),
          ])
        ),
        "x-default": localePath(DEFAULT_LOCALE),
      },
    },
  }
}

/** The whole landing page, in one of the extension's UI languages. */
export const LandingPage = ({ locale }: { locale: Locale }) => {
  const messages = getMessages(locale)
  const extension = EXTENSION_STRINGS[locale]
  const { tag, dir } = LOCALE_INFO[locale]

  return (
    <>
      <SiteHeader locale={locale} messages={messages.header} />
      <main>
        <Hero
          messages={messages.hero}
          addToBrowser={messages.header.addTo}
          steps={{
            messages: messages.steps,
            chromeMenu: messages.chromeMenu,
            extension,
            languageEntries: getLanguageEntries(
              tag,
              extension.spokenLanguageAuto
            ),
            popupDir: dir,
          }}
        />
        <UseCases messages={messages.useCases} />
        <SpecSheet messages={messages.spec} />
        <Faq messages={messages.faq} extension={extension} />
      </main>
      <SiteFooter messages={messages.footer} />
    </>
  )
}
