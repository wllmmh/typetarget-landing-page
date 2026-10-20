/**
 * The site's text. Every locale file is typed against this one, so a missing
 * key is a type error. `{name}` is a placeholder; `<tag>…</tag>` marks text
 * the component wraps (a link, a button name), and a translation can move it.
 * Names of the extension's own buttons and menu items aren't here: they come
 * from the extension's catalogs (`extension-strings.ts`) so they match it.
 */
export const en = {
  meta: {
    title: "TypeTarget: speech to text, into any text field",
    description:
      "A free, open-source browser extension that transcribes any tab's audio and types it, live, into any text field in any tab. Meeting notes, captions, and live input for any AI chat.",
  },
  header: {
    addTo: "Add to {browser}",
    language: "Language",
  },
  hero: {
    headline: "Speech to text typed anywhere.",
    intro:
      "TypeTarget is a free browser extension that transcribes your audio directly into any text field you tell it to.",
    note: "Free · MIT licensed · Chrome 116+",
    availableOn: "Available on the",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "TypeTarget source on GitHub",
    githubTitle: "Source on GitHub",
    howItWorks: "How it works",
  },
  steps: {
    carouselLabel: "Setup steps",
    slideLabel: "{n} of {total}",
    step: "Step {n}",
    optional: "(optional)",
    pause: "Pause slideshow",
    play: "Play slideshow",
    mute: "Mute video",
    unmute: "Unmute video",
    pickModel: {
      title: "Pick a model and/or language.",
      body: "Select an AI model to transcribe locally on your computer or let a cloud provider handle the compute for you. Together, they understand over <languages>100 human languages</languages>.",
      animation:
        "The TypeTarget popup. The pointer scrolls through the model list and picks Whisper Large v3 Q5, then scrolls the spoken language list and picks English.",
    },
    selectInput: {
      title: "Select an input.",
      body: "Click the <code>{startListening}</code> button in the TypeTarget panel, or right click on any page. Choose <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "A video call in a browser tab. The pointer right-clicks, opens the TypeTarget menu and clicks {listenToTab}.",
    },
    chooseOutput: {
      title: "Choose an output.",
      body: "Click the <code>{startTyping}</code> button in the TypeTarget panel or right click on any web page’s text field and Select <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "The video call from step 2. The pointer right-clicks, opens the TypeTarget menu and clicks {typeToNewFile}. A text box with a green outline and a timer opens over the bottom of the page and transcribed speech types into it. The pointer clicks the box's Open in new tab button, and the text carries on typing in a full-page box in a new tab.",
    },
  },
  /** Chrome's own context menu, as the animations draw it. */
  chromeMenu: {
    back: "Back",
    forward: "Forward",
    reload: "Reload",
    saveAs: "Save as…",
    print: "Print…",
    cast: "Cast…",
    qrCode: "Create QR Code for this page",
    translate: "Translate to français",
    viewSource: "View page source",
    blockElements: "Block elements",
    inspect: "Inspect",
    ctrl: "Ctrl",
    altLeft: "Alt+Left Arrow",
    altRight: "Alt+Right Arrow",
  },
  useCases: {
    heading: "Own your notes. Output and save to anywhere.",
    intro:
      "TypeTarget doesn’t store your notes. Instead, you tell it where you want it to write them to.",
    notes: {
      heading: "Notes you keep",
      intro: "Use any browser tab as the audio source.",
      items: [
        {
          title: "Lectures and courses",
          body: "Every word of a recorded or live class, straight into your study notes.",
        },
        {
          title: "Interviews and user research",
          body: "Transcribe a recorded session while you watch it back.",
        },
        {
          title: "Podcasts and social media",
          body: "Save a transcript of an entire video for show notes, a blog draft or a quote you need.",
        },
        {
          title: "Call notes into a CRM",
          body: "Sales or support calls, typed straight into the notes field of the record.",
        },
      ],
    },
    captions: {
      heading: "Captions",
      intro: "Read what a tab is saying, as it says it.",
      items: [
        {
          title: "Captions where there are none",
          body: "Streams, embedded players and old recordings that never shipped subtitles.",
        },
        {
          title: "Live webinars and conferences",
          body: "Keep the whole transcript, not just the slide you photographed.",
        },
        {
          title: "Meeting notes",
          body: "A web call in one tab, the transcript in your doc or notes app in the next.",
        },
        {
          title: "Deaf and hard-of-hearing access",
          body: "A running text version of any call or video, in a box you can scroll back through.",
        },
      ],
    },
    llm: {
      heading: "Into any AI chat",
      intro:
        "TypeTarget can type into the prompt box of any LLM web interface. Give the AI its instructions, and every message you send it gets handled the way you asked.",
      items: [
        {
          title: "Live roleplay",
          body: "Cast the AI as a character. What the other side says lands in its chat box as your lines.",
        },
        {
          title: "Translations",
          body: "Tell it to translate everything you send. Communicate with someone who speaks another language.",
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
      ],
    },
    examplePrompt:
      "You're my Spanish conversation partner. Everything I send is what someone just said in an English video. Reply in simple Spanish, as if you were answering them, then give me one word to learn from it.",
    exampleCaption:
      "An example prompt. Paste your own into any AI chat before you start listening.",
  },
  spec: {
    heading: "Free forever.",
    intro:
      "No meter running, no cap on what you keep. Record as much as you want, for as long as you want.",
    recording: {
      label: "No recording limits.",
      value:
        "Leave it running through a full-day conference. TypeTarget puts no cap on how long a session can go.",
    },
    storage: {
      label: "No storage limits.",
      value:
        "TypeTarget doesn't store transcripts, so there's nothing to fill up. Every word goes straight into the field you chose, and you can save it as a .txt file on your own computer. No servers, no accounts, no logs.",
    },
    account: {
      label: "No account needed.",
      value:
        "Free and open source under the MIT licence. No trial, no paid tier, no account to create. The cloud hosted transcription models run on your own Google or Groq account, and both offer a free tier.",
    },
    limitsNoteLink: "See note on provider limits",
    limitsNote:
      "* TypeTarget sets no limit of its own. Hosted models (Gemini, Groq) apply their own free-tier quotas, which Google and Groq set and can change at any time. Local Whisper has no quota.",
  },
  faq: {
    heading: "Frequently asked questions.",
    microphone: {
      q: "Does it transcribe my own voice?",
      a: "No. TypeTarget hears what you hear, not what you say. It doesn't use your microphone.",
    },
    needKey: {
      q: "Do I need an API key?",
      a: "Not to start. Local Whisper needs no key, but performance is dependent on your hardware. A Gemini or Groq key, which you get free from those providers, gives you live transcription on any machine.",
    },
    getKey: {
      q: "How do I get an API key?",
      // AI Studio's and GroqCloud's pages are in English, so their button names stay in English.
      gemini:
        "<b>Gemini.</b> Go to <link>aistudio.google.com/api-keys</link> and click the <code>Create API key</code> button in the top right.",
      geminiSteps: [
        "Name your key anything.",
        "Choose <code>Create new project</code>, and name the project anything too.",
        "Click <code>Create key</code>.",
        "Copy the key it gives you and paste it into the API key field in TypeTarget.",
      ],
      groq: "<b>Groq.</b> Go to <link>console.groq.com/keys</link> and click the <code>Create API Key</code> button.",
      groqSteps: [
        "Give it a Display Name of anything you want.",
        "Copy your Secret Key and paste it into the Groq API key field in TypeTarget.",
      ],
      aiStudioImage:
        "The top-right corner of Google AI Studio's API keys page, with an API quickstart link, a Create API key button, and a Filter by All projects dropdown below them.",
      groqImage:
        "GroqCloud's Create API Key button, with a plus sign before the label.",
    },
    slow: {
      q: "Why is my transcription slow?",
      a: "You're most likely using Local Whisper, which runs inside your browser, so its speed depends on your hardware. On an older or less powerful machine it can fall behind the audio. For fast, live transcription on any machine, switch to a free Gemini or Groq key.",
    },
    wrongLanguage: {
      q: "Why is it transcribing the wrong language?",
      a: "Try a different model under <code>{model}</code>: larger models are better at telling languages apart. If you know the language being spoken, pick it under <code>{spokenLanguage}</code> instead of leaving it on <code>{auto}</code>. You can also increase <code>{chunkLength}</code>, which gives the model more speech to recognize the language from.",
    },
    audio: {
      q: "Where does my audio go?",
      a: "With Local Whisper, nowhere: it's transcribed inside your browser. With Gemini or Groq, it goes only to that provider, using your own key. It never goes to TypeTarget.",
    },
    languages: {
      q: "What languages do you support?",
      transcription:
        "<b>Transcription.</b> OpenAI's Whisper models, local or on Groq, support <whisper>99 languages</whisper>. Gemini Transcribe has its own <gemini>list of supported languages</gemini>.",
      interface:
        "<b>Interface.</b> The TypeTarget interface is available in Arabic, Bengali, Chinese (Simplified and Traditional), Czech, English, Filipino, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Marathi, Polish, Portuguese (Brazil and Portugal), Russian, Spanish, Telugu, Thai, Turkish, Ukrainian, Urdu and Vietnamese, matching your system and browser language.",
    },
    browsers: {
      q: "Which browsers does it work in?",
      a: "Chrome 116 or newer, installed from the Chrome Web Store. Chromium-based browsers like Edge and Brave can add it from the same listing.",
    },
    unpacked: {
      q: "Can I load it without the Chrome Web Store?",
      a: "Yes. <download>Download the zip</download> and extract it to get a folder called <code>typetarget</code>. Open <code>chrome://extensions</code> by pasting it into the address bar, as web pages can’t link to it (in Edge it’s <code>edge://extensions</code>, in Brave <code>brave://extensions</code>). Turn on Developer mode in the top-right corner, click <code>Load unpacked</code> and select the extracted folder. To update later, download the new zip, replace the folder and press the reload arrow on TypeTarget’s card.",
    },
    contact: {
      q: "What is your contact information?",
      a: "Send a message through <contact>this form</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Free and open source under the MIT licence; <source>source on GitHub</source>. Transcription by Whisper (whisper.cpp, in your browser), Google Gemini or Groq, with your own key. TypeTarget isn’t affiliated with Google or Groq. No servers, no accounts, no analytics, and that includes this page. <privacy>Privacy policy</privacy>. <issues>Report an issue</issues>. <contact>Contact</contact>.",
  },
}

export type Messages = typeof en
