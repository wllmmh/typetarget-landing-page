import Image from "next/image"
import { QrCodeIcon, TranslateIcon } from "@phosphor-icons/react/ssr"

import type { MockMenuEntry } from "./layout"

const separator: MockMenuEntry = { kind: "separator" }

export const CHROME_PAGE_MENU: MockMenuEntry[] = [
  { kind: "item", id: "back", label: "Back", shortcut: "Alt+Left Arrow" },
  {
    kind: "item",
    id: "forward",
    label: "Forward",
    shortcut: "Alt+Right Arrow",
    disabled: true,
  },
  { kind: "item", id: "reload", label: "Reload", shortcut: "Ctrl+R" },
  separator,
  { kind: "item", id: "save-as", label: "Save as…", shortcut: "Ctrl+S" },
  { kind: "item", id: "print", label: "Print…", shortcut: "Ctrl+P" },
  { kind: "item", id: "cast", label: "Cast…" },
  separator,
  {
    kind: "item",
    id: "qr-code",
    label: "Create QR Code for this page",
    icon: <QrCodeIcon size={16} />,
  },
  separator,
  {
    kind: "item",
    id: "translate",
    label: "Translate to français",
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
    label: "View page source",
    shortcut: "Ctrl+U",
  },
  { kind: "item", id: "block-elements", label: "Block elements" },
  { kind: "item", id: "inspect", label: "Inspect" },
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

export const TYPETARGET_SUBMENU: MockMenuEntry[] = [
  { kind: "item", id: "listen", label: "Listen to this tab" },
  {
    kind: "item",
    id: "stop-listening",
    label: "Stop listening",
    disabled: true,
  },
  {
    kind: "item",
    id: "type-to-field",
    label: "Type to this field",
    disabled: true,
  },
  { kind: "item", id: "type-to-new-file", label: "Type to new file" },
  { kind: "item", id: "type-to-new-tab", label: "Type to new tab" },
  { kind: "item", id: "stop-typing", label: "Stop typing", disabled: true },
]

/** The submenu on a page, not a text field, while a tab is being listened to. */
export const TYPETARGET_LISTENING_SUBMENU: MockMenuEntry[] = [
  { kind: "item", id: "listen", label: "Listen to this tab" },
  { kind: "item", id: "stop-listening", label: "Stop listening" },
  {
    kind: "item",
    id: "type-to-field",
    label: "Type to this field",
    disabled: true,
  },
  { kind: "item", id: "type-to-new-file", label: "Type to new file" },
  { kind: "item", id: "type-to-new-tab", label: "Type to new tab" },
  { kind: "item", id: "stop-typing", label: "Stop typing", disabled: true },
]

/** The submenu over a text field while a tab is being listened to. */
export const TYPETARGET_FIELD_SUBMENU: MockMenuEntry[] = [
  { kind: "item", id: "listen", label: "Listen to this tab" },
  { kind: "item", id: "stop-listening", label: "Stop listening" },
  { kind: "item", id: "type-to-field", label: "Type to this field" },
  { kind: "item", id: "type-to-new-file", label: "Type to new file" },
  { kind: "item", id: "type-to-new-tab", label: "Type to new tab" },
  { kind: "item", id: "stop-typing", label: "Stop typing", disabled: true },
]
