import Image from "next/image"
import { DownloadSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import { DOWNLOAD_URL, REPO_URL } from "@/lib/site"

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
          variant="outline"
          size="icon-sm"
          className="md:size-10"
          nativeButton={false}
          render={
            <a
              href={REPO_URL}
              aria-label="TypeTarget source on GitHub"
              title="Source on GitHub"
            />
          }
        >
          <GithubLogoIcon className="size-4" />
        </Button>
        <Button
          size="sm"
          className="md:h-10 md:px-6"
          nativeButton={false}
          render={<a href={DOWNLOAD_URL} />}
        >
          <DownloadSimpleIcon data-icon="inline-start" className="size-4" />
          Download
        </Button>
      </div>
    </div>
  </header>
)
