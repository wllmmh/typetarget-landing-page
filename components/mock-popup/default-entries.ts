import type { PanelEntry } from "./layout"

const local = (id: string, label: string, sizeMb: number): PanelEntry => ({
  kind: "option",
  id,
  label,
  detail: `${sizeMb} MB`,
})

/** The extension's model catalog (src/domain/models.ts), grouped by provider like its picker. */
export const MODEL_ENTRIES: PanelEntry[] = [
  { kind: "group", label: "Local" },
  local("tiny-q5_1", "Whisper Tiny Q5", 31),
  local("tiny-q8_0", "Whisper Tiny Q8", 42),
  local("tiny", "Whisper Tiny", 74),
  local("base-q5_1", "Whisper Base Q5", 57),
  local("base-q8_0", "Whisper Base Q8", 78),
  local("base", "Whisper Base", 141),
  local("small-q5_1", "Whisper Small Q5", 181),
  local("small-q8_0", "Whisper Small Q8", 252),
  local("small", "Whisper Small", 465),
  local("medium-q5_0", "Whisper Medium Q5", 514),
  local("medium-q8_0", "Whisper Medium Q8", 785),
  local("large-v3-turbo-q5_0", "Whisper Large v3 Turbo Q5", 547),
  local("large-v3-turbo-q8_0", "Whisper Large v3 Turbo Q8", 834),
  local("large-v2-q5_0", "Whisper Large v2 Q5", 1031),
  local("large-v3-q5_0", "Whisper Large v3 Q5", 1031),
  { kind: "group", label: "Google", action: "API key" },
  {
    kind: "option",
    id: "gemini-3.5-transcribe-live",
    label: "Gemini 3.5 Transcribe Live",
  },
  { kind: "group", label: "Groq", action: "API key" },
  {
    kind: "option",
    id: "groq-whisper-large-v3-turbo",
    label: "Whisper Large v3 Turbo",
  },
  { kind: "option", id: "groq-whisper-large-v3", label: "Whisper Large v3" },
]

export const DEFAULT_MODEL_ID = "tiny-q5_1"

const language = (id: string, label: string): PanelEntry => ({
  kind: "option",
  id,
  label,
})

/**
 * The start of the extension's spoken-language menu: Auto, then each
 * language by its own name in English collation order. The rest is never
 * scrolled into view.
 */
export const LANGUAGE_ENTRIES: PanelEntry[] = [
  language("", "Auto"),
  language("af", "Afrikaans"),
  language("az", "Azərbaycan"),
  language("id", "Bahasa Indonesia"),
  language("ms", "Bahasa Melayu"),
  language("su", "Basa Sunda"),
  language("bs", "Bosanski"),
  language("br", "Brezhoneg"),
  language("ca", "Català"),
  language("cs", "Čeština"),
  language("sn", "chiShona"),
  language("cy", "Cymraeg"),
  language("da", "Dansk"),
  language("de", "Deutsch"),
  language("yo", "Èdè Yorùbá"),
  language("et", "Eesti"),
  language("en", "English"),
  language("es", "Español"),
  language("eu", "Euskara"),
  language("fo", "Føroyskt"),
  language("fr", "Français"),
  language("gl", "Galego"),
  language("ha", "Hausa"),
  language("hr", "Hrvatski"),
  language("is", "Íslenska"),
  language("it", "Italiano"),
  language("sw", "Kiswahili"),
  language("la", "Latina"),
  language("lv", "Latviešu"),
  language("lt", "Lietuvių"),
  language("ln", "Lingála"),
  language("hu", "Magyar"),
  language("mg", "Malagasy"),
  language("mt", "Malti"),
  language("mi", "Māori"),
  language("nl", "Nederlands"),
  language("no", "Norsk"),
  language("nn", "Nynorsk"),
  language("oc", "Occitan"),
  language("uz", "Oʻzbek"),
  language("pl", "Polski"),
  language("pt", "Português"),
  language("ro", "Română"),
  language("sq", "Shqip"),
  language("sk", "Slovenčina"),
  language("sl", "Slovenščina"),
  language("so", "Soomaali"),
  language("fi", "Suomi"),
  language("sv", "Svenska"),
  language("tl", "Tagalog"),
  language("vi", "Tiếng Việt"),
  language("tr", "Türkçe"),
  language("tk", "Türkmen"),
  language("el", "Ελληνικά"),
  language("be", "Беларуская"),
  language("bg", "Български"),
  language("ru", "Русский"),
  language("uk", "Українська"),
  language("he", "עברית"),
  language("ar", "العربية"),
  language("ja", "日本語"),
]

/** Auto plus Whisper's 99 languages: the full menu, for sizing its scrollbar. */
export const LANGUAGE_OPTION_COUNT = 100

export const DEFAULT_LANGUAGE_ID = ""

export const getEntryLabel = (entries: PanelEntry[], id: string) =>
  entries.find((entry) => entry.kind === "option" && entry.id === id)?.label ??
  ""
