import Image from "next/image"
import { ArrowDownIcon, GithubLogoIcon } from "@phosphor-icons/react/ssr"

import { TypeToFieldAnimation } from "@/components/landing/type-to-field-animation"
import { ContextMenuAnimation } from "@/components/mock-context-menu/context-menu-animation"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { REPO_URL } from "@/lib/site"

const HEADLINE = "Speech to text typed anywhere."
const INTRO =
  "TypeTarget is a free browser extension that listens to your browser tab, and transcribes the audio directly into any text field, using any AI model you pick."
const NOTE =
  "Free · MIT licensed · Chrome 116+ · Not on the Chrome Web Store yet, so you load it yourself. It takes a minute."

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
// The steps fade in one after another once the note has finished typing.
const STEPS_START =
  NOTE_DELAY + typeDuration(NOTE, NOTE_SPEED, NOTE_CHARS_PER_TICK) + GAP
const STEP_DELAY = FADE_DURATION * 1000

const steps = [
  {
    n: "1",
    title: "Right-click the tab you want heard.",
    body: "A meeting, a lecture, a stream, a video. Choose TypeTarget → Listen to this tab.",
    media: (
      <ContextMenuAnimation
        cursorStart={{ x: 64, y: 274 }}
        startDelay={STEPS_START}
        label="A video call in a browser tab. The pointer right-clicks, opens the TypeTarget menu and clicks Listen to this tab."
        background={
          <Image
            src="/listen-to-tab-background.webp"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1024px) 760px, 100vw"
            className="object-cover"
          />
        }
      />
    ),
  },
  {
    n: "2",
    title: "Right-click where the words should go.",
    body: "In any browser tab, Select TypeTarget → Type to new file or Type to this field to inject the transcription directly into a page text input.",
    media: (
      <TypeToFieldAnimation
        startDelay={STEPS_START + STEP_DELAY}
        label="A blank text field on a web page. The pointer right-clicks it, opens the TypeTarget menu and clicks Type to this field. The field gets a green outline and a timer, and transcribed speech types into it."
      />
    ),
  },
] as const

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
        <div className="flex max-w-xl min-w-0 flex-col gap-6">
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
          <div className="flex flex-wrap gap-3">
            <BlurFade delay={INTRO_DELAY / 1000} duration={FADE_DURATION}>
              <Button
                size="lg"
                nativeButton={false}
                render={<a href="#install" />}
              >
                <ArrowDownIcon data-icon="inline-start" className="size-4" />
                Install
              </Button>
            </BlurFade>
            <BlurFade
              delay={INTRO_DELAY / 1000 + 0.05}
              duration={FADE_DURATION}
            >
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<a href={REPO_URL} />}
              >
                <GithubLogoIcon data-icon="inline-start" className="size-4" />
                Source
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
      <ol className="flex flex-col gap-16 md:gap-24">
        {steps.map(({ n, title, body, media }, index) => (
          <li key={n}>
            <BlurFade
              delay={(STEPS_START + index * STEP_DELAY) / 1000}
              duration={FADE_DURATION}
            >
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
                  {media}
                </div>
              </figure>
            </BlurFade>
          </li>
        ))}
      </ol>
    </section>
  </>
)
