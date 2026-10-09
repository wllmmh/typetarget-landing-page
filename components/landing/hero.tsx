import Image from "next/image"
import { ArrowDownIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr"

import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { REPO_URL } from "@/lib/site"

const HEADLINE = "Speech to text typed anywhere."

const steps = [
  {
    n: "1",
    title: "Right-click the tab you want heard.",
    body: "A meeting, a lecture, a stream, a video. Choose TypeTarget → Listen to this tab.",
    src: "/listen-to-tab.webp",
    height: 800,
    alt: "A video call in a browser tab, with the right-click menu open on TypeTarget → Listen to this tab.",
  },
  {
    n: "2",
    title: "Right-click where the words should go.",
    body: "In any browser tab, Select TypeTarget → Type to new file or Type to this field to inject the transcription directly into a page text input.",
    src: "/type-to-field.webp",
    height: 660,
    alt: "A TypeTarget text box with a green outline and a 0:01 timer, filling with transcribed speech, and the TypeTarget menu open.",
  },
] as const

export const Hero = () => (
  <>
    <section
      id="top"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-16 md:px-8 md:pt-24"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
        <h1 className="display min-w-0 lg:col-span-7">
          <span className="sr-only">{HEADLINE}</span>
          {/* The hidden copy reserves the final height so the layout doesn't shift while typing. */}
          <span aria-hidden className="grid">
            <span className="invisible col-start-1 row-start-1">{HEADLINE}</span>
            <TypingAnimation
              className="col-start-1 row-start-1 leading-[inherit] tracking-[inherit]"
              duration={40}
              startOnView={false}
              cursorStyle="line"
            >
              {HEADLINE}
            </TypingAnimation>
          </span>
        </h1>
        <div className="flex min-w-0 flex-col gap-6 lg:col-span-5">
          <p className="text-base leading-relaxed text-pretty text-muted-foreground">
            TypeTarget is a free browser extension that listens to your browser tab, whether
            that&rsquo;s a meeting, a lecture or a video and transcribes, into any text field, using any AI model you pick.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href="#install" />}
            >
              <ArrowDownIcon data-icon="inline-start" className="size-4" />
              Install
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href={REPO_URL} />}
            >
              <GithubLogoIcon data-icon="inline-start" className="size-4" />
              Source
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Free · MIT licensed · Chrome 116+ · Not on the Chrome Web Store yet,
            so you load it yourself. It takes a minute.
          </p>
        </div>
      </div>
    </section>

    <section
      aria-labelledby="how"
      className="mx-auto max-w-6xl px-4 pt-20 md:px-8 md:pt-28"
    >
      <h2 id="how" className="sr-only">
        How it works
      </h2>
      <ol className="flex flex-col gap-16 md:gap-24">
        {steps.map(({ n, title, body, src, height, alt }, index) => (
          <li key={n}>
            <figure className="grid gap-6 lg:grid-cols-12 lg:gap-12">
              <figcaption className="flex min-w-0 flex-col gap-3 lg:col-span-4 lg:pt-2">
                <span className="text-2xl font-semibold text-primary tabular-nums">
                  {n}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-balance">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </figcaption>
              <div className="min-w-0 border bg-muted lg:col-span-8">
                <Image
                  src={src}
                  alt={alt}
                  width={1280}
                  height={height}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="h-auto w-full"
                />
              </div>
            </figure>
          </li>
        ))}
      </ol>
      <p className="mt-12 max-w-prose text-sm leading-relaxed text-muted-foreground lg:ml-[calc(33.333%+1rem)]">
        Then text keeps arriving as people speak. Stop typing, stop listening or
        switch fields from the same menu, or from the toolbar popup.
      </p>
    </section>
  </>
)
