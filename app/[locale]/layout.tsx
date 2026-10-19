import { notFound } from "next/navigation"

import { SiteDocument } from "@/components/site-document"
import { DEFAULT_LOCALE, LOCALES, isLocale } from "@/lib/i18n/locales"

// English lives at `/`, so `/en` isn't generated.
export const generateStaticParams = () =>
  LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }))

export const dynamicParams = false

const LocaleLayout = async ({ children, params }: LayoutProps<"/[locale]">) => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <SiteDocument locale={locale}>{children}</SiteDocument>
}

export default LocaleLayout
