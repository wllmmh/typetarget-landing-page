import Image from "next/image"
import { DownloadSimpleIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr"

import { StepsCarousel } from "@/components/landing/steps-carousel"
import { BlurFade } from "@/components/ui/blur-fade"
import { BrowserName } from "@/components/landing/browser-name"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { CHROME_STORE_URL, REPO_URL } from "@/lib/site"

const HEADLINE = "Speech to text typed anywhere."
const INTRO =
  "TypeTarget is a free browser extension that transcribes your audio directly into any text field you tell it to."
const NOTE = "Free · MIT licensed · Chrome 116+"

// Each block starts typing once the previous one finishes. Browsers clamp nested
// timers to ~4ms, so the long blocks reveal several characters per tick instead.
const HEADLINE_SPEED = 12
const INTRO_SPEED = 6
const INTRO_CHARS_PER_TICK = 6
const NOTE_SPEED = 6
const NOTE_CHARS_PER_TICK = 6
const GAP = 80
const typeDuration = (text: string, speed: number, charsPerTick = 1) =>
  Math.ceil(text.length / charsPerTick) * speed
const INTRO_DELAY = typeDuration(HEADLINE, HEADLINE_SPEED) + GAP
const NOTE_DELAY =
  INTRO_DELAY + typeDuration(INTRO, INTRO_SPEED, INTRO_CHARS_PER_TICK) + GAP
const FADE_DURATION = 0.2
// The steps carousel fades in once the note has finished typing.
const STEPS_START =
  NOTE_DELAY + typeDuration(NOTE, NOTE_SPEED, NOTE_CHARS_PER_TICK) + GAP

export const Hero = () => (
  <>
    <section
      id="top"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-16 md:px-8 md:pt-24"
    >
      <div className="flex flex-col gap-8">
        <h1 className="display min-w-0">
          <span className="sr-only">{HEADLINE}</span>
          {/* The hidden copy reserves the final height so the layout doesn't shift while typing. */}
          <span aria-hidden className="grid">
            <span className="invisible col-start-1 row-start-1">
              {HEADLINE}
            </span>
            <TypingAnimation
              className="col-start-1 row-start-1 leading-[inherit] tracking-[inherit]"
              duration={HEADLINE_SPEED}
              startOnView={false}
              cursorStyle="line"
            >
              {HEADLINE}
            </TypingAnimation>
          </span>
        </h1>
        <div className="flex max-w-2xl min-w-0 flex-col gap-6">
          <p className="text-base leading-relaxed text-pretty text-muted-foreground">
            <span className="sr-only">{INTRO}</span>
            <span aria-hidden className="grid">
              <span className="invisible col-start-1 row-start-1">{INTRO}</span>
              <TypingAnimation
                className="col-start-1 row-start-1 leading-[inherit] tracking-[inherit]"
                duration={INTRO_SPEED}
                charsPerTick={INTRO_CHARS_PER_TICK}
                delay={INTRO_DELAY}
                startOnView={false}
                cursorStyle="line"
              >
                {INTRO}
              </TypingAnimation>
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <BlurFade delay={INTRO_DELAY / 1000} duration={FADE_DURATION}>
              <Button
                size="lg"
                nativeButton={false}
                render={<a href={CHROME_STORE_URL} />}
              >
                <DownloadSimpleIcon
                  data-icon="inline-start"
                  className="size-4"
                />
                Add to <BrowserName />
              </Button>
            </BlurFade>
            <BlurFade delay={INTRO_DELAY / 1000 + 0.1} duration={FADE_DURATION}>
              <a
                href={CHROME_STORE_URL}
                className="group flex w-fit items-center gap-3 text-sm leading-tight font-semibold hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Image
                  src="/chrome-store-192px.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12"
                />
                <span className="flex flex-col">
                  <span className="text-xs font-normal text-muted-foreground group-hover:text-primary">
                    Available on the
                  </span>
                  Chrome Web Store
                </span>
              </a>
            </BlurFade>
            <BlurFade delay={INTRO_DELAY / 1000 + 0.2} duration={FADE_DURATION}>
              <Button
                variant="ghost"
                size="icon-lg"
                nativeButton={false}
                render={
                  <a
                    href={REPO_URL}
                    aria-label="TypeTarget source on GitHub"
                    title="Source on GitHub"
                  />
                }
              >
                <GithubLogoIcon className="size-5" />
              </Button>
            </BlurFade>
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="sr-only">{NOTE}</span>
            <span aria-hidden className="grid">
              <span className="invisible col-start-1 row-start-1">{NOTE}</span>
              <TypingAnimation
                className="col-start-1 row-start-1 leading-[inherit] tracking-[inherit]"
                duration={NOTE_SPEED}
                charsPerTick={NOTE_CHARS_PER_TICK}
                delay={NOTE_DELAY}
                startOnView={false}
                cursorStyle="line"
              >
                {NOTE}
              </TypingAnimation>
            </span>
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
      <BlurFade delay={STEPS_START / 1000} duration={FADE_DURATION}>
        <StepsCarousel startDelay={STEPS_START} />
      </BlurFade>
    </section>
  </>
)
