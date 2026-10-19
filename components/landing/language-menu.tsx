"use client"

import type { MouseEvent } from "react"
import { Menu } from "@base-ui/react/menu"
import { CheckIcon, TranslateIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import {
  LOCALES,
  LOCALE_INFO,
  LOCALE_STORAGE_KEY,
  localePath,
  type Locale,
} from "@/lib/i18n/locales"

/** Remembers the choice, so `/` stops redirecting by browser language, and keeps the reader's section. */
const choose = (locale: Locale) => (event: MouseEvent<HTMLAnchorElement>) => {
  event.currentTarget.hash = window.location.hash
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  } catch {
    // Storage blocked: the link still goes to the language, it just isn't remembered.
  }
}

export const LanguageMenu = ({
  current,
  label,
}: {
  current: Locale
  /** "Language", in the page's language. */
  label: string
}) => (
  <Menu.Root>
    <Menu.Trigger
      render={
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={label}
          title={label}
          className="md:size-10"
        />
      }
    >
      <TranslateIcon className="size-5" />
    </Menu.Trigger>
    <Menu.Portal>
      <Menu.Positioner align="end" sideOffset={4} className="z-30">
        <Menu.Popup className="max-h-(--available-height) min-w-48 overflow-y-auto border bg-popover py-1 text-sm text-popover-foreground shadow-md outline-none">
          {LOCALES.map((locale) => {
            const { tag, name } = LOCALE_INFO[locale]
            const selected = locale === current
            return (
              <Menu.LinkItem
                key={locale}
                href={localePath(locale)}
                lang={tag}
                hrefLang={tag}
                aria-current={selected ? "page" : undefined}
                closeOnClick
                onClick={choose(locale)}
                className="flex cursor-pointer items-center justify-between gap-4 px-3 py-1.5 outline-none data-highlighted:bg-muted"
              >
                {name}
                {selected && (
                  <CheckIcon aria-hidden className="size-4 text-primary" />
                )}
              </Menu.LinkItem>
            )
          })}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  </Menu.Root>
)
