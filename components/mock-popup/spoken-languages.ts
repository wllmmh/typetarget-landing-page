import "server-only"

import type { PanelEntry } from "./layout"

/** The extension's spoken languages (SPOKEN_LANGUAGES in src/domain/languages.ts). */
const SPOKEN_LANGUAGES = [
  "af", "am", "ar", "as", "az", "ba", "be", "bg", "bn", "bo", "br", "bs", "ca", "cs", "cy", "da",
  "de", "el", "en", "es", "et", "eu", "fa", "fi", "fo", "fr", "gl", "gu", "ha", "he", "hi", "hr",
  "ht", "hu", "hy", "id", "is", "it", "ja", "ka", "kk", "km", "kn", "ko", "la", "lb", "ln", "lo",
  "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "ne", "nl", "nn", "no", "oc",
  "pa", "pl", "ps", "pt", "ro", "ru", "sa", "sd", "si", "sk", "sl", "sn", "so", "sq", "sr", "su",
  "sv", "sw", "ta", "te", "tg", "th", "tk", "tl", "tr", "tt", "uk", "ur", "uz", "vi", "yi", "yo",
  "zh",
] as const // prettier-ignore

type SpokenLanguage = (typeof SPOKEN_LANGUAGES)[number]

/** Each language's own name (SPOKEN_LANGUAGE_NAMES in the extension). */
const ENDONYMS: Record<SpokenLanguage, string> = {
  af: "Afrikaans",
  am: "አማርኛ",
  ar: "العربية",
  as: "অসমীয়া",
  az: "Azərbaycan",
  ba: "Башҡорт теле",
  be: "Беларуская",
  bg: "Български",
  bn: "বাংলা",
  bo: "བོད་སྐད་",
  br: "Brezhoneg",
  bs: "Bosanski",
  ca: "Català",
  cs: "Čeština",
  cy: "Cymraeg",
  da: "Dansk",
  de: "Deutsch",
  el: "Ελληνικά",
  en: "English",
  es: "Español",
  et: "Eesti",
  eu: "Euskara",
  fa: "فارسی",
  fi: "Suomi",
  fo: "Føroyskt",
  fr: "Français",
  gl: "Galego",
  gu: "ગુજરાતી",
  ha: "Hausa",
  he: "עברית",
  hi: "हिन्दी",
  hr: "Hrvatski",
  ht: "Kreyòl ayisyen",
  hu: "Magyar",
  hy: "Հայերեն",
  id: "Bahasa Indonesia",
  is: "Íslenska",
  it: "Italiano",
  ja: "日本語",
  ka: "ქართული",
  kk: "Қазақ тілі",
  km: "ខ្មែរ",
  kn: "ಕನ್ನಡ",
  ko: "한국어",
  la: "Latina",
  lb: "Lëtzebuergesch",
  ln: "Lingála",
  lo: "ລາວ",
  lt: "Lietuvių",
  lv: "Latviešu",
  mg: "Malagasy",
  mi: "Māori",
  mk: "Македонски",
  ml: "മലയാളം",
  mn: "Монгол",
  mr: "मराठी",
  ms: "Bahasa Melayu",
  mt: "Malti",
  my: "မြန်မာ",
  ne: "नेपाली",
  nl: "Nederlands",
  nn: "Norsk nynorsk",
  no: "Norsk",
  oc: "Occitan",
  pa: "ਪੰਜਾਬੀ",
  pl: "Polski",
  ps: "پښتو",
  pt: "Português",
  ro: "Română",
  ru: "Русский",
  sa: "संस्कृत भाषा",
  sd: "سنڌي",
  si: "සිංහල",
  sk: "Slovenčina",
  sl: "Slovenščina",
  sn: "chiShona",
  so: "Soomaali",
  sq: "Shqip",
  sr: "Српски",
  su: "Basa Sunda",
  sv: "Svenska",
  sw: "Kiswahili",
  ta: "தமிழ்",
  te: "తెలుగు",
  tg: "Тоҷикӣ",
  th: "ไทย",
  tk: "Türkmen dili",
  tl: "Tagalog",
  tr: "Türkçe",
  tt: "Татар",
  uk: "Українська",
  ur: "اردو",
  uz: "O‘zbek",
  vi: "Tiếng Việt",
  yi: "ייִדיש",
  yo: "Èdè Yorùbá",
  zh: "中文",
}

/** Rows the mock renders: more than the animation ever scrolls into view. */
const SHOWN_LANGUAGES = 60

const capitalize = (text: string, locale: string) => {
  const [first = "", ...rest] = text
  return `${first.toLocaleUpperCase(locale)}${rest.join("")}`
}

/**
 * The start of the extension's Spoken language menu with the browser in
 * `locale` (spokenLanguageOptions in src/domain/languages.ts): Auto, then
 * each language by its name in that locale, in that locale's order, with its
 * own name beside it where that differs. Built at build time, so every
 * visitor sees Node's CLDR names rather than their own browser's.
 */
export const getLanguageEntries = (
  locale: string,
  autoLabel: string
): PanelEntry[] => {
  const displayNames = new Intl.DisplayNames(locale, {
    type: "language",
    fallback: "none",
  })
  const { compare } = new Intl.Collator(locale)
  const languages = SPOKEN_LANGUAGES.map((id) => {
    const endonym = ENDONYMS[id]
    const localName = displayNames.of(id)
    const label = localName ? capitalize(localName, locale) : endonym
    return { id, label, endonym: label === endonym ? undefined : endonym }
  }).sort((a, b) => compare(a.label, b.label))

  return [
    { kind: "option", id: "", label: autoLabel },
    ...languages.slice(0, SHOWN_LANGUAGES).map(({ id, label, endonym }) => ({
      kind: "option" as const,
      id,
      label,
      endonym,
    })),
  ]
}
