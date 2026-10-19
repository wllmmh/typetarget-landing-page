import "server-only"

import type { Locale } from "../locales"
import { ar } from "./ar"
import { bn } from "./bn"
import { cs } from "./cs"
import { de } from "./de"
import { en, type Messages } from "./en"
import { es } from "./es"
import { fil } from "./fil"
import { fr } from "./fr"
import { hi } from "./hi"
import { id } from "./id"
import { it } from "./it"
import { ja } from "./ja"
import { ko } from "./ko"
import { mr } from "./mr"
import { pl } from "./pl"
import { ptBR } from "./pt-br"
import { ptPT } from "./pt-pt"
import { ru } from "./ru"
import { te } from "./te"
import { th } from "./th"
import { tr } from "./tr"
import { uk } from "./uk"
import { ur } from "./ur"
import { vi } from "./vi"
import { zhCN } from "./zh-cn"
import { zhTW } from "./zh-tw"

export type { Messages }

const MESSAGES: Record<Locale, Messages> = {
  ar,
  bn,
  cs,
  de,
  en,
  es,
  fil,
  fr,
  hi,
  id,
  it,
  ja,
  ko,
  mr,
  pl,
  "pt-br": ptBR,
  "pt-pt": ptPT,
  ru,
  te,
  th,
  tr,
  uk,
  ur,
  vi,
  "zh-cn": zhCN,
  "zh-tw": zhTW,
}

export const getMessages = (locale: Locale) => MESSAGES[locale]
