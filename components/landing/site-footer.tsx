import { REPO_URL, VERSION } from "@/lib/site"

const footLink =
  "text-foreground underline decoration-border underline-offset-4 hover:decoration-primary"

export const SiteFooter = () => (
  <footer className="mx-auto mt-32 max-w-6xl border-t px-4 pt-8 pb-12 md:mt-40 md:px-8">
    <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
      TypeTarget {VERSION}. Free and open source under the MIT licence;{" "}
      <a href={REPO_URL} className={footLink}>
        source on GitHub
      </a>
      . Transcription by Whisper (whisper.cpp, in your browser), Google Gemini
      or Groq, with your own key. TypeTarget isn&rsquo;t affiliated with Google
      or Groq. No servers, no accounts, no analytics, and that includes this
      page.{" "}
      <a href={`${REPO_URL}/blob/main/PRIVACY.md`} className={footLink}>
        Privacy policy
      </a>
      .{" "}
      <a href={`${REPO_URL}/issues`} className={footLink}>
        Report an issue
      </a>
      .
    </p>
  </footer>
)
