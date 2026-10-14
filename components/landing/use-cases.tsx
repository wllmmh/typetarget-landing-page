type UseCase = { title: string; body: string }
type Group = { heading: string; intro: string; items: UseCase[] }

const notes: Group = {
  heading: "Notes you keep",
  intro: "Listen in one tab, write in another.",
  items: [
    
    {
      title: "Lectures and courses",
      body: "Every word of a recorded or live class, straight into your study notes.",
    },
    {
      title: "Webinars and conference talks",
      body: "Keep the whole talk, not just the slide you photographed.",
    },
    {
      title: "Interviews and user research",
      body: "Transcribe a recorded session while you watch it back.",
    },
    {
      title: "Podcasts and videos",
      body: "Pull a transcript for show notes, a blog draft or a quote you need exact.",
    },
    {
      title: "Call notes into a CRM",
      body: "Sales or support calls, typed straight into the notes field of the record.",
    },
  ],
}

const captions: Group = {
  heading: "Captions",
  intro: "Read what a tab is saying, as it says it.",
  items: [
    {
      title: "Captions where there are none",
      body: "Streams, embedded players and old recordings that never shipped subtitles.",
    },
    {
      title: "Meeting notes",
      body: "A web call in one tab, the transcript in your doc or notes app in the next.",
    },
    {
      title: "Deaf and hard-of-hearing access",
      body: "A running text version of any call or video, in a box you can scroll back through.",
    },
    {
      title: "Caption a call into chat",
      body: "Type the call into a chat box for a teammate who can't listen right now.",
    },
    {
      title: "Listening in a second language",
      body: "Read along to catch what went by too fast.",
    },
  ],
}

const llm: Group = {
  heading: "Into any AI chat",
  intro:
    "TypeTarget types into the prompt box of any LLM web interface. Give the chat its instructions first, and every line it receives gets handled the way you asked. Pre-prompt it for anything.",
  items: [
    {
      title: "Live roleplay",
      body: "Cast the AI as a character. What the other side says lands in its chat box as your lines.",
    },
    {
      title: "Live translation",
      body: "Tell it to translate everything you send. Watch a foreign-language video in your own.",
    },
    {
      title: "Meeting copilot",
      body: "Ask for follow-up questions, action items or a plain-English version of the jargon.",
    },
    {
      title: "Language practice",
      body: "A tutor that corrects, explains or quizzes you on the audio you're listening to.",
    },
    {
      title: "Study aid",
      body: "Turn a lecture into flashcards, a summary or practice questions as it happens.",
    },
    {
      title: "Live commentary",
      body: "Annotate claims in a debate, a pitch or a keynote while it's still going.",
    },
    {
      title: "Summaries",
      body: "Feed it a long stream or podcast and ask what you missed.",
    },
  ],
}

const ItemList = ({
  items,
  columns = 1,
}: {
  items: UseCase[]
  columns?: 1 | 2
}) => (
  <dl className={columns === 2 ? "grid gap-x-12 md:grid-cols-2" : "grid"}>
    {items.map(({ title, body }) => (
      <div key={title} className="flex flex-col gap-1 border-t py-4">
        <dt className="text-sm font-semibold">{title}</dt>
        <dd className="text-sm leading-relaxed text-muted-foreground">
          {body}
        </dd>
      </div>
    ))}
  </dl>
)

const GroupHead = ({ heading, intro }: Pick<Group, "heading" | "intro">) => (
  <div className="flex flex-col gap-2 pb-6">
    <h3 className="text-lg font-semibold tracking-tight">{heading}</h3>
    <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
      {intro}
    </p>
  </div>
)

const examplePrompt =
  "You're my Spanish conversation partner. Everything I send is what someone just said in an English video. Reply in simple Spanish, as if you were answering them, then give me one word to learn from it."

export const UseCases = () => (
  <section
    id="uses"
    aria-labelledby="uses-heading"
    className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
  >
    <div className="flex max-w-3xl flex-col gap-4">
      <h2 id="uses-heading" className="heading">
        Own your notes. Output and save to anywhere.
      </h2>
      <p className="text-base leading-relaxed text-muted-foreground">
        TypeTarget doesn&rsquo;t store your notes. Instead, you
        tell it where you want it to write them to.
      </p>
    </div>

    <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12">
      {[notes, captions].map((group) => (
        <div key={group.heading} className="min-w-0">
          <GroupHead heading={group.heading} intro={group.intro} />
          <ItemList items={group.items} />
        </div>
      ))}
    </div>

    <div className="mt-20 grid gap-10 border-t-2 border-primary pt-10 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-7">
        <GroupHead heading={llm.heading} intro={llm.intro} />
        <ItemList items={llm.items} columns={2} />
      </div>
      <figure className="flex min-w-0 flex-col gap-3 lg:col-span-5">
        <pre className="overflow-x-auto border bg-muted p-5 text-[0.8125rem] leading-relaxed whitespace-pre-wrap">
          {examplePrompt}
        </pre>
        <figcaption className="text-xs leading-relaxed text-muted-foreground">
          An example prompt. Paste your own into any AI chat before you start
          listening. TypeTarget doesn&rsquo;t press Enter for you, so you choose
          when each message goes.
        </figcaption>
      </figure>
    </div>
  </section>
)
