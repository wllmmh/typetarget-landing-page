import type { Messages } from "./en"

export const cs: Messages = {
  meta: {
    title: "TypeTarget: převod řeči na text do libovolného textového pole",
    description:
      "Bezplatné rozšíření prohlížeče s otevřeným zdrojovým kódem, které přepisuje zvuk z libovolné karty a živě ho píše do libovolného textového pole na libovolné kartě. Zápisy ze schůzek, titulky a živý vstup pro jakýkoli AI chat.",
  },
  header: {
    addTo: "Přidat do prohlížeče {browser}",
    language: "Jazyk",
  },
  hero: {
    headline: "Řeč na text, napsaná kamkoli.",
    intro:
      "TypeTarget je bezplatné rozšíření prohlížeče, které přepisuje váš zvuk přímo do textového pole, které mu určíte.",
    note: "Zdarma · Licence MIT · Chrome 116+",
    availableOn: "K dispozici v",
    chromeWebStore: "Internetovém obchodě Chrome",
    githubLabel: "Zdrojový kód TypeTarget na GitHubu",
    githubTitle: "Zdrojový kód na GitHubu",
    howItWorks: "Jak to funguje",
  },
  steps: {
    carouselLabel: "Kroky nastavení",
    slideLabel: "{n} z {total}",
    step: "Krok {n}",
    optional: "(volitelné)",
    pause: "Pozastavit prezentaci",
    play: "Přehrát prezentaci",
    mute: "Ztlumit video",
    unmute: "Zapnout zvuk videa",
    pickModel: {
      title: "Vyberte model a/nebo jazyk.",
      body: "Vyberte model AI, který přepisuje místně na vašem počítači, nebo nechte výpočty na poskytovateli v cloudu. Dohromady rozumějí více než <languages>100 lidským jazykům</languages>.",
      animation:
        "Okno TypeTarget. Ukazatel projde seznam modelů a vybere Whisper Large v3 Q5, pak projde seznam mluvených jazyků a vybere angličtinu.",
    },
    selectInput: {
      title: "Vyberte vstup.",
      body: "Klikněte na tlačítko <code>{startListening}</code> v panelu TypeTarget nebo klikněte pravým tlačítkem na libovolnou stránku. Zvolte <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Videohovor na kartě prohlížeče. Ukazatel klikne pravým tlačítkem, otevře nabídku TypeTarget a klikne na {listenToTab}.",
    },
    chooseOutput: {
      title: "Vyberte výstup.",
      body: "Klikněte na tlačítko <code>{startTyping}</code> v panelu TypeTarget nebo klikněte pravým tlačítkem do textového pole na libovolné webové stránce a vyberte <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "Videohovor z kroku 2. Ukazatel klikne pravým tlačítkem, otevře nabídku TypeTarget a klikne na {typeToNewFile}. Ve spodní části stránky se otevře textové pole se zeleným obrysem a časovačem a píše se do něj přepsaná řeč. Ukazatel klikne na tlačítko pole „Otevřít na nové kartě“ a text se dál píše do celostránkového pole na nové kartě.",
    },
  },
  chromeMenu: {
    back: "Zpět",
    forward: "Vpřed",
    reload: "Načíst znovu",
    saveAs: "Uložit jako…",
    print: "Tisk…",
    cast: "Odeslat…",
    qrCode: "Vytvořit QR kód pro tuto stránku",
    translate: "Přeložit do jazyka français",
    viewSource: "Zobrazit zdrojový kód stránky",
    blockElements: "Blokovat prvky",
    inspect: "Prozkoumat",
    ctrl: "Ctrl",
    altLeft: "Alt+Šipka vlevo",
    altRight: "Alt+Šipka vpravo",
  },
  useCases: {
    heading: "Poznámky patří vám. Posílejte a ukládejte je kamkoli.",
    intro:
      "TypeTarget vaše poznámky neukládá. Místo toho mu řeknete, kam je má psát.",
    notes: {
      heading: "Poznámky, které si necháte",
      intro: "Jako zdroj zvuku použijte libovolnou kartu prohlížeče.",
      items: [
        {
          title: "Přednášky a kurzy",
          body: "Každé slovo nahrané nebo živé výuky přímo do vašich studijních poznámek.",
        },
        {
          title: "Rozhovory a uživatelský výzkum",
          body: "Přepište nahrané sezení, zatímco si ho znovu pouštíte.",
        },
        {
          title: "Podcasty a sociální sítě",
          body: "Uložte si přepis celého videa pro poznámky k epizodě, koncept článku nebo citát, který potřebujete.",
        },
        {
          title: "Poznámky z hovorů do CRM",
          body: "Obchodní nebo podpůrné hovory napsané přímo do pole poznámek u záznamu.",
        },
      ],
    },
    captions: {
      heading: "Titulky",
      intro: "Čtěte, co karta říká, právě když to říká.",
      items: [
        {
          title: "Titulky tam, kde nejsou",
          body: "Streamy, vložené přehrávače a staré nahrávky, které titulky nikdy neměly.",
        },
        {
          title: "Živé webináře a konference",
          body: "Mějte celý přepis, ne jen snímek, který jste si vyfotili.",
        },
        {
          title: "Zápisy ze schůzek",
          body: "Webový hovor na jedné kartě, přepis ve vašem dokumentu nebo aplikaci na poznámky na vedlejší.",
        },
        {
          title: "Přístupnost pro neslyšící a nedoslýchavé",
          body: "Průběžná textová verze jakéhokoli hovoru nebo videa v poli, ve kterém se můžete vracet zpět.",
        },
      ],
    },
    llm: {
      heading: "Do jakéhokoli AI chatu",
      intro:
        "TypeTarget umí psát do pole pro zadání v libovolném webovém rozhraní LLM. Dejte AI pokyny a každá zpráva, kterou jí pošlete, se zpracuje tak, jak jste chtěli.",
      items: [
        {
          title: "Živé hraní rolí",
          body: "Dejte AI roli. Co říká druhá strana, přistane v jejím chatu jako vaše repliky.",
        },
        {
          title: "Kopilot na schůzky",
          body: "Požádejte o doplňující otázky, úkoly nebo srozumitelnou verzi odborného žargonu.",
        },
        {
          title: "Procvičování jazyka",
          body: "Lektor, který vás opravuje, vysvětluje nebo zkouší z audia, které posloucháte.",
        },
        {
          title: "Pomoc se studiem",
          body: "Udělejte z přednášky kartičky, shrnutí nebo cvičné otázky, zatímco probíhá.",
        },
        {
          title: "Živý komentář",
          body: "Komentujte tvrzení v debatě, pitchi nebo keynote, zatímco ještě běží.",
        },
      ],
    },
    examplePrompt:
      "Jsi můj konverzační partner ve španělštině. Všechno, co ti pošlu, je to, co někdo právě řekl v anglickém videu. Odpověz jednoduchou španělštinou, jako bys mu odpovídal, a pak mi z toho dej jedno slovíčko k naučení.",
    exampleCaption:
      "Příklad promptu. Než začnete poslouchat, vložte svůj vlastní do libovolného AI chatu.",
  },
  spec: {
    heading: "Navždy zdarma.",
    intro:
      "Žádné počítadlo, žádný limit na to, co si necháte. Nahrávejte, kolik chcete a jak dlouho chcete.",
    recording: {
      label: "Žádné limity nahrávání.",
      value:
        "Nechte ho běžet celý den konference. TypeTarget nijak neomezuje, jak dlouho může sezení trvat.",
    },
    storage: {
      label: "Žádné limity úložiště.",
      value:
        "TypeTarget přepisy neukládá, takže se nemá co zaplnit. Každé slovo jde přímo do pole, které jste vybrali, a můžete si ho uložit jako soubor .txt na vlastním počítači. Žádné servery, žádné účty, žádné logy.",
    },
    account: {
      label: "Účet není potřeba.",
      value:
        "Zdarma a s otevřeným zdrojovým kódem pod licencí MIT. Žádná zkušební verze, žádný placený tarif, žádný účet k založení. Přepisovací modely hostované v cloudu běží na vašem vlastním účtu Google nebo Groq a oba nabízejí bezplatnou úroveň.",
    },
    limitsNoteLink: "Zobrazit poznámku k limitům poskytovatelů",
    limitsNote:
      "* TypeTarget sám žádný limit nestanovuje. Hostované modely (Gemini, Groq) mají vlastní kvóty bezplatné úrovně, které Google a Groq určují a mohou kdykoli změnit. Místní Whisper žádnou kvótu nemá.",
  },
  faq: {
    heading: "Časté dotazy.",
    microphone: {
      q: "Přepisuje můj vlastní hlas?",
      a: "Ne. TypeTarget slyší to, co slyšíte vy, ne to, co říkáte. Nepoužívá váš mikrofon.",
    },
    needKey: {
      q: "Potřebuji klíč API?",
      a: "Pro začátek ne. Místní Whisper žádný klíč nepotřebuje, ale výkon závisí na vašem hardwaru. Klíč Gemini nebo Groq, který od těchto poskytovatelů získáte zdarma, umožní živý přepis na jakémkoli počítači.",
    },
    getKey: {
      q: "Jak získám klíč API?",
      gemini:
        "<b>Gemini.</b> Přejděte na <link>aistudio.google.com/api-keys</link> a vpravo nahoře klikněte na tlačítko <code>Create API key</code>.",
      geminiSteps: [
        "Pojmenujte klíč jakkoli.",
        "Zvolte <code>Create new project</code> a také projekt pojmenujte jakkoli.",
        "Klikněte na <code>Create key</code>.",
        "Zkopírujte klíč, který dostanete, a vložte ho do pole pro klíč API v TypeTarget.",
      ],
      groq: "<b>Groq.</b> Přejděte na <link>console.groq.com/keys</link> a klikněte na tlačítko <code>Create API Key</code>.",
      groqSteps: [
        "Zadejte libovolný Display Name.",
        "Zkopírujte svůj Secret Key a vložte ho do pole pro klíč API Groq v TypeTarget.",
      ],
      aiStudioImage:
        "Pravý horní roh stránky klíčů API v Google AI Studio s odkazem „API quickstart“, tlačítkem „Create API key“ a pod nimi rozbalovacím seznamem „Filter by All projects“.",
      groqImage:
        "Tlačítko „Create API Key“ v GroqCloud se znaménkem plus před popiskem.",
    },
    slow: {
      q: "Proč je můj přepis pomalý?",
      a: "Nejspíš používáte místní Whisper, který běží v prohlížeči, takže jeho rychlost závisí na vašem hardwaru. Na starším nebo slabším počítači může za zvukem zaostávat. Pro rychlý živý přepis na jakémkoli počítači přejděte na bezplatný klíč Gemini nebo Groq.",
    },
    wrongLanguage: {
      q: "Proč přepisuje ve špatném jazyce?",
      a: "Zkuste v části <code>{model}</code> jiný model: větší modely jazyky rozlišují lépe. Pokud víte, jakým jazykem se mluví, vyberte ho v části <code>{spokenLanguage}</code> místo ponechání možnosti <code>{auto}</code>. Můžete také zvýšit <code>{chunkLength}</code>, aby měl model víc řeči, podle které jazyk pozná.",
    },
    audio: {
      q: "Kam putuje můj zvuk?",
      a: "S místním Whisperem nikam: přepisuje se ve vašem prohlížeči. S Gemini nebo Groq jde pouze k danému poskytovateli, pod vaším vlastním klíčem. Nikdy nejde do TypeTarget.",
    },
    languages: {
      q: "Jaké jazyky podporujete?",
      transcription:
        "<b>Přepis.</b> Modely Whisper od OpenAI, místně nebo na Groq, podporují <whisper>99 jazyků</whisper>. Gemini Transcribe má vlastní <gemini>seznam podporovaných jazyků</gemini>.",
      interface:
        "<b>Rozhraní.</b> Rozhraní TypeTarget je k dispozici v arabštině, angličtině, bengálštině, čínštině (zjednodušené i tradiční), češtině, filipínštině, francouzštině, hindštině, indonéštině, italštině, japonštině, korejštině, maráthštině, němčině, polštině, portugalštině (brazilské i evropské), ruštině, španělštině, telugštině, thajštině, turečtině, ukrajinštině, urdštině a vietnamštině, podle jazyka vašeho systému a prohlížeče.",
    },
    browsers: {
      q: "Ve kterých prohlížečích funguje?",
      a: "Chrome 116 nebo novější, instalovaný z Internetového obchodu Chrome. Prohlížeče založené na Chromiu, jako Edge a Brave, ho mohou přidat ze stejné stránky.",
    },
    unpacked: {
      q: "Můžu ho načíst bez Internetového obchodu Chrome?",
      a: "Ano. <download>Stáhněte si zip</download> a rozbalte ho, čímž získáte složku <code>typetarget</code>. Otevřete <code>chrome://extensions</code> vložením do adresního řádku, protože webové stránky na ni nemohou odkazovat (v Edgi je to <code>edge://extensions</code>, v Brave <code>brave://extensions</code>). Vpravo nahoře zapněte Režim pro vývojáře, klikněte na <code>Načíst rozbalené</code> a vyberte rozbalenou složku. Pro pozdější aktualizaci stáhněte nový zip, nahraďte složku a stiskněte šipku pro opětovné načtení na kartě TypeTarget.",
    },
    contact: {
      q: "Jaké jsou vaše kontaktní údaje?",
      a: "Napište nám přes <contact>tento formulář</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Zdarma a s otevřeným zdrojovým kódem pod licencí MIT; <source>zdrojový kód na GitHubu</source>. Přepis pomocí Whisperu (whisper.cpp, ve vašem prohlížeči), Google Gemini nebo Groq, s vaším vlastním klíčem. TypeTarget není přidružen ke společnostem Google ani Groq. Žádné servery, žádné účty, žádná analytika, a to ani na této stránce. <privacy>Zásady ochrany soukromí</privacy>. <issues>Nahlásit problém</issues>. <contact>Kontakt</contact>.",
  },
}
