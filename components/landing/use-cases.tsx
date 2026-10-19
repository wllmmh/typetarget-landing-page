import type { Messages } from "@/lib/i18n/messages/en"

type UseCase = { title: string; body: string }
type Group = { heading: string; intro: string; items: UseCase[] }

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

export const UseCases = ({ messages }: { messages: Messages["useCases"] }) => {
  const { notes, captions, llm } = messages
  return (
    <section
      id="uses"
      aria-labelledby="uses-heading"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-32 md:px-8 md:pt-40"
    >
      <div className="flex max-w-3xl flex-col gap-4">
        <h2 id="uses-heading" className="heading">
          {messages.heading}
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {messages.intro}
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
            {messages.examplePrompt}
          </pre>
          <figcaption className="text-xs leading-relaxed text-muted-foreground">
            {messages.exampleCaption}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
