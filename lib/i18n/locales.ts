/** The extension's 26 UI languages, by the slug each one's page lives at. English is served at `/`. */
export const LOCALES = [
  "ar",
  "bn",
  "cs",
  "de",
  "en",
  "es",
  "fil",
  "fr",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "mr",
  "pl",
  "pt-br",
  "pt-pt",
  "ru",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "vi",
  "zh-cn",
  "zh-tw",
] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

type LocaleInfo = {
  /** BCP 47 tag, for `lang`, `hreflang` and `Intl`. */
  tag: string
  /** The language's own name, as the language menu lists it. */
  name: string
  dir: "ltr" | "rtl"
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  ar: { tag: "ar", name: "العربية", dir: "rtl" },
  bn: { tag: "bn", name: "বাংলা", dir: "ltr" },
  cs: { tag: "cs", name: "Čeština", dir: "ltr" },
  de: { tag: "de", name: "Deutsch", dir: "ltr" },
  en: { tag: "en", name: "English", dir: "ltr" },
  es: { tag: "es", name: "Español", dir: "ltr" },
  fil: { tag: "fil", name: "Filipino", dir: "ltr" },
  fr: { tag: "fr", name: "Français", dir: "ltr" },
  hi: { tag: "hi", name: "हिन्दी", dir: "ltr" },
  id: { tag: "id", name: "Bahasa Indonesia", dir: "ltr" },
  it: { tag: "it", name: "Italiano", dir: "ltr" },
  ja: { tag: "ja", name: "日本語", dir: "ltr" },
  ko: { tag: "ko", name: "한국어", dir: "ltr" },
  mr: { tag: "mr", name: "मराठी", dir: "ltr" },
  pl: { tag: "pl", name: "Polski", dir: "ltr" },
  "pt-br": { tag: "pt-BR", name: "Português (Brasil)", dir: "ltr" },
  "pt-pt": { tag: "pt-PT", name: "Português (Portugal)", dir: "ltr" },
  ru: { tag: "ru", name: "Русский", dir: "ltr" },
  te: { tag: "te", name: "తెలుగు", dir: "ltr" },
  th: { tag: "th", name: "ไทย", dir: "ltr" },
  tr: { tag: "tr", name: "Türkçe", dir: "ltr" },
  uk: { tag: "uk", name: "Українська", dir: "ltr" },
  ur: { tag: "ur", name: "اردو", dir: "rtl" },
  vi: { tag: "vi", name: "Tiếng Việt", dir: "ltr" },
  "zh-cn": { tag: "zh-CN", name: "简体中文", dir: "ltr" },
  "zh-tw": { tag: "zh-TW", name: "繁體中文", dir: "ltr" },
}

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value)

export const localePath = (locale: Locale) =>
  locale === DEFAULT_LOCALE ? "/" : `/${locale}`

/** Where the language menu remembers an explicit choice, so `/` stops redirecting by browser language. */
export const LOCALE_STORAGE_KEY = "typetarget-locale"

/**
 * The first of the browser's preferred languages that the site has, by
 * language: `de-AT` gets `de`. Chinese splits on script or region, and
 * Portuguese on region (plain `pt` is Brazilian, as Chrome has it).
 *
 * Serialized into an inline script by `localeRedirectScript`, so it must not
 * reference anything outside its own body.
 */
export const matchLocale = (
  preferred: readonly string[],
  supported: readonly string[]
): string | undefined => {
  for (const tag of preferred) {
    const parts = tag.toLowerCase().split(/[-_]/)
    const language = parts[0]
    const subtags = parts.slice(1)
    let match = language === "tl" ? "fil" : language
    if (language === "zh") {
      const traditional = ["hant", "tw", "hk", "mo"].some((subtag) =>
        subtags.includes(subtag)
      )
      match = traditional ? "zh-tw" : "zh-cn"
    } else if (language === "pt") {
      match = subtags.length === 0 || subtags.includes("br") ? "pt-br" : "pt-pt"
    }
    if (supported.includes(match)) return match
  }
  return undefined
}

/**
 * Runs first in `<body>` on `/`, before the English page paints: a choice from the
 * language menu wins, then the browser's languages. English, or no match,
 * stays put. Static export has no server to read `Accept-Language`, so this is
 * the only place the choice can be made.
 */
export const localeRedirectScript = () => {
  const args = [LOCALE_STORAGE_KEY, LOCALES, DEFAULT_LOCALE]
    .map((arg) => JSON.stringify(arg))
    .join(",")
  return `(function(key, supported, fallback) {
  var match = ${matchLocale.toString()};
  var chosen = null;
  try { chosen = localStorage.getItem(key); } catch (error) { /* Storage blocked: go by the browser's languages. */ }
  var locale = supported.indexOf(chosen) !== -1
    ? chosen
    : match(navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language], supported);
  if (locale && locale !== fallback) {
    location.replace("/" + locale + location.search + location.hash);
  }
})(${args});`
}
