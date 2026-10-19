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

const language = (id: string, label: string, endonym?: string): PanelEntry => ({
  kind: "option",
  id,
  label,
  endonym,
})

/**
 * The start of the extension's spoken-language menu with the browser in
 * English (spokenLanguageOptions in src/domain/languages.ts): Auto, then each
 * language by its English name in English collation order, with its own name
 * beside it where that differs. The rest is never scrolled into view.
 */
export const LANGUAGE_ENTRIES: PanelEntry[] = [
  language("", "Auto"),
  language("af", "Afrikaans"),
  language("sq", "Albanian", "Shqip"),
  language("am", "Amharic", "አማርኛ"),
  language("ar", "Arabic", "العربية"),
  language("hy", "Armenian", "Հայերեն"),
  language("as", "Assamese", "অসমীয়া"),
  language("az", "Azerbaijani", "Azərbaycan"),
  language("bn", "Bangla", "বাংলা"),
  language("ba", "Bashkir", "Башҡорт теле"),
  language("eu", "Basque", "Euskara"),
  language("be", "Belarusian", "Беларуская"),
  language("bs", "Bosnian", "Bosanski"),
  language("br", "Breton", "Brezhoneg"),
  language("bg", "Bulgarian", "Български"),
  language("my", "Burmese", "မြန်မာ"),
  language("ca", "Catalan", "Català"),
  language("zh", "Chinese", "中文"),
  language("hr", "Croatian", "Hrvatski"),
  language("cs", "Czech", "Čeština"),
  language("da", "Danish", "Dansk"),
  language("nl", "Dutch", "Nederlands"),
  language("en", "English"),
  language("et", "Estonian", "Eesti"),
  language("fo", "Faroese", "Føroyskt"),
  language("tl", "Filipino", "Tagalog"),
  language("fi", "Finnish", "Suomi"),
  language("fr", "French", "Français"),
  language("gl", "Galician", "Galego"),
  language("ka", "Georgian", "ქართული"),
  language("de", "German", "Deutsch"),
  language("el", "Greek", "Ελληνικά"),
  language("gu", "Gujarati", "ગુજરાતી"),
  language("ht", "Haitian Creole", "Kreyòl ayisyen"),
  language("ha", "Hausa"),
  language("he", "Hebrew", "עברית"),
  language("hi", "Hindi", "हिन्दी"),
  language("hu", "Hungarian", "Magyar"),
  language("is", "Icelandic", "Íslenska"),
  language("id", "Indonesian", "Bahasa Indonesia"),
  language("it", "Italian", "Italiano"),
  language("ja", "Japanese", "日本語"),
  language("kn", "Kannada", "ಕನ್ನಡ"),
  language("kk", "Kazakh", "Қазақ тілі"),
  language("km", "Khmer", "ខ្មែរ"),
  language("ko", "Korean", "한국어"),
  language("lo", "Lao", "ລາວ"),
  language("la", "Latin", "Latina"),
  language("lv", "Latvian", "Latviešu"),
  language("ln", "Lingala", "Lingála"),
  language("lt", "Lithuanian", "Lietuvių"),
  language("lb", "Luxembourgish", "Lëtzebuergesch"),
  language("mk", "Macedonian", "Македонски"),
  language("mg", "Malagasy"),
  language("ms", "Malay", "Bahasa Melayu"),
  language("ml", "Malayalam", "മലയാളം"),
  language("mt", "Maltese", "Malti"),
  language("mi", "Māori"),
  language("mr", "Marathi", "मराठी"),
  language("mn", "Mongolian", "Монгол"),
  language("ne", "Nepali", "नेपाली"),
]

/** Auto plus the extension's 97 languages: the full menu, for sizing its scrollbar. */
export const LANGUAGE_OPTION_COUNT = 98

export const DEFAULT_LANGUAGE_ID = ""

export const getEntryLabel = (entries: PanelEntry[], id: string) =>
  entries.find((entry) => entry.kind === "option" && entry.id === id)?.label ??
  ""
