import type { Messages } from "./en"

export const it: Messages = {
  meta: {
    title: "TypeTarget: da voce a testo, in qualsiasi campo di testo",
    description:
      "Un'estensione per browser gratuita e open source che trascrive l'audio di qualsiasi scheda e lo scrive, in diretta, in qualsiasi campo di testo di qualsiasi scheda. Appunti delle riunioni, sottotitoli e input in diretta per qualsiasi chat IA.",
  },
  header: {
    addTo: "Aggiungi a {browser}",
    language: "Lingua",
  },
  hero: {
    headline: "Da voce a testo, scritto ovunque.",
    intro:
      "TypeTarget è un'estensione per browser gratuita che trascrive il tuo audio direttamente in qualsiasi campo di testo tu le indichi.",
    note: "Gratis · Licenza MIT · Chrome 116+",
    availableOn: "Disponibile sul",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Codice sorgente di TypeTarget su GitHub",
    githubTitle: "Codice sorgente su GitHub",
    howItWorks: "Come funziona",
  },
  steps: {
    carouselLabel: "Passaggi di configurazione",
    slideLabel: "{n} di {total}",
    step: "Passo {n}",
    optional: "(facoltativo)",
    pause: "Metti in pausa la presentazione",
    play: "Avvia la presentazione",
    mute: "Disattiva l'audio del video",
    unmute: "Attiva l'audio del video",
    pickModel: {
      title: "Scegli un modello e/o una lingua.",
      body: "Scegli un modello di IA che trascrive in locale sul tuo computer, oppure lascia che sia un fornitore cloud a occuparsi dei calcoli. Insieme capiscono oltre <languages>100 lingue umane</languages>.",
      animation:
        "La finestra di TypeTarget. Il puntatore scorre l'elenco dei modelli e sceglie Whisper Large v3 Q5, poi scorre l'elenco delle lingue parlate e sceglie l'inglese.",
    },
    selectInput: {
      title: "Scegli un input.",
      body: "Fai clic sul pulsante <code>{startListening}</code> nel pannello di TypeTarget, oppure fai clic con il tasto destro su qualsiasi pagina. Scegli <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Una videochiamata in una scheda del browser. Il puntatore fa clic con il tasto destro, apre il menu di TypeTarget e fa clic su {listenToTab}.",
    },
    chooseOutput: {
      title: "Scegli un output.",
      body: "Fai clic sul pulsante <code>{startTyping}</code> nel pannello di TypeTarget, oppure fai clic con il tasto destro sul campo di testo di qualsiasi pagina web e seleziona <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "La videochiamata del passo 2. Il puntatore fa clic con il tasto destro, apre il menu di TypeTarget e fa clic su {typeToNewFile}. In fondo alla pagina si apre una casella di testo con un bordo verde e un timer, e il parlato trascritto vi viene scritto. Il puntatore fa clic sul pulsante «Apri in una nuova scheda» della casella, e il testo continua a essere scritto in una casella a tutta pagina in una nuova scheda.",
    },
  },
  chromeMenu: {
    back: "Indietro",
    forward: "Avanti",
    reload: "Ricarica",
    saveAs: "Salva con nome…",
    print: "Stampa…",
    cast: "Trasmetti…",
    qrCode: "Crea codice QR per questa pagina",
    translate: "Traduci in français",
    viewSource: "Visualizza sorgente pagina",
    blockElements: "Blocca elementi",
    inspect: "Ispeziona",
    ctrl: "Ctrl",
    altLeft: "Alt+Freccia sinistra",
    altRight: "Alt+Freccia destra",
  },
  useCases: {
    heading: "I tuoi appunti sono tuoi. Inviali e salvali dove vuoi.",
    intro:
      "TypeTarget non salva i tuoi appunti. Sei tu a dirgli dove vuoi che li scriva.",
    notes: {
      heading: "Appunti che conservi",
      intro: "Usa qualsiasi scheda del browser come sorgente audio.",
      items: [
        {
          title: "Lezioni e corsi",
          body: "Ogni parola di una lezione registrata o dal vivo, direttamente nei tuoi appunti di studio.",
        },
        {
          title: "Interviste e ricerca sugli utenti",
          body: "Trascrivi una sessione registrata mentre la riguardi.",
        },
        {
          title: "Podcast e social media",
          body: "Salva la trascrizione di un intero video per le note dell'episodio, la bozza di un articolo o una citazione che ti serve.",
        },
        {
          title: "Note delle chiamate in un CRM",
          body: "Chiamate di vendita o di assistenza, scritte direttamente nel campo note della scheda.",
        },
      ],
    },
    captions: {
      heading: "Sottotitoli",
      intro: "Leggi cosa sta dicendo una scheda, mentre lo dice.",
      items: [
        {
          title: "Sottotitoli dove non ci sono",
          body: "Stream, player incorporati e vecchie registrazioni che non hanno mai avuto sottotitoli.",
        },
        {
          title: "Webinar e conferenze dal vivo",
          body: "Tieni l'intera trascrizione, non solo la slide che hai fotografato.",
        },
        {
          title: "Appunti delle riunioni",
          body: "Una chiamata web in una scheda, la trascrizione nel tuo documento o nella tua app di note in quella accanto.",
        },
        {
          title: "Accessibilità per persone sorde e ipoudenti",
          body: "Una versione testuale continua di qualsiasi chiamata o video, in una casella che puoi scorrere all'indietro.",
        },
      ],
    },
    llm: {
      heading: "In qualsiasi chat IA",
      intro:
        "TypeTarget può scrivere nella casella dei prompt di qualsiasi interfaccia web di un LLM. Dai all'IA le sue istruzioni, e ogni messaggio che le invii viene gestito come le hai chiesto.",
      items: [
        {
          title: "Gioco di ruolo dal vivo",
          body: "Assegna un personaggio all'IA. Quello che dice l'altra parte arriva nella sua chat come le tue battute.",
        },
        {
          title: "Copilota per le riunioni",
          body: "Chiedi domande di approfondimento, azioni da svolgere o una versione in parole semplici del gergo.",
        },
        {
          title: "Pratica linguistica",
          body: "Un tutor che ti corregge, ti spiega o ti interroga sull'audio che stai ascoltando.",
        },
        {
          title: "Aiuto allo studio",
          body: "Trasforma una lezione in flashcard, in un riassunto o in domande di esercitazione mentre si svolge.",
        },
        {
          title: "Commento dal vivo",
          body: "Annota le affermazioni di un dibattito, un pitch o un keynote mentre è ancora in corso.",
        },
      ],
    },
    examplePrompt:
      "Sei il mio partner di conversazione in spagnolo. Tutto ciò che ti invio è quello che qualcuno ha appena detto in un video in inglese. Rispondi in spagnolo semplice, come se gli stessi rispondendo, poi dammi una parola da imparare.",
    exampleCaption:
      "Un esempio di prompt. Incolla il tuo in qualsiasi chat IA prima di iniziare l'ascolto.",
  },
  spec: {
    heading: "Gratis per sempre.",
    intro:
      "Nessun contatore che scorre, nessun limite a ciò che conservi. Registra quanto vuoi, per tutto il tempo che vuoi.",
    recording: {
      label: "Nessun limite di registrazione.",
      value:
        "Lascialo attivo per un'intera giornata di conferenza. TypeTarget non pone limiti alla durata di una sessione.",
    },
    storage: {
      label: "Nessun limite di spazio.",
      value:
        "TypeTarget non salva le trascrizioni, quindi non c'è nulla che si riempia. Ogni parola va direttamente nel campo che hai scelto, e puoi salvarla come file .txt sul tuo computer. Niente server, niente account, niente log.",
    },
    account: {
      label: "Nessun account richiesto.",
      value:
        "Gratis e open source con licenza MIT. Nessuna prova, nessun piano a pagamento, nessun account da creare. I modelli di trascrizione ospitati nel cloud funzionano con il tuo account Google o Groq, ed entrambi offrono un piano gratuito.",
    },
    limitsNoteLink: "Vedi la nota sui limiti dei fornitori",
    limitsNote:
      "* TypeTarget non impone limiti propri. I modelli ospitati (Gemini, Groq) applicano le proprie quote gratuite, che Google e Groq stabiliscono e possono cambiare in qualsiasi momento. Whisper in locale non ha quote.",
  },
  faq: {
    heading: "Domande frequenti.",
    microphone: {
      q: "Trascrive la mia voce?",
      a: "No. TypeTarget sente quello che senti tu, non quello che dici. Non usa il tuo microfono.",
    },
    needKey: {
      q: "Mi serve una chiave API?",
      a: "Non per iniziare. Whisper in locale non richiede chiavi, ma le prestazioni dipendono dal tuo hardware. Una chiave Gemini o Groq, che ottieni gratis da quei fornitori, ti dà la trascrizione in diretta su qualsiasi computer.",
    },
    getKey: {
      q: "Come ottengo una chiave API?",
      gemini:
        "<b>Gemini.</b> Vai su <link>aistudio.google.com/api-keys</link> e fai clic sul pulsante <code>Create API key</code> in alto a destra.",
      geminiSteps: [
        "Dai alla chiave un nome qualsiasi.",
        "Scegli <code>Create new project</code> e dai un nome qualsiasi anche al progetto.",
        "Fai clic su <code>Create key</code>.",
        "Copia la chiave che ti viene data e incollala nel campo della chiave API di TypeTarget.",
      ],
      groq: "<b>Groq.</b> Vai su <link>console.groq.com/keys</link> e fai clic sul pulsante <code>Create API Key</code>.",
      groqSteps: [
        "Dalle il Display Name che preferisci.",
        "Copia la tua Secret Key e incollala nel campo della chiave API di Groq in TypeTarget.",
      ],
      aiStudioImage:
        "L'angolo in alto a destra della pagina delle chiavi API di Google AI Studio, con un link «API quickstart», un pulsante «Create API key» e, sotto, un menu a discesa «Filter by All projects».",
      groqImage:
        "Il pulsante «Create API Key» di GroqCloud, con un segno più prima dell'etichetta.",
    },
    slow: {
      q: "Perché la trascrizione è lenta?",
      a: "Molto probabilmente stai usando Whisper in locale, che funziona dentro il browser, quindi la sua velocità dipende dal tuo hardware. Su un computer più vecchio o meno potente può restare indietro rispetto all'audio. Per una trascrizione veloce in diretta su qualsiasi computer, passa a una chiave Gemini o Groq gratuita.",
    },
    wrongLanguage: {
      q: "Perché trascrive nella lingua sbagliata?",
      a: "Prova un altro modello in <code>{model}</code>: i modelli più grandi distinguono meglio le lingue. Se sai quale lingua viene parlata, sceglila in <code>{spokenLanguage}</code> invece di lasciare <code>{auto}</code>. Puoi anche aumentare <code>{chunkLength}</code>, così il modello ha più parlato da cui riconoscere la lingua.",
    },
    audio: {
      q: "Dove va il mio audio?",
      a: "Con Whisper in locale, da nessuna parte: viene trascritto nel tuo browser. Con Gemini o Groq, va solo a quel fornitore, usando la tua chiave. Non va mai a TypeTarget.",
    },
    languages: {
      q: "Quali lingue sono supportate?",
      transcription:
        "<b>Trascrizione.</b> I modelli Whisper di OpenAI, in locale o su Groq, supportano <whisper>99 lingue</whisper>. Gemini Transcribe ha il suo <gemini>elenco di lingue supportate</gemini>.",
      interface:
        "<b>Interfaccia.</b> L'interfaccia di TypeTarget è disponibile in arabo, bengalese, ceco, cinese (semplificato e tradizionale), coreano, filippino, francese, giapponese, hindi, indonesiano, inglese, italiano, marathi, polacco, portoghese (Brasile e Portogallo), russo, spagnolo, tailandese, tedesco, telugu, turco, ucraino, urdu e vietnamita, in base alla lingua del sistema e del browser.",
    },
    browsers: {
      q: "In quali browser funziona?",
      a: "Chrome 116 o versioni successive, installato dal Chrome Web Store. I browser basati su Chromium come Edge e Brave possono aggiungerlo dalla stessa scheda.",
    },
    unpacked: {
      q: "Posso caricarlo senza il Chrome Web Store?",
      a: "Sì. <download>Scarica lo zip</download> ed estrailo per ottenere una cartella chiamata <code>typetarget</code>. Apri <code>chrome://extensions</code> incollandolo nella barra degli indirizzi, perché le pagine web non possono collegarsi a essa (in Edge è <code>edge://extensions</code>, in Brave <code>brave://extensions</code>). Attiva la Modalità sviluppatore nell'angolo in alto a destra, fai clic su <code>Carica estensione non pacchettizzata</code> e seleziona la cartella estratta. Per aggiornarlo in seguito, scarica il nuovo zip, sostituisci la cartella e premi la freccia di ricarica sulla scheda di TypeTarget.",
    },
    contact: {
      q: "Quali sono i vostri contatti?",
      a: "Scrivici tramite <contact>questo modulo</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratis e open source con licenza MIT; <source>codice sorgente su GitHub</source>. Trascrizione con Whisper (whisper.cpp, nel tuo browser), Google Gemini o Groq, con la tua chiave. TypeTarget non è affiliato a Google né a Groq. Niente server, niente account, niente analisi, nemmeno su questa pagina. <privacy>Informativa sulla privacy</privacy>. <issues>Segnala un problema</issues>. <contact>Contatti</contact>.",
  },
}
