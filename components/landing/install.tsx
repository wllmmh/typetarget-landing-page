import type { ReactNode } from "react"
import { DownloadSimpleIcon } from "@phosphor-icons/react/ssr"

import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { DOWNLOAD_URL } from "@/lib/site"

const Code = ({ children }: { children: ReactNode }) => (
  <code className="border bg-muted px-1.5 py-0.5 text-[0.8125rem]">
    {children}
  </code>
)

type Step = { title: string; body: ReactNode }

const steps: Step[] = [
  {
    title: "Download and extract the zip.",
    body: (
      <div className="flex flex-col items-start gap-4">
        <p>
          You&rsquo;ll get a folder called <Code>typetarget</Code>.
        </p>
        <Button nativeButton={false} render={<a href={DOWNLOAD_URL} />}>
          <DownloadSimpleIcon data-icon="inline-start" className="size-4" />
          Download
        </Button>
      </div>
    ),
  },
  {
    title: "Open your browser's extensions page and turn on Developer mode.",
    body: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Code>chrome://extensions</Code>
          <CopyButton value="chrome://extensions" />
        </div>
        <p>
          Paste it into the address bar. Web pages can&rsquo;t link to it
          directly. In Edge it&rsquo;s <Code>edge://extensions</Code>, and in
          Brave <Code>brave://extensions</Code>. Developer mode is the switch in
          the top-right corner of the page.
        </p>
      </div>
    ),
  },
  {
    title: "Click Load unpacked and select the extracted folder.",
    body: (
      <p>
        Select the <Code>typetarget</Code> folder you extracted in step 1. TypeTarget appears in your extensions
        list. Pin it to the toolbar if you want the popup handy.
      </p>
    ),
  },
]

export const Install = () => (
  <section
    id="install"
    aria-labelledby="install-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-4">
        <h2 id="install-heading" className="heading">
          Install in three steps.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          TypeTarget isn&rsquo;t on the Chrome Web Store yet, so you load it
          yourself. It needs Chrome 116 or newer. Other Chromium browsers use
          the same steps.
        </p>
      </div>

      <div className="min-w-0 lg:col-span-8">
        <ol className="border-b">
          {steps.map(({ title, body }, index) => (
            <li
              key={title}
              className="grid gap-3 border-t py-6 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6"
            >
              <span
                className="text-2xl font-semibold text-primary tabular-nums"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="flex min-w-0 flex-col gap-3">
                <h3 className="text-base font-semibold">{title}</h3>
                <div className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          <h3 className="text-base font-semibold text-foreground">
            Then pick a model.
          </h3>
          <p>
            Local Whisper works straight away, with no key. To keep up live on
            most computers, open the TypeTarget popup, click the key icon next
            to the model picker, and add a free{" "}
            <a
              href="https://aistudio.google.com/apikey"
              className="text-foreground underline decoration-primary underline-offset-4"
            >
              Gemini key
            </a>{" "}
            or{" "}
            <a
              href="https://console.groq.com/keys"
              className="text-foreground underline decoration-primary underline-offset-4"
            >
              Groq key
            </a>
            .
          </p>
          <p>
            To update later, download the new zip, replace the folder, and press
            the reload arrow on TypeTarget&rsquo;s card on the extensions page.
          </p>
        </div>
      </div>
    </div>
  </section>
)
