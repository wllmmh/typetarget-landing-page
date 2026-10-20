import type { Messages } from "./en"

export const ptBR: Messages = {
  meta: {
    title: "TypeTarget: de voz para texto, em qualquer campo de texto",
    description:
      "Uma extensão de navegador gratuita e de código aberto que transcreve o áudio de qualquer guia e o digita, ao vivo, em qualquer campo de texto de qualquer guia. Anotações de reuniões, legendas e entrada ao vivo para qualquer chat de IA.",
  },
  header: {
    addTo: "Adicionar ao {browser}",
    language: "Idioma",
  },
  hero: {
    headline: "De voz para texto, digitado em qualquer lugar.",
    intro:
      "O TypeTarget é uma extensão de navegador gratuita que transcreve seu áudio diretamente no campo de texto que você indicar.",
    note: "Gratuito · Licença MIT · Chrome 116+",
    availableOn: "Disponível na",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Código-fonte do TypeTarget no GitHub",
    githubTitle: "Código-fonte no GitHub",
    howItWorks: "Como funciona",
  },
  steps: {
    carouselLabel: "Etapas de configuração",
    slideLabel: "{n} de {total}",
    step: "Etapa {n}",
    optional: "(opcional)",
    pause: "Pausar apresentação",
    play: "Reproduzir apresentação",
    mute: "Desativar o som do vídeo",
    unmute: "Ativar o som do vídeo",
    pickModel: {
      title: "Escolha um modelo e/ou um idioma.",
      body: "Escolha um modelo de IA que transcreve localmente no seu computador ou deixe um provedor na nuvem cuidar do processamento para você. Juntos, eles entendem mais de <languages>100 idiomas humanos</languages>.",
      animation:
        "A janela do TypeTarget. O ponteiro percorre a lista de modelos e escolhe Whisper Large v3 Q5, depois percorre a lista de idiomas falados e escolhe inglês.",
    },
    selectInput: {
      title: "Escolha uma entrada.",
      body: "Clique no botão <code>{startListening}</code> no painel do TypeTarget ou clique com o botão direito em qualquer página. Escolha <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Uma videochamada em uma guia do navegador. O ponteiro clica com o botão direito, abre o menu do TypeTarget e clica em {listenToTab}.",
    },
    chooseOutput: {
      title: "Escolha uma saída.",
      body: "Clique no botão <code>{startTyping}</code> no painel do TypeTarget ou clique com o botão direito no campo de texto de qualquer página da web e selecione <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        'A videochamada da etapa 2. O ponteiro clica com o botão direito, abre o menu do TypeTarget e clica em {typeToNewFile}. Uma caixa de texto com contorno verde e um cronômetro se abre na parte de baixo da página, e a fala transcrita é digitada nela. O ponteiro clica no botão "Abrir em nova guia" da caixa, e o texto continua sendo digitado em uma caixa de página inteira em uma nova guia.',
    },
  },
  chromeMenu: {
    back: "Voltar",
    forward: "Avançar",
    reload: "Recarregar",
    saveAs: "Salvar como…",
    print: "Imprimir…",
    cast: "Transmitir…",
    qrCode: "Criar QR code para esta página",
    translate: "Traduzir para français",
    viewSource: "Exibir código-fonte da página",
    blockElements: "Bloquear elementos",
    inspect: "Inspecionar",
    ctrl: "Ctrl",
    altLeft: "Alt+Seta para a esquerda",
    altRight: "Alt+Seta para a direita",
  },
  useCases: {
    heading: "Suas anotações são suas. Envie e salve onde quiser.",
    intro:
      "O TypeTarget não armazena suas anotações. Em vez disso, você diz onde quer que ele as escreva.",
    notes: {
      heading: "Anotações que você guarda",
      intro: "Use qualquer guia do navegador como fonte de áudio.",
      items: [
        {
          title: "Aulas e cursos",
          body: "Cada palavra de uma aula gravada ou ao vivo, direto nas suas anotações de estudo.",
        },
        {
          title: "Entrevistas e pesquisa com usuários",
          body: "Transcreva uma sessão gravada enquanto assiste de novo.",
        },
        {
          title: "Podcasts e redes sociais",
          body: "Salve a transcrição de um vídeo inteiro para notas do episódio, um rascunho de blog ou uma citação de que precisa.",
        },
        {
          title: "Anotações de chamadas no CRM",
          body: "Chamadas de vendas ou de suporte, digitadas direto no campo de anotações do registro.",
        },
      ],
    },
    captions: {
      heading: "Legendas",
      intro: "Leia o que uma guia está dizendo, enquanto ela diz.",
      items: [
        {
          title: "Legendas onde não existem",
          body: "Transmissões, players incorporados e gravações antigas que nunca tiveram legendas.",
        },
        {
          title: "Webinars e conferências ao vivo",
          body: "Fique com a transcrição inteira, não só com o slide que você fotografou.",
        },
        {
          title: "Anotações de reuniões",
          body: "Uma chamada na web em uma guia e a transcrição no seu documento ou app de notas na seguinte.",
        },
        {
          title:
            "Acessibilidade para pessoas surdas e com deficiência auditiva",
          body: "Uma versão em texto contínua de qualquer chamada ou vídeo, em uma caixa que você pode rolar para trás.",
        },
      ],
    },
    llm: {
      heading: "Em qualquer chat de IA",
      intro:
        "O TypeTarget pode digitar na caixa de prompt de qualquer interface web de LLM. Dê as instruções à IA, e cada mensagem que você enviar será tratada do jeito que você pediu.",
      items: [
        {
          title: "Roleplay ao vivo",
          body: "Dê um personagem à IA. O que o outro lado diz chega à caixa de chat dela como as suas falas.",
        },
        {
          title: "Copiloto de reuniões",
          body: "Peça perguntas de acompanhamento, itens de ação ou uma versão em linguagem simples do jargão.",
        },
        {
          title: "Prática de idiomas",
          body: "Um tutor que corrige, explica ou faz perguntas sobre o áudio que você está ouvindo.",
        },
        {
          title: "Apoio aos estudos",
          body: "Transforme uma aula em flashcards, um resumo ou perguntas de prática enquanto ela acontece.",
        },
        {
          title: "Comentário ao vivo",
          body: "Comente as afirmações de um debate, de um pitch ou de uma keynote enquanto ainda está rolando.",
        },
      ],
    },
    examplePrompt:
      "Você é meu parceiro de conversação em espanhol. Tudo o que eu envio é o que alguém acabou de dizer em um vídeo em inglês. Responda em espanhol simples, como se estivesse respondendo a essa pessoa, e depois me dê uma palavra para aprender.",
    exampleCaption:
      "Um exemplo de prompt. Cole o seu em qualquer chat de IA antes de começar a ouvir.",
  },
  spec: {
    heading: "Gratuito para sempre.",
    intro:
      "Nenhum medidor rodando, nenhum limite para o que você guarda. Grave o quanto quiser, pelo tempo que quiser.",
    recording: {
      label: "Sem limites de gravação.",
      value:
        "Deixe rodando durante uma conferência de um dia inteiro. O TypeTarget não limita quanto tempo uma sessão pode durar.",
    },
    storage: {
      label: "Sem limites de armazenamento.",
      value:
        "O TypeTarget não armazena transcrições, então não há nada para encher. Cada palavra vai direto para o campo que você escolheu, e você pode salvá-la como um arquivo .txt no seu próprio computador. Sem servidores, sem contas, sem registros.",
    },
    account: {
      label: "Sem necessidade de conta.",
      value:
        "Gratuito e de código aberto sob a licença MIT. Sem teste, sem plano pago, sem conta para criar. Os modelos de transcrição hospedados na nuvem rodam na sua própria conta do Google ou do Groq, e ambos oferecem um nível gratuito.",
    },
    limitsNoteLink: "Ver nota sobre os limites dos provedores",
    limitsNote:
      "* O TypeTarget não impõe nenhum limite próprio. Os modelos hospedados (Gemini, Groq) aplicam suas próprias cotas gratuitas, que o Google e o Groq definem e podem mudar a qualquer momento. O Whisper local não tem cota.",
  },
  faq: {
    heading: "Perguntas frequentes.",
    microphone: {
      q: "Ele transcreve a minha própria voz?",
      a: "Não. O TypeTarget ouve o que você ouve, não o que você fala. Ele não usa o seu microfone.",
    },
    needKey: {
      q: "Preciso de uma chave de API?",
      a: "Não para começar. O Whisper local não precisa de chave, mas o desempenho depende do seu hardware. Uma chave do Gemini ou do Groq, que você consegue de graça com esses provedores, oferece transcrição ao vivo em qualquer máquina.",
    },
    getKey: {
      q: "Como consigo uma chave de API?",
      gemini:
        "<b>Gemini.</b> Acesse <link>aistudio.google.com/api-keys</link> e clique no botão <code>Create API key</code> no canto superior direito.",
      geminiSteps: [
        "Dê qualquer nome à sua chave.",
        "Escolha <code>Create new project</code> e dê qualquer nome ao projeto também.",
        "Clique em <code>Create key</code>.",
        "Copie a chave gerada e cole no campo de chave de API do TypeTarget.",
      ],
      groq: "<b>Groq.</b> Acesse <link>console.groq.com/keys</link> e clique no botão <code>Create API Key</code>.",
      groqSteps: [
        "Dê a ela o Display Name que quiser.",
        "Copie sua Secret Key e cole no campo de chave de API do Groq no TypeTarget.",
      ],
      aiStudioImage:
        'O canto superior direito da página de chaves de API do Google AI Studio, com um link "API quickstart", um botão "Create API key" e, abaixo deles, um menu suspenso "Filter by All projects".',
      groqImage:
        'O botão "Create API Key" do GroqCloud, com um sinal de mais antes do texto.',
    },
    slow: {
      q: "Por que minha transcrição está lenta?",
      a: "Você provavelmente está usando o Whisper local, que roda dentro do navegador, então a velocidade depende do seu hardware. Em uma máquina mais antiga ou menos potente, ele pode ficar para trás em relação ao áudio. Para transcrição rápida e ao vivo em qualquer máquina, mude para uma chave gratuita do Gemini ou do Groq.",
    },
    wrongLanguage: {
      q: "Por que está transcrevendo no idioma errado?",
      a: "Experimente outro modelo em <code>{model}</code>: modelos maiores distinguem melhor os idiomas. Se você sabe qual idioma está sendo falado, escolha-o em <code>{spokenLanguage}</code> em vez de deixar em <code>{auto}</code>. Você também pode aumentar a <code>{chunkLength}</code>, o que dá ao modelo mais fala para reconhecer o idioma.",
    },
    audio: {
      q: "Para onde vai o meu áudio?",
      a: "Com o Whisper local, para lugar nenhum: ele é transcrito dentro do seu navegador. Com o Gemini ou o Groq, vai só para esse provedor, usando a sua própria chave. Nunca vai para o TypeTarget.",
    },
    languages: {
      q: "Quais idiomas são compatíveis?",
      transcription:
        "<b>Transcrição.</b> Os modelos Whisper da OpenAI, locais ou no Groq, são compatíveis com <whisper>99 idiomas</whisper>. O Gemini Transcribe tem sua própria <gemini>lista de idiomas compatíveis</gemini>.",
      interface:
        "<b>Interface.</b> A interface do TypeTarget está disponível em alemão, árabe, bengali, chinês (simplificado e tradicional), coreano, espanhol, filipino, francês, híndi, indonésio, inglês, italiano, japonês, marati, polonês, português (Brasil e Portugal), russo, tailandês, tcheco, télugo, turco, ucraniano, urdu e vietnamita, de acordo com o idioma do seu sistema e do seu navegador.",
    },
    browsers: {
      q: "Em quais navegadores ele funciona?",
      a: "Chrome 116 ou mais recente, instalado pela Chrome Web Store. Navegadores baseados em Chromium, como Edge e Brave, podem adicioná-lo pela mesma página.",
    },
    unpacked: {
      q: "Posso carregá-lo sem a Chrome Web Store?",
      a: "Sim. <download>Baixe o zip</download> e extraia para obter uma pasta chamada <code>typetarget</code>. Abra <code>chrome://extensions</code> colando o endereço na barra de endereços, já que páginas da web não podem criar links para ele (no Edge é <code>edge://extensions</code>, no Brave <code>brave://extensions</code>). Ative o Modo do desenvolvedor no canto superior direito, clique em <code>Carregar sem compactação</code> e selecione a pasta extraída. Para atualizar depois, baixe o novo zip, substitua a pasta e clique na seta de recarregar no cartão do TypeTarget.",
    },
    contact: {
      q: "Como entro em contato com o TypeTarget?",
      a: "Envie uma mensagem por <contact>este formulário</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratuito e de código aberto sob a licença MIT; <source>código-fonte no GitHub</source>. Transcrição pelo Whisper (whisper.cpp, no seu navegador), Google Gemini ou Groq, com a sua própria chave. O TypeTarget não é afiliado ao Google nem ao Groq. Sem servidores, sem contas, sem análises, e isso inclui esta página. <privacy>Política de privacidade</privacy>. <issues>Informar um problema</issues>. <contact>Contato</contact>.",
  },
}
