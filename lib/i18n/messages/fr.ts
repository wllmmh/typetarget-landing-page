import type { Messages } from "./en"

export const fr: Messages = {
  meta: {
    title: "TypeTarget : de la parole au texte, dans n'importe quel champ",
    description:
      "Une extension de navigateur gratuite et open source qui transcrit le son de n'importe quel onglet et le saisit, en direct, dans n'importe quel champ de texte de n'importe quel onglet. Notes de réunion, sous-titres et saisie en direct pour n'importe quel chat IA.",
  },
  header: {
    addTo: "Ajouter à {browser}",
    language: "Langue",
  },
  hero: {
    headline: "La parole en texte, saisie partout.",
    intro:
      "TypeTarget est une extension de navigateur gratuite qui transcrit votre son directement dans le champ de texte de votre choix.",
    note: "Gratuit · Licence MIT · Chrome 116+",
    availableOn: "Disponible sur le",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Code source de TypeTarget sur GitHub",
    githubTitle: "Code source sur GitHub",
    howItWorks: "Comment ça marche",
  },
  steps: {
    carouselLabel: "Étapes de configuration",
    slideLabel: "{n} sur {total}",
    step: "Étape {n}",
    optional: "(facultatif)",
    pause: "Mettre le diaporama en pause",
    play: "Lancer le diaporama",
    mute: "Couper le son de la vidéo",
    unmute: "Activer le son de la vidéo",
    pickModel: {
      title: "Choisissez un modèle et/ou une langue.",
      body: "Choisissez un modèle d'IA qui transcrit localement sur votre ordinateur, ou laissez un fournisseur cloud faire les calculs pour vous. Ensemble, ils comprennent plus de <languages>100 langues humaines</languages>.",
      animation:
        "La fenêtre de TypeTarget. Le pointeur fait défiler la liste des modèles et choisit Whisper Large v3 Q5, puis fait défiler la liste des langues parlées et choisit l'anglais.",
    },
    selectInput: {
      title: "Choisissez une entrée.",
      body: "Cliquez sur le bouton <code>{startListening}</code> dans le panneau TypeTarget, ou faites un clic droit sur n'importe quelle page. Choisissez <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Un appel vidéo dans un onglet du navigateur. Le pointeur fait un clic droit, ouvre le menu TypeTarget et clique sur {listenToTab}.",
    },
    chooseOutput: {
      title: "Choisissez une sortie.",
      body: "Cliquez sur le bouton <code>{startTyping}</code> dans le panneau TypeTarget, ou faites un clic droit sur le champ de texte de n'importe quelle page web et sélectionnez <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "L'appel vidéo de l'étape 2. Le pointeur fait un clic droit, ouvre le menu TypeTarget et clique sur {typeToNewFile}. Une zone de texte avec un contour vert et un minuteur s'ouvre en bas de la page, et la parole transcrite s'y écrit. Le pointeur clique sur le bouton « Ouvrir dans un nouvel onglet » de la zone, et le texte continue de s'écrire dans une zone pleine page, dans un nouvel onglet.",
    },
  },
  chromeMenu: {
    back: "Précédent",
    forward: "Suivant",
    reload: "Actualiser",
    saveAs: "Enregistrer sous…",
    print: "Imprimer…",
    cast: "Caster…",
    qrCode: "Créer un code QR pour cette page",
    translate: "Traduire en français",
    viewSource: "Afficher le code source de la page",
    blockElements: "Bloquer des éléments",
    inspect: "Inspecter",
    ctrl: "Ctrl",
    altLeft: "Alt+Flèche gauche",
    altRight: "Alt+Flèche droite",
  },
  useCases: {
    heading:
      "Vos notes vous appartiennent. Envoyez-les et enregistrez-les où vous voulez.",
    intro:
      "TypeTarget n'enregistre pas vos notes. Vous lui dites plutôt où les écrire.",
    notes: {
      heading: "Des notes que vous gardez",
      intro: "Utilisez n'importe quel onglet du navigateur comme source audio.",
      items: [
        {
          title: "Cours et formations",
          body: "Chaque mot d'un cours enregistré ou en direct, directement dans vos notes de révision.",
        },
        {
          title: "Entretiens et recherche utilisateur",
          body: "Transcrivez une session enregistrée pendant que vous la revisionnez.",
        },
        {
          title: "Podcasts et réseaux sociaux",
          body: "Enregistrez la transcription d'une vidéo entière pour des notes d'épisode, un brouillon d'article ou une citation dont vous avez besoin.",
        },
        {
          title: "Notes d'appel dans un CRM",
          body: "Appels commerciaux ou d'assistance, saisis directement dans le champ de notes de la fiche.",
        },
      ],
    },
    captions: {
      heading: "Sous-titres",
      intro: "Lisez ce que dit un onglet, au moment où il le dit.",
      items: [
        {
          title: "Des sous-titres là où il n'y en a pas",
          body: "Streams, lecteurs intégrés et vieux enregistrements qui n'ont jamais eu de sous-titres.",
        },
        {
          title: "Webinaires et conférences en direct",
          body: "Gardez toute la transcription, pas seulement la diapo que vous avez prise en photo.",
        },
        {
          title: "Notes de réunion",
          body: "Un appel web dans un onglet, la transcription dans votre document ou votre appli de notes dans le suivant.",
        },
        {
          title: "Accessibilité pour les personnes sourdes et malentendantes",
          body: "Une version texte en continu de n'importe quel appel ou vidéo, dans une zone où vous pouvez remonter.",
        },
      ],
    },
    llm: {
      heading: "Dans n'importe quel chat IA",
      intro:
        "TypeTarget peut écrire dans la zone de saisie de n'importe quelle interface web de LLM. Donnez ses consignes à l'IA, et chaque message que vous lui envoyez est traité comme vous l'avez demandé.",
      items: [
        {
          title: "Jeu de rôle en direct",
          body: "Donnez un personnage à l'IA. Ce que dit l'autre partie arrive dans sa zone de chat comme vos répliques.",
        },
        {
          title: "Copilote de réunion",
          body: "Demandez des questions de suivi, des actions à mener ou une version en langage simple du jargon.",
        },
        {
          title: "Pratique des langues",
          body: "Un tuteur qui corrige, explique ou vous interroge sur l'audio que vous écoutez.",
        },
        {
          title: "Aide aux études",
          body: "Transformez un cours en fiches, en résumé ou en questions d'entraînement, au fil de l'eau.",
        },
        {
          title: "Commentaire en direct",
          body: "Annotez les affirmations d'un débat, d'un pitch ou d'une keynote pendant qu'il se déroule.",
        },
      ],
    },
    examplePrompt:
      "Tu es mon partenaire de conversation en espagnol. Tout ce que je t'envoie, c'est ce que quelqu'un vient de dire dans une vidéo en anglais. Réponds en espagnol simple, comme si tu lui répondais, puis donne-moi un mot à apprendre.",
    exampleCaption:
      "Un exemple de prompt. Collez le vôtre dans n'importe quel chat IA avant de lancer l'écoute.",
  },
  spec: {
    heading: "Gratuit pour toujours.",
    intro:
      "Pas de compteur qui tourne, pas de plafond sur ce que vous gardez. Enregistrez autant que vous voulez, aussi longtemps que vous voulez.",
    recording: {
      label: "Aucune limite d'enregistrement.",
      value:
        "Laissez-le tourner toute une journée de conférence. TypeTarget ne limite pas la durée d'une session.",
    },
    storage: {
      label: "Aucune limite de stockage.",
      value:
        "TypeTarget n'enregistre pas les transcriptions, donc rien ne se remplit. Chaque mot va directement dans le champ que vous avez choisi, et vous pouvez l'enregistrer dans un fichier .txt sur votre propre ordinateur. Pas de serveurs, pas de comptes, pas de journaux.",
    },
    account: {
      label: "Aucun compte requis.",
      value:
        "Gratuit et open source sous licence MIT. Pas d'essai, pas d'offre payante, pas de compte à créer. Les modèles de transcription hébergés dans le cloud fonctionnent avec votre propre compte Google ou Groq, et les deux proposent une offre gratuite.",
    },
    limitsNoteLink: "Voir la note sur les limites des fournisseurs",
    limitsNote:
      "* TypeTarget n'impose aucune limite. Les modèles hébergés (Gemini, Groq) appliquent leurs propres quotas gratuits, que Google et Groq fixent et peuvent modifier à tout moment. Whisper en local n'a pas de quota.",
  },
  faq: {
    heading: "Questions fréquentes.",
    microphone: {
      q: "Est-ce qu'il transcrit ma propre voix ?",
      a: "Non. TypeTarget entend ce que vous entendez, pas ce que vous dites. Il n'utilise pas votre micro.",
    },
    needKey: {
      q: "Ai-je besoin d'une clé API ?",
      a: "Pas pour commencer. Whisper en local ne demande aucune clé, mais ses performances dépendent de votre matériel. Une clé Gemini ou Groq, que ces fournisseurs donnent gratuitement, permet la transcription en direct sur n'importe quel appareil.",
    },
    getKey: {
      q: "Comment obtenir une clé API ?",
      gemini:
        "<b>Gemini.</b> Allez sur <link>aistudio.google.com/api-keys</link> et cliquez sur le bouton <code>Create API key</code> en haut à droite.",
      geminiSteps: [
        "Donnez n'importe quel nom à votre clé.",
        "Choisissez <code>Create new project</code> et donnez aussi n'importe quel nom au projet.",
        "Cliquez sur <code>Create key</code>.",
        "Copiez la clé obtenue et collez-la dans le champ de clé API de TypeTarget.",
      ],
      groq: "<b>Groq.</b> Allez sur <link>console.groq.com/keys</link> et cliquez sur le bouton <code>Create API Key</code>.",
      groqSteps: [
        "Donnez-lui le Display Name de votre choix.",
        "Copiez votre Secret Key et collez-la dans le champ de clé API Groq de TypeTarget.",
      ],
      aiStudioImage:
        "Le coin supérieur droit de la page des clés API de Google AI Studio, avec un lien « API quickstart », un bouton « Create API key » et, en dessous, un menu « Filter by All projects ».",
      groqImage:
        "Le bouton « Create API Key » de GroqCloud, avec un signe plus devant le libellé.",
    },
    slow: {
      q: "Pourquoi ma transcription est-elle lente ?",
      a: "Vous utilisez sans doute Whisper en local, qui tourne dans votre navigateur : sa vitesse dépend donc de votre matériel. Sur un appareil ancien ou moins puissant, il peut prendre du retard sur le son. Pour une transcription rapide en direct sur n'importe quel appareil, passez à une clé Gemini ou Groq gratuite.",
    },
    wrongLanguage: {
      q: "Il transcrit dans la mauvaise langue.",
      a: "Essayez un autre modèle sous <code>{model}</code> : les modèles plus grands distinguent mieux les langues. Si vous connaissez la langue parlée, choisissez-la sous <code>{spokenLanguage}</code> au lieu de laisser <code>{auto}</code>. Vous pouvez aussi augmenter <code>{chunkLength}</code>, ce qui donne au modèle plus de parole pour reconnaître la langue.",
    },
    audio: {
      q: "Où va mon son ?",
      a: "Avec Whisper en local, nulle part : il est transcrit dans votre navigateur. Avec Gemini ou Groq, il va uniquement chez ce fournisseur, avec votre propre clé. Il ne va jamais chez TypeTarget.",
    },
    languages: {
      q: "Quelles langues sont prises en charge ?",
      transcription:
        "<b>Transcription.</b> Les modèles Whisper d'OpenAI, en local ou sur Groq, prennent en charge <whisper>99 langues</whisper>. Gemini Transcribe a sa propre <gemini>liste de langues prises en charge</gemini>.",
      interface:
        "<b>Interface.</b> L'interface de TypeTarget est disponible en allemand, anglais, arabe, bengali, chinois (simplifié et traditionnel), espagnol, filipino, français, hindi, indonésien, italien, japonais, coréen, marathi, polonais, portugais (Brésil et Portugal), russe, tchèque, télougou, thaï, turc, ukrainien, ourdou et vietnamien, selon la langue de votre système et de votre navigateur.",
    },
    browsers: {
      q: "Dans quels navigateurs fonctionne-t-il ?",
      a: "Chrome 116 ou plus récent, installé depuis le Chrome Web Store. Les navigateurs basés sur Chromium comme Edge et Brave peuvent l'ajouter depuis la même fiche.",
    },
    unpacked: {
      q: "Puis-je le charger sans le Chrome Web Store ?",
      a: "Oui. <download>Téléchargez le zip</download> et extrayez-le pour obtenir un dossier nommé <code>typetarget</code>. Ouvrez <code>chrome://extensions</code> en le collant dans la barre d'adresse, car les pages web ne peuvent pas y renvoyer (dans Edge c'est <code>edge://extensions</code>, dans Brave <code>brave://extensions</code>). Activez le Mode développeur en haut à droite, cliquez sur <code>Charger l'extension non empaquetée</code> et sélectionnez le dossier extrait. Pour mettre à jour plus tard, téléchargez le nouveau zip, remplacez le dossier et cliquez sur la flèche d'actualisation de la carte de TypeTarget.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratuit et open source sous licence MIT ; <source>code source sur GitHub</source>. Transcription par Whisper (whisper.cpp, dans votre navigateur), Google Gemini ou Groq, avec votre propre clé. TypeTarget n'est pas affilié à Google ni à Groq. Pas de serveurs, pas de comptes, pas de statistiques, y compris sur cette page. <privacy>Politique de confidentialité</privacy>. <issues>Signaler un problème</issues>. <contact>Contact</contact>.",
  },
}
