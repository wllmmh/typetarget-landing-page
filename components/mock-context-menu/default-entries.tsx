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
  { kind: "item", id: "stop-typing", label: "Stop typing", disabled: true },
]
