import type { Messages } from "./en"

export const de: Messages = {
  meta: {
    title: "TypeTarget: Sprache zu Text, in jedes Textfeld",
    description:
      "Eine kostenlose Open-Source-Browsererweiterung, die den Ton eines beliebigen Tabs transkribiert und live in jedes Textfeld in jedem Tab schreibt. Besprechungsnotizen, Untertitel und Live-Eingabe für jeden KI-Chat.",
  },
  header: {
    addTo: "Zu {browser} hinzufügen",
    language: "Sprache",
  },
  hero: {
    headline: "Sprache zu Text, überall eingetippt.",
    intro:
      "TypeTarget ist eine kostenlose Browsererweiterung, die deinen Ton direkt in jedes Textfeld transkribiert, das du ihr nennst.",
    note: "Kostenlos · MIT-Lizenz · Chrome 116+",
    availableOn: "Erhältlich im",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "TypeTarget-Quellcode auf GitHub",
    githubTitle: "Quellcode auf GitHub",
    howItWorks: "So funktioniert es",
  },
  steps: {
    carouselLabel: "Einrichtungsschritte",
    slideLabel: "{n} von {total}",
    step: "Schritt {n}",
    optional: "(optional)",
    pause: "Diashow pausieren",
    play: "Diashow abspielen",
    mute: "Video stummschalten",
    unmute: "Ton des Videos einschalten",
    pickModel: {
      title: "Wähle ein Modell und/oder eine Sprache.",
      body: "Wähle ein KI-Modell, das lokal auf deinem Computer transkribiert, oder lass einen Cloud-Anbieter die Rechenarbeit übernehmen. Zusammen verstehen sie über <languages>100 menschliche Sprachen</languages>.",
      animation:
        "Das TypeTarget-Popup. Der Mauszeiger scrollt durch die Modellliste und wählt Whisper Large v3 Q5, dann scrollt er durch die Liste der gesprochenen Sprachen und wählt Englisch.",
    },
    selectInput: {
      title: "Wähle eine Eingabe.",
      body: "Klicke im TypeTarget-Fenster auf <code>{startListening}</code> oder klicke mit der rechten Maustaste auf eine beliebige Seite. Wähle <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Ein Videoanruf in einem Browser-Tab. Der Mauszeiger klickt mit der rechten Maustaste, öffnet das TypeTarget-Menü und klickt auf {listenToTab}.",
    },
    chooseOutput: {
      title: "Wähle eine Ausgabe.",
      body: "Klicke im TypeTarget-Fenster auf <code>{startTyping}</code> oder klicke mit der rechten Maustaste in das Textfeld einer beliebigen Webseite und wähle <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "Der Videoanruf aus Schritt 2. Der Mauszeiger klickt mit der rechten Maustaste, öffnet das TypeTarget-Menü und klickt auf {typeToNewFile}. Ein Textfeld mit grünem Rahmen und einem Timer öffnet sich unten auf der Seite, und transkribierte Sprache wird hineingeschrieben. Der Mauszeiger klickt auf die Schaltfläche „In neuem Tab öffnen“ des Felds, und der Text wird in einem ganzseitigen Feld in einem neuen Tab weitergeschrieben.",
    },
  },
  chromeMenu: {
    back: "Zurück",
    forward: "Vorwärts",
    reload: "Neu laden",
    saveAs: "Speichern unter…",
    print: "Drucken…",
    cast: "Streamen…",
    qrCode: "QR-Code für diese Seite erstellen",
    translate: "In français übersetzen",
    viewSource: "Seitenquelltext anzeigen",
    blockElements: "Elemente blockieren",
    inspect: "Untersuchen",
    ctrl: "Strg",
    altLeft: "Alt+Linkspfeil",
    altRight: "Alt+Rechtspfeil",
  },
  useCases: {
    heading: "Deine Notizen gehören dir. Ausgeben und speichern, wo du willst.",
    intro:
      "TypeTarget speichert deine Notizen nicht. Stattdessen sagst du ihm, wohin es sie schreiben soll.",
    notes: {
      heading: "Notizen, die bleiben",
      intro: "Nutze einen beliebigen Browser-Tab als Audioquelle.",
      items: [
        {
          title: "Vorlesungen und Kurse",
          body: "Jedes Wort einer aufgezeichneten oder Live-Veranstaltung, direkt in deine Lernnotizen.",
        },
        {
          title: "Interviews und Nutzerforschung",
          body: "Transkribiere eine aufgezeichnete Sitzung, während du sie dir noch einmal ansiehst.",
        },
        {
          title: "Podcasts und soziale Medien",
          body: "Speichere das Transkript eines ganzen Videos für Shownotes, einen Blogentwurf oder ein Zitat, das du brauchst.",
        },
        {
          title: "Gesprächsnotizen ins CRM",
          body: "Vertriebs- oder Supportanrufe, direkt in das Notizfeld des Datensatzes geschrieben.",
        },
      ],
    },
    captions: {
      heading: "Untertitel",
      intro: "Lies, was ein Tab sagt, während er es sagt.",
      items: [
        {
          title: "Untertitel, wo es keine gibt",
          body: "Streams, eingebettete Player und alte Aufnahmen, die nie Untertitel hatten.",
        },
        {
          title: "Live-Webinare und Konferenzen",
          body: "Behalte das ganze Transkript, nicht nur die Folie, die du fotografiert hast.",
        },
        {
          title: "Besprechungsnotizen",
          body: "Ein Webanruf in einem Tab, das Transkript im nächsten in deinem Dokument oder deiner Notizen-App.",
        },
        {
          title: "Barrierefreiheit für Gehörlose und Schwerhörige",
          body: "Eine laufende Textfassung jedes Anrufs oder Videos, in einem Feld, in dem du zurückscrollen kannst.",
        },
      ],
    },
    llm: {
      heading: "In jeden KI-Chat",
      intro:
        "TypeTarget kann in das Eingabefeld jeder LLM-Weboberfläche schreiben. Gib der KI ihre Anweisungen, und jede Nachricht, die du ihr schickst, wird so behandelt, wie du es verlangt hast.",
      items: [
        {
          title: "Live-Rollenspiel",
          body: "Gib der KI eine Rolle. Was die andere Seite sagt, landet als deine Zeilen in ihrem Chatfeld.",
        },
        {
          title: "Besprechungs-Copilot",
          body: "Frag nach Anschlussfragen, Aufgaben oder einer verständlichen Fassung des Fachjargons.",
        },
        {
          title: "Sprachpraxis",
          body: "Ein Tutor, der dich zum Audio, das du hörst, korrigiert, dir etwas erklärt oder dich abfragt.",
        },
        {
          title: "Lernhilfe",
          body: "Mach aus einer Vorlesung Karteikarten, eine Zusammenfassung oder Übungsfragen, während sie läuft.",
        },
        {
          title: "Live-Kommentar",
          body: "Kommentiere Behauptungen in einer Debatte, einem Pitch oder einer Keynote, während sie noch läuft.",
        },
      ],
    },
    examplePrompt:
      "Du bist mein Gesprächspartner auf Spanisch. Alles, was ich dir schicke, hat gerade jemand in einem englischen Video gesagt. Antworte in einfachem Spanisch, als würdest du der Person antworten, und gib mir dann ein Wort daraus zum Lernen.",
    exampleCaption:
      "Ein Beispiel-Prompt. Füge deinen eigenen in einen beliebigen KI-Chat ein, bevor du mit dem Zuhören beginnst.",
  },
  spec: {
    heading: "Für immer kostenlos.",
    intro:
      "Kein Zähler, der läuft, keine Grenze für das, was du behältst. Nimm so viel auf, wie du willst, so lange du willst.",
    recording: {
      label: "Keine Aufnahmegrenzen.",
      value:
        "Lass es eine ganztägige Konferenz lang laufen. TypeTarget begrenzt nicht, wie lange eine Sitzung dauern kann.",
    },
    storage: {
      label: "Keine Speichergrenzen.",
      value:
        "TypeTarget speichert keine Transkripte, also kann nichts volllaufen. Jedes Wort geht direkt in das Feld, das du gewählt hast, und du kannst es als .txt-Datei auf deinem eigenen Computer speichern. Keine Server, keine Konten, keine Logs.",
    },
    account: {
      label: "Kein Konto nötig.",
      value:
        "Kostenlos und Open Source unter der MIT-Lizenz. Keine Testphase, kein Bezahltarif, kein Konto zu erstellen. Die in der Cloud gehosteten Transkriptionsmodelle laufen über dein eigenes Google- oder Groq-Konto, und beide bieten eine kostenlose Stufe.",
    },
    limitsNoteLink: "Hinweis zu Anbietergrenzen ansehen",
    limitsNote:
      "* TypeTarget setzt selbst keine Grenze. Gehostete Modelle (Gemini, Groq) haben eigene Kontingente für ihre kostenlosen Stufen, die Google und Groq festlegen und jederzeit ändern können. Lokales Whisper hat kein Kontingent.",
  },
  faq: {
    heading: "Häufig gestellte Fragen.",
    microphone: {
      q: "Transkribiert es meine eigene Stimme?",
      a: "Nein. TypeTarget hört, was du hörst, nicht was du sagst. Es verwendet dein Mikrofon nicht.",
    },
    needKey: {
      q: "Brauche ich einen API-Schlüssel?",
      a: "Nicht zum Start. Lokales Whisper braucht keinen Schlüssel, aber die Leistung hängt von deiner Hardware ab. Ein Gemini- oder Groq-Schlüssel, den du kostenlos bei diesen Anbietern bekommst, ermöglicht Live-Transkription auf jedem Gerät.",
    },
    getKey: {
      q: "Wie bekomme ich einen API-Schlüssel?",
      gemini:
        "<b>Gemini.</b> Gehe zu <link>aistudio.google.com/api-keys</link> und klicke oben rechts auf die Schaltfläche <code>Create API key</code>.",
      geminiSteps: [
        "Gib deinem Schlüssel einen beliebigen Namen.",
        "Wähle <code>Create new project</code> und gib auch dem Projekt einen beliebigen Namen.",
        "Klicke auf <code>Create key</code>.",
        "Kopiere den Schlüssel, den du bekommst, und füge ihn in TypeTarget in das Feld für den API-Schlüssel ein.",
      ],
      groq: "<b>Groq.</b> Gehe zu <link>console.groq.com/keys</link> und klicke auf die Schaltfläche <code>Create API Key</code>.",
      groqSteps: [
        "Gib als Display Name einen beliebigen Namen ein.",
        "Kopiere deinen Secret Key und füge ihn in TypeTarget in das Feld für den Groq-API-Schlüssel ein.",
      ],
      aiStudioImage:
        "Die obere rechte Ecke der API-Schlüssel-Seite von Google AI Studio, mit einem Link „API quickstart“, einer Schaltfläche „Create API key“ und darunter einem Dropdown „Filter by All projects“.",
      groqImage:
        "Die Schaltfläche „Create API Key“ von GroqCloud, mit einem Pluszeichen vor der Beschriftung.",
    },
    slow: {
      q: "Warum ist meine Transkription langsam?",
      a: "Wahrscheinlich verwendest du lokales Whisper, das in deinem Browser läuft, daher hängt seine Geschwindigkeit von deiner Hardware ab. Auf einem älteren oder schwächeren Gerät kann es hinter dem Ton zurückbleiben. Für schnelle Live-Transkription auf jedem Gerät wechsle zu einem kostenlosen Gemini- oder Groq-Schlüssel.",
    },
    wrongLanguage: {
      q: "Warum transkribiert es die falsche Sprache?",
      a: "Probiere unter <code>{model}</code> ein anderes Modell: Größere Modelle unterscheiden Sprachen besser. Wenn du weißt, welche Sprache gesprochen wird, wähle sie unter <code>{spokenLanguage}</code>, statt <code>{auto}</code> zu lassen. Du kannst auch <code>{chunkLength}</code> erhöhen, damit das Modell mehr Sprache hat, um die Sprache zu erkennen.",
    },
    audio: {
      q: "Wohin geht mein Ton?",
      a: "Mit lokalem Whisper nirgendwohin: Er wird in deinem Browser transkribiert. Mit Gemini oder Groq geht er nur an diesen Anbieter, mit deinem eigenen Schlüssel. Er geht nie an TypeTarget.",
    },
    languages: {
      q: "Welche Sprachen werden unterstützt?",
      transcription:
        "<b>Transkription.</b> Die Whisper-Modelle von OpenAI, lokal oder bei Groq, unterstützen <whisper>99 Sprachen</whisper>. Gemini Transcribe hat eine eigene <gemini>Liste unterstützter Sprachen</gemini>.",
      interface:
        "<b>Oberfläche.</b> Die Oberfläche von TypeTarget gibt es auf Arabisch, Bengalisch, Chinesisch (vereinfacht und traditionell), Deutsch, Englisch, Filipino, Französisch, Hindi, Indonesisch, Italienisch, Japanisch, Koreanisch, Marathi, Polnisch, Portugiesisch (Brasilien und Portugal), Russisch, Spanisch, Telugu, Thai, Tschechisch, Türkisch, Ukrainisch, Urdu und Vietnamesisch, passend zur Sprache deines Systems und Browsers.",
    },
    browsers: {
      q: "In welchen Browsern funktioniert es?",
      a: "Chrome 116 oder neuer, installiert aus dem Chrome Web Store. Chromium-basierte Browser wie Edge und Brave können es aus demselben Eintrag hinzufügen.",
    },
    unpacked: {
      q: "Kann ich es ohne den Chrome Web Store laden?",
      a: "Ja. <download>Lade die ZIP-Datei herunter</download> und entpacke sie, um einen Ordner namens <code>typetarget</code> zu erhalten. Öffne <code>chrome://extensions</code>, indem du es in die Adressleiste einfügst, da Webseiten nicht dorthin verlinken können (in Edge ist es <code>edge://extensions</code>, in Brave <code>brave://extensions</code>). Aktiviere oben rechts den Entwicklermodus, klicke auf <code>Entpackte Erweiterung laden</code> und wähle den entpackten Ordner aus. Für ein späteres Update lade die neue ZIP-Datei herunter, ersetze den Ordner und klicke auf der Karte von TypeTarget auf den Pfeil zum Neuladen.",
    },
    contact: {
      q: "Wie kann ich TypeTarget kontaktieren?",
      a: "Schreib uns über <contact>dieses Formular</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Kostenlos und Open Source unter der MIT-Lizenz; <source>Quellcode auf GitHub</source>. Transkription durch Whisper (whisper.cpp, in deinem Browser), Google Gemini oder Groq, mit deinem eigenen Schlüssel. TypeTarget ist nicht mit Google oder Groq verbunden. Keine Server, keine Konten, keine Analysen, auch nicht auf dieser Seite. <privacy>Datenschutzerklärung</privacy>. <issues>Problem melden</issues>. <contact>Kontakt</contact>.",
  },
}
