import Image from "next/image"
import { DownloadSimpleIcon } from "@phosphor-icons/react/ssr"

import { BrowserName } from "@/components/landing/browser-name"
import { Button } from "@/components/ui/button"
import { CHROME_STORE_URL } from "@/lib/site"

export const SiteHeader = () => (
  <header className="sticky top-0 z-20 border-b bg-background">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-8">
      <a
        href="#top"
        className="flex min-w-0 items-center gap-2.5 text-sm font-semibold tracking-tight"
      >
        <Image
          src="/typetarget-icon.png"
          alt=""
          width={24}
          height={24}
          className="size-6"
        />
        TypeTarget
      </a>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="md:h-10 md:px-6"
          nativeButton={false}
          render={<a href={CHROME_STORE_URL} />}
        >
          <DownloadSimpleIcon data-icon="inline-start" className="size-4" />
          Add to <BrowserName />
        </Button>
      </div>
    </div>
  </header>
)
