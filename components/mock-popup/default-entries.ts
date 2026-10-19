import { format } from "@/lib/i18n/format"
import type { ExtensionStrings } from "@/lib/i18n/extension-strings"

import type { PanelEntry } from "./layout"

/** The extension's text the model menu shows (`modelGroupLocal` and so on in its catalogs). */
export type ModelMenuLabels = Pick<
  ExtensionStrings,
  "modelGroupLocal" | "modelApiKey" | "modelSize"
>

/** The extension's model catalog (src/domain/models.ts), grouped by provider like its picker. */
export const getModelEntries = (labels: ModelMenuLabels): PanelEntry[] => {
  const local = (id: string, label: string, size: number): PanelEntry => ({
    kind: "option",
    id,
    label,
    detail: format(labels.modelSize, { size }),
  })

  return [
    { kind: "group", label: labels.modelGroupLocal },
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
    { kind: "group", label: "Google", action: labels.modelApiKey },
    {
      kind: "option",
      id: "gemini-3.5-transcribe-live",
      label: "Gemini 3.5 Transcribe Live",
    },
    { kind: "group", label: "Groq", action: labels.modelApiKey },
    {
      kind: "option",
      id: "groq-whisper-large-v3-turbo",
      label: "Whisper Large v3 Turbo",
    },
    { kind: "option", id: "groq-whisper-large-v3", label: "Whisper Large v3" },
  ]
}

export const DEFAULT_MODEL_ID = "tiny-q5_1"

/** Auto plus the extension's 97 languages: the full menu, for sizing its scrollbar. */
export const LANGUAGE_OPTION_COUNT = 98

export const DEFAULT_LANGUAGE_ID = ""

export const getEntryLabel = (entries: PanelEntry[], id: string) =>
  entries.find((entry) => entry.kind === "option" && entry.id === id)?.label ??
  ""
