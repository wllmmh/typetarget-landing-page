import Image from "next/image"
import { QrCodeIcon, TranslateIcon } from "@phosphor-icons/react/ssr"

import type { ExtensionStrings } from "@/lib/i18n/extension-strings"
import type { Messages } from "@/lib/i18n/messages/en"

import type { MockMenuEntry } from "./layout"

const separator: MockMenuEntry = { kind: "separator" }

/** Chrome's own labels, in the visitor's language. */
export type ChromeMenuLabels = Messages["chromeMenu"]

export const getChromePageMenu = (
  labels: ChromeMenuLabels
): MockMenuEntry[] => [
  { kind: "item", id: "back", label: labels.back, shortcut: labels.altLeft },
  {
    kind: "item",
    id: "forward",
    label: labels.forward,
    shortcut: labels.altRight,
    disabled: true,
  },
  {
    kind: "item",
    id: "reload",
    label: labels.reload,
    shortcut: `${labels.ctrl}+R`,
  },
  separator,
  {
    kind: "item",
    id: "save-as",
    label: labels.saveAs,
    shortcut: `${labels.ctrl}+S`,
  },
  {
    kind: "item",
    id: "print",
    label: labels.print,
    shortcut: `${labels.ctrl}+P`,
  },
  { kind: "item", id: "cast", label: labels.cast },
  separator,
  {
    kind: "item",
    id: "qr-code",
    label: labels.qrCode,
    icon: <QrCodeIcon size={16} />,
  },
  separator,
  {
    kind: "item",
    id: "translate",
    label: labels.translate,
    icon: <TranslateIcon size={16} />,
  },
  separator,
  {
    kind: "item",
    id: "typetarget",
    label: "TypeTarget",
    icon: <Image src="/typetarget-icon.png" alt="" width={16} height={16} />,
    hasSubmenu: true,
  },
  separator,
  {
    kind: "item",
    id: "view-source",
    label: labels.viewSource,
    shortcut: `${labels.ctrl}+U`,
  },
  { kind: "item", id: "block-elements", label: labels.blockElements },
  { kind: "item", id: "inspect", label: labels.inspect },
]

/** Chrome's menu for a right-click inside a text field. */
export const CHROME_EDITABLE_MENU: MockMenuEntry[] = [
  { kind: "item", id: "undo", label: "Undo", shortcut: "Ctrl+Z" },
  {
    kind: "item",
    id: "redo",
    label: "Redo",
    shortcut: "Ctrl+Shift+Z",
    disabled: true,
  },
  separator,
  { kind: "item", id: "cut", label: "Cut", shortcut: "Ctrl+X", disabled: true },
  {
    kind: "item",
    id: "copy",
    label: "Copy",
    shortcut: "Ctrl+C",
    disabled: true,
  },
  { kind: "item", id: "paste", label: "Paste", shortcut: "Ctrl+V" },
  {
    kind: "item",
    id: "paste-plain",
    label: "Paste as plain text",
    shortcut: "Ctrl+Shift+V",
    disabled: true,
  },
  { kind: "item", id: "force-paste", label: "Force Paste", disabled: true },
  { kind: "item", id: "select-all", label: "Select all", shortcut: "Ctrl+A" },
  separator,
  { kind: "item", id: "spell-check", label: "Spell check", hasSubmenu: true },
  {
    kind: "item",
    id: "writing-direction",
    label: "Writing Direction",
    hasSubmenu: true,
  },
  separator,
  {
    kind: "item",
    id: "typetarget",
    label: "TypeTarget",
    icon: <Image src="/typetarget-icon.png" alt="" width={16} height={16} />,
    hasSubmenu: true,
  },
  separator,
  { kind: "item", id: "inspect", label: "Inspect" },
]

/**
 * Chrome draws this menu 297px wide, but the mock's wider shortcut gap would
 * truncate "Paste as plain text" at that size.
 */
export const CHROME_EDITABLE_MENU_WIDTH = 310

/** The extension's own menu item names (`menuListenHere` and so on in its catalogs). */
export type TypeTargetMenuLabels = Pick<
  ExtensionStrings,
  | "menuListenHere"
  | "stopListening"
  | "menuTypeHere"
  | "menuNewFile"
  | "menuNewTab"
  | "stopTyping"
>

const getTypeTargetEntries = (
  labels: TypeTargetMenuLabels,
  enabled: { stopListening: boolean; typeToField: boolean }
): MockMenuEntry[] => [
  { kind: "item", id: "listen", label: labels.menuListenHere },
  {
    kind: "item",
    id: "stop-listening",
    label: labels.stopListening,
    disabled: !enabled.stopListening,
  },
  {
    kind: "item",
    id: "type-to-field",
    label: labels.menuTypeHere,
    disabled: !enabled.typeToField,
  },
  { kind: "item", id: "type-to-new-file", label: labels.menuNewFile },
  { kind: "item", id: "type-to-new-tab", label: labels.menuNewTab },
  {
    kind: "item",
    id: "stop-typing",
    label: labels.stopTyping,
    disabled: true,
  },
]

export const getTypeTargetSubmenu = (labels: TypeTargetMenuLabels) =>
  getTypeTargetEntries(labels, { stopListening: false, typeToField: false })

/** The submenu on a page, not a text field, while a tab is being listened to. */
export const getTypeTargetListeningSubmenu = (labels: TypeTargetMenuLabels) =>
  getTypeTargetEntries(labels, { stopListening: true, typeToField: false })

/** The submenu over a text field while a tab is being listened to. */
export const getTypeTargetFieldSubmenu = (labels: TypeTargetMenuLabels) =>
  getTypeTargetEntries(labels, { stopListening: true, typeToField: true })
