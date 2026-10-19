import type { Messages } from "./en"

export const pl: Messages = {
  meta: {
    title: "TypeTarget: zamiana mowy na tekst w dowolnym polu tekstowym",
    description:
      "Bezpłatne rozszerzenie przeglądarki o otwartym kodzie, które transkrybuje dźwięk z dowolnej karty i wpisuje go na żywo w dowolne pole tekstowe na dowolnej karcie. Notatki ze spotkań, napisy i wprowadzanie na żywo do dowolnego czatu AI.",
  },
  header: {
    addTo: "Dodaj do przeglądarki {browser}",
    language: "Język",
  },
  hero: {
    headline: "Mowa na tekst, wpisywana wszędzie.",
    intro:
      "TypeTarget to bezpłatne rozszerzenie przeglądarki, które transkrybuje dźwięk bezpośrednio do dowolnego wskazanego przez Ciebie pola tekstowego.",
    note: "Za darmo · Licencja MIT · Chrome 116+",
    availableOn: "Dostępne w",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Kod źródłowy TypeTarget na GitHubie",
    githubTitle: "Kod źródłowy na GitHubie",
    howItWorks: "Jak to działa",
  },
  steps: {
    carouselLabel: "Kroki konfiguracji",
    slideLabel: "{n} z {total}",
    step: "Krok {n}",
    optional: "(opcjonalnie)",
    pause: "Wstrzymaj pokaz slajdów",
    play: "Odtwórz pokaz slajdów",
    mute: "Wycisz wideo",
    unmute: "Włącz dźwięk wideo",
    pickModel: {
      title: "Wybierz model i/lub język.",
      body: "Wybierz model AI, który transkrybuje lokalnie na Twoim komputerze, albo zleć obliczenia dostawcy w chmurze. Razem rozumieją ponad <languages>100 ludzkich języków</languages>.",
      animation:
        "Okno TypeTarget. Kursor przewija listę modeli i wybiera Whisper Large v3 Q5, a potem przewija listę języków mówionych i wybiera angielski.",
    },
    selectInput: {
      title: "Wybierz wejście.",
      body: "Kliknij przycisk <code>{startListening}</code> w panelu TypeTarget albo kliknij prawym przyciskiem myszy dowolną stronę. Wybierz <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Rozmowa wideo na karcie przeglądarki. Kursor klika prawym przyciskiem, otwiera menu TypeTarget i klika {listenToTab}.",
    },
    chooseOutput: {
      title: "Wybierz wyjście.",
      body: "Kliknij przycisk <code>{startTyping}</code> w panelu TypeTarget albo kliknij prawym przyciskiem myszy pole tekstowe na dowolnej stronie i wybierz <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "Rozmowa wideo z kroku 2. Kursor klika prawym przyciskiem, otwiera menu TypeTarget i klika {typeToNewFile}. U dołu strony otwiera się pole tekstowe z zieloną ramką i licznikiem czasu, a transkrybowana mowa jest do niego wpisywana. Kursor klika przycisk pola „Otwórz w nowej karcie”, a tekst jest dalej wpisywany w polu na całą stronę w nowej karcie.",
    },
  },
  chromeMenu: {
    back: "Wstecz",
    forward: "Dalej",
    reload: "Odśwież",
    saveAs: "Zapisz jako…",
    print: "Drukuj…",
    cast: "Przesyłaj…",
    qrCode: "Utwórz kod QR dla tej strony",
    translate: "Przetłumacz na français",
    viewSource: "Pokaż źródło strony",
    blockElements: "Zablokuj elementy",
    inspect: "Zbadaj",
    ctrl: "Ctrl",
    altLeft: "Alt+Strzałka w lewo",
    altRight: "Alt+Strzałka w prawo",
  },
  useCases: {
    heading:
      "Twoje notatki należą do Ciebie. Wysyłaj je i zapisuj, gdzie chcesz.",
    intro:
      "TypeTarget nie przechowuje Twoich notatek. Zamiast tego to Ty mówisz mu, gdzie ma je zapisywać.",
    notes: {
      heading: "Notatki, które zostają",
      intro: "Użyj dowolnej karty przeglądarki jako źródła dźwięku.",
      items: [
        {
          title: "Wykłady i kursy",
          body: "Każde słowo z nagranych lub prowadzonych na żywo zajęć, prosto do notatek.",
        },
        {
          title: "Wywiady i badania z użytkownikami",
          body: "Transkrybuj nagraną sesję, gdy oglądasz ją ponownie.",
        },
        {
          title: "Podcasty i media społecznościowe",
          body: "Zapisz transkrypcję całego filmu na notatki do odcinka, szkic wpisu na bloga albo potrzebny cytat.",
        },
        {
          title: "Notatki z rozmów w CRM",
          body: "Rozmowy sprzedażowe lub z obsługi klienta, wpisywane prosto w pole notatek rekordu.",
        },
      ],
    },
    captions: {
      heading: "Napisy",
      intro: "Czytaj, co mówi karta, w chwili gdy to mówi.",
      items: [
        {
          title: "Napisy tam, gdzie ich nie ma",
          body: "Transmisje, osadzone odtwarzacze i stare nagrania, które nigdy nie miały napisów.",
        },
        {
          title: "Webinary i konferencje na żywo",
          body: "Zachowaj całą transkrypcję, nie tylko slajd, który udało Ci się sfotografować.",
        },
        {
          title: "Notatki ze spotkań",
          body: "Rozmowa w przeglądarce na jednej karcie, transkrypcja w dokumencie lub aplikacji do notatek na następnej.",
        },
        {
          title: "Dostępność dla osób głuchych i niedosłyszących",
          body: "Bieżąca wersja tekstowa dowolnej rozmowy lub filmu, w polu, które możesz przewijać wstecz.",
        },
      ],
    },
    llm: {
      heading: "Do dowolnego czatu AI",
      intro:
        "TypeTarget może pisać w polu promptu dowolnego webowego interfejsu LLM. Daj AI instrukcje, a każda wysłana wiadomość zostanie potraktowana tak, jak chcesz.",
      items: [
        {
          title: "Odgrywanie ról na żywo",
          body: "Przydziel AI rolę. To, co mówi druga strona, trafia do jej czatu jako Twoje kwestie.",
        },
        {
          title: "Copilot na spotkania",
          body: "Poproś o pytania uzupełniające, zadania do wykonania lub prostą wersję fachowego żargonu.",
        },
        {
          title: "Nauka języka",
          body: "Korepetytor, który poprawia, wyjaśnia lub odpytuje Cię z nagrania, którego słuchasz.",
        },
        {
          title: "Pomoc w nauce",
          body: "Zamień wykład w fiszki, streszczenie lub pytania sprawdzające, na bieżąco.",
        },
        {
          title: "Komentarz na żywo",
          body: "Opatruj komentarzem tezy z debaty, prezentacji inwestorskiej lub keynote’u, póki jeszcze trwa.",
        },
      ],
    },
    examplePrompt:
      "Jesteś moim partnerem do rozmowy po hiszpańsku. Wszystko, co Ci wysyłam, to słowa, które ktoś właśnie wypowiedział w angielskim filmie. Odpowiadaj prostym hiszpańskim, jakbyś odpowiadał tej osobie, a potem podaj mi jedno słowo do nauczenia się.",
    exampleCaption:
      "Przykładowy prompt. Zanim zaczniesz słuchać, wklej własny do dowolnego czatu AI.",
  },
  spec: {
    heading: "Za darmo na zawsze.",
    intro:
      "Żadnego licznika, żadnego limitu tego, co zachowujesz. Nagrywaj, ile chcesz i jak długo chcesz.",
    recording: {
      label: "Bez limitów nagrywania.",
      value:
        "Zostaw go włączonego na całodniową konferencję. TypeTarget nie ogranicza długości sesji.",
    },
    storage: {
      label: "Bez limitów miejsca.",
      value:
        "TypeTarget nie przechowuje transkrypcji, więc nie ma czego zapełnić. Każde słowo trafia prosto do wybranego pola, a możesz je zapisać jako plik .txt na własnym komputerze. Bez serwerów, bez kont, bez logów.",
    },
    account: {
      label: "Konto nie jest potrzebne.",
      value:
        "Za darmo i z otwartym kodem na licencji MIT. Bez okresu próbnego, bez płatnego planu, bez zakładania konta. Hostowane w chmurze modele transkrypcji działają na Twoim własnym koncie Google lub Groq i oba oferują bezpłatny pakiet.",
    },
    limitsNoteLink: "Zobacz uwagę o limitach dostawców",
    limitsNote:
      "* TypeTarget nie nakłada własnych limitów. Modele hostowane (Gemini, Groq) mają własne limity bezpłatnych pakietów, które Google i Groq ustalają i mogą w każdej chwili zmienić. Lokalny Whisper nie ma limitu.",
  },
  faq: {
    heading: "Najczęstsze pytania.",
    microphone: {
      q: "Czy transkrybuje mój własny głos?",
      a: "Nie. TypeTarget słyszy to, co Ty słyszysz, a nie to, co mówisz. Nie używa Twojego mikrofonu.",
    },
    needKey: {
      q: "Czy potrzebuję klucza API?",
      a: "Nie na start. Lokalny Whisper nie wymaga klucza, ale jego wydajność zależy od Twojego sprzętu. Klucz Gemini lub Groq, który dostaniesz za darmo od tych dostawców, daje transkrypcję na żywo na każdym komputerze.",
    },
    getKey: {
      q: "Jak zdobyć klucz API?",
      gemini:
        "<b>Gemini.</b> Wejdź na <link>aistudio.google.com/api-keys</link> i kliknij przycisk <code>Create API key</code> w prawym górnym rogu.",
      geminiSteps: [
        "Nazwij klucz dowolnie.",
        "Wybierz <code>Create new project</code> i również nazwij projekt dowolnie.",
        "Kliknij <code>Create key</code>.",
        "Skopiuj otrzymany klucz i wklej go w pole klucza API w TypeTarget.",
      ],
      groq: "<b>Groq.</b> Wejdź na <link>console.groq.com/keys</link> i kliknij przycisk <code>Create API Key</code>.",
      groqSteps: [
        "Wpisz dowolny Display Name.",
        "Skopiuj swój Secret Key i wklej go w pole klucza API Groq w TypeTarget.",
      ],
      aiStudioImage:
        "Prawy górny róg strony kluczy API w Google AI Studio z linkiem „API quickstart”, przyciskiem „Create API key” i pod nimi listą rozwijaną „Filter by All projects”.",
      groqImage:
        "Przycisk „Create API Key” w GroqCloud ze znakiem plus przed etykietą.",
    },
    slow: {
      q: "Dlaczego moja transkrypcja jest wolna?",
      a: "Najpewniej używasz lokalnego Whispera, który działa w przeglądarce, więc jego szybkość zależy od Twojego sprzętu. Na starszym lub słabszym komputerze może nie nadążać za dźwiękiem. Aby uzyskać szybką transkrypcję na żywo na każdym komputerze, przejdź na bezpłatny klucz Gemini lub Groq.",
    },
    wrongLanguage: {
      q: "Transkrybuje w złym języku.",
      a: "Wypróbuj inny model w sekcji <code>{model}</code>: większe modele lepiej rozróżniają języki. Jeśli wiesz, w jakim języku jest mowa, wybierz go w sekcji <code>{spokenLanguage}</code> zamiast zostawiać <code>{auto}</code>. Możesz też zwiększyć <code>{chunkLength}</code>, żeby model miał więcej mowy do rozpoznania języka.",
    },
    audio: {
      q: "Dokąd trafia mój dźwięk?",
      a: "Z lokalnym Whisperem nigdzie: jest transkrybowany w Twojej przeglądarce. Z Gemini lub Groq trafia tylko do tego dostawcy, z użyciem Twojego własnego klucza. Nigdy nie trafia do TypeTarget.",
    },
    languages: {
      q: "Jakie języki są obsługiwane?",
      transcription:
        "<b>Transkrypcja.</b> Modele Whisper od OpenAI, lokalnie lub w Groq, obsługują <whisper>99 języków</whisper>. Gemini Transcribe ma własną <gemini>listę obsługiwanych języków</gemini>.",
      interface:
        "<b>Interfejs.</b> Interfejs TypeTarget jest dostępny w językach: angielskim, arabskim, bengalskim, chińskim (uproszczonym i tradycyjnym), czeskim, filipińskim, francuskim, hindi, hiszpańskim, indonezyjskim, japońskim, koreańskim, marathi, niemieckim, polskim, portugalskim (Brazylia i Portugalia), rosyjskim, tajskim, telugu, tureckim, ukraińskim, urdu, wietnamskim i włoskim, zgodnie z językiem systemu i przeglądarki.",
    },
    browsers: {
      q: "W jakich przeglądarkach działa?",
      a: "W Chrome 116 lub nowszym, zainstalowany z Chrome Web Store. Przeglądarki oparte na Chromium, takie jak Edge i Brave, mogą dodać go z tej samej strony.",
    },
    unpacked: {
      q: "Czy mogę go wczytać bez Chrome Web Store?",
      a: "Tak. <download>Pobierz plik zip</download> i rozpakuj go, aby otrzymać folder <code>typetarget</code>. Otwórz <code>chrome://extensions</code>, wklejając adres do paska adresu, bo strony internetowe nie mogą do niego linkować (w Edge to <code>edge://extensions</code>, w Brave <code>brave://extensions</code>). Włącz Tryb dewelopera w prawym górnym rogu, kliknij <code>Załaduj rozpakowane</code> i wybierz rozpakowany folder. Aby później zaktualizować, pobierz nowy zip, podmień folder i kliknij strzałkę odświeżania na karcie TypeTarget.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Za darmo i z otwartym kodem na licencji MIT; <source>kod źródłowy na GitHubie</source>. Transkrypcja przez Whisper (whisper.cpp, w Twojej przeglądarce), Google Gemini lub Groq, z Twoim własnym kluczem. TypeTarget nie jest powiązany z Google ani Groq. Bez serwerów, bez kont, bez analityki, również na tej stronie. <privacy>Polityka prywatności</privacy>. <issues>Zgłoś problem</issues>. <contact>Kontakt</contact>.",
  },
}
