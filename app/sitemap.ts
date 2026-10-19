import type { MetadataRoute } from "next"

import { LOCALES, languageAlternates, localePath } from "@/lib/i18n/locales"
import { SITE_URL } from "@/lib/site"

// Static export only prerenders route handlers marked static.
export const dynamic = "force-static"

const absolute = (path: string) => new URL(path, SITE_URL).href

// No `lastModified`: a build date on every URL would claim changes that didn't happen.
const sitemap = (): MetadataRoute.Sitemap => {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates()).map(([tag, path]) => [
      tag,
      absolute(path),
    ])
  )
  return LOCALES.map((locale) => ({
    url: absolute(localePath(locale)),
    alternates: { languages },
  }))
}

export default sitemap
