import Image from "next/image"
import { DownloadSimpleIcon } from "@phosphor-icons/react/ssr"

import {
  MuteButton,
  MuteProvider,
  MutableVideo,
} from "@/components/landing/mutable-video"
import { TypeToFieldAnimation } from "@/components/landing/type-to-field-animation"
import { Code } from "@/components/landing/code"
import { ContextMenuAnimation } from "@/components/mock-context-menu/context-menu-animation"
import { PopupAnimation } from "@/components/mock-popup/popup-animation"
import { BlurFade } from "@/components/ui/blur-fade"
import { BrowserName } from "@/components/landing/browser-name"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { CHROME_STORE_URL } from "@/lib/site"

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
// The steps fade in one after another once the note has finished typing.
const STEPS_START =
  NOTE_DELAY + typeDuration(NOTE, NOTE_SPEED, NOTE_CHARS_PER_TICK) + GAP
const STEP_DELAY = FADE_DURATION * 1000

const steps = [
  {
    n: "Step 1",
    optional: true,
    title: "Pick a model and/or language.",
    body: (
      <>
        Select an AI model to transcribe locally on your computer or let a cloud
        provider handle the compute for you. Together, they understand over{" "}
        <a
          href="#languages"
          className="text-foreground underline decoration-primary underline-offset-4"
        >
          100 human languages
        </a>
        .
      </>
    ),
    media: (
      <PopupAnimation
        startDelay={STEPS_START}
        label="The TypeTarget popup. The pointer scrolls through the model list and picks Whisper Large v3 Q5, then scrolls the spoken language list and picks English."
      />
    ),
  },
  {
    n: "Step 2",
    optional: false,
    title: "Select an input.",
    body: (
      <>
        Click the <Code>Start listening</Code> button in the TypeTarget panel,
        or right click on any page. Choose <Code>TypeTarget</Code> →{" "}
        <Code>Listen to this tab</Code>.
      </>
    ),
    media: (
      <MuteProvider>
        <div className="relative">
          <ContextMenuAnimation
            cursorStart={{ x: 64, y: 274 }}
            startDelay={STEPS_START + STEP_DELAY}
            label="A video call in a browser tab. The pointer right-clicks, opens the TypeTarget menu and clicks Listen to this tab."
            background={
              <>
                {/* Sits under the video: it's what shows if the video fails to load, or with reduced motion. */}
                <Image
                  src="/listen-to-tab-background.webp"
                  alt=""
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 760px, 100vw"
                  className="object-cover"
                />
                <MutableVideo
                  src="/listen-to-tab-background.mp4"
                  poster="/listen-to-tab-background.webp"
                  autoPlay
                  loop
                  playsInline
                  aria-hidden
                  className="absolute inset-0 size-full object-cover motion-reduce:hidden"
                />
              </>
            }
          />
          <MuteButton className="absolute right-3 bottom-3" />
        </div>
      </MuteProvider>
    ),
  },
  {
    n: "Step 3",
    optional: false,
    title: "Choose an output.",
    body: (
      <>
        Click the <Code>Start typing</Code> button in the TypeTarget panel or
        right click on any web page&rsquo;s text field and Select{" "}
        <Code>TypeTarget</Code> → <Code>Type to this field</Code>.
      </>
    ),
    media: (
      <TypeToFieldAnimation
        startDelay={STEPS_START + 2 * STEP_DELAY}
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
                className="flex w-fit items-center gap-3 text-sm leading-tight font-semibold hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Image
                  src="/chrome-store-192px.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12"
                />
                <span className="flex flex-col">
                  <span className="text-xs font-normal text-muted-foreground">
                    Available on the
                  </span>
                  Chrome Web Store
                </span>
              </a>
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
        {steps.map(({ n, optional, title, body, media }, index) => (
          <li key={n}>
            <BlurFade
              delay={(STEPS_START + index * STEP_DELAY) / 1000}
              duration={FADE_DURATION}
            >
              <figure className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <figcaption className="flex min-w-0 flex-col gap-3 lg:col-span-4 lg:pt-2">
                  <span className="text-2xl font-semibold text-primary tabular-nums">
                    {n}
                    {optional && (
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        (optional)
                      </span>
                    )}
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
