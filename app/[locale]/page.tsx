import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LandingPage, getPageMetadata } from "@/components/landing/landing-page"
import { isLocale } from "@/lib/i18n/locales"

export const generateMetadata = async ({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return getPageMetadata(locale)
}

const Page = async ({ params }: PageProps<"/[locale]">) => {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <LandingPage locale={locale} />
}

export default Page
