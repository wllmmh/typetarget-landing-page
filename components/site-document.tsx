import type { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LOCALE_INFO, type Locale } from "@/lib/i18n/locales"
import { cn } from "@/lib/utils"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

/** The `<html>` both root layouts share: `/` for English and `/[locale]` for the rest. */
export const SiteDocument = ({
  locale,
  beforePaint,
  children,
}: {
  locale: Locale
  /** Inline scripts that run before any of the page is parsed or painted. */
  beforePaint?: ReactNode
  children: ReactNode
}) => {
  const { tag, dir } = LOCALE_INFO[locale]
  return (
    <html
      lang={tag}
      dir={dir}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        geistMono.variable
      )}
    >
      <body>
        {beforePaint}
        <ThemeProvider forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
