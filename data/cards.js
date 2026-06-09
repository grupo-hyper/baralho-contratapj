// Banco de perguntas sobre gestão de PJ — CONARH 2026
// Cada lead recebe 8 questões sorteadas aleatoriamente deste banco.
const CARDS = [
  {
    id: 1,
    question: "Qual o principal risco para uma empresa que contrata um profissional PJ irregularmente?",
    options: [
      "Aumento da carga tributária para o PJ",
      "Reconhecimento de vínculo empregatício e condenação ao pagamento de verbas trabalhistas",
      "Perda de credibilidade no mercado",
      "Necessidade de oferecer plano de saúde ao PJ"
    ],
    correctIndex: 1,
    explanation: "A contratação irregular pode ser reconhecida como vínculo de emprego na Justiça, gerando condenação ao pagamento de todas as verbas trabalhistas."
  },
  {
    id: 2,
    question: "Quais são os 4 elementos que caracterizam o vínculo empregatício (CLT)?",
    options: [
      "Flexibilidade, autonomia, pagamento por projeto e nota fiscal",
      "Pessoalidade, onerosidade, habitualidade e subordinação",
      "Exclusividade, horário fixo, uniforme e reuniões",
      "Local fixo, uso de equipamentos da empresa, metas e prazos"
    ],
    correctIndex: 1,
    explanation: "Pessoalidade, onerosidade, habitualidade e subordinação são os quatro pilares do vínculo de emprego previstos na CLT."
  },
  {
    id: 3,
    question: "O que significa o \"Princípio da Primazia da Realidade\"?",
    options: [
      "O contrato escrito sempre vale mais que a prática",
      "A realidade dos fatos vale mais do que o que está escrito no papel",
      "A empresa decide como quer contratar",
      "O PJ define suas próprias condições de trabalho"
    ],
    correctIndex: 1,
    explanation: "No Direito do Trabalho, o que acontece no dia a dia prevalece sobre o que está no contrato. Se a prática é de emprego, o papel não protege."
  },
  {
    id: 4,
    question: "Qual a consequência financeira se o vínculo CLT for reconhecido pelo juiz?",
    options: [
      "Apenas uma multa simbólica",
      "Pagamento retroativo de FGTS, férias, 13º, horas extras e multas",
      "Apenas registrar a carteira daqui para frente",
      "Aumento do valor da nota fiscal do PJ"
    ],
    correctIndex: 1,
    explanation: "Reconhecido o vínculo, a empresa paga retroativamente FGTS, férias, 13º, horas extras e multas — um passivo que pode ser altíssimo."
  },
  {
    id: 5,
    question: "A Reforma Trabalhista de 2017 liberou a \"pejotização\" de qualquer forma?",
    options: [
      "Sim, em qualquer situação",
      "Não, ela continua sendo fraude se mascarar um funcionário real",
      "Tornou a contratação PJ obrigatória",
      "Só mudou as regras para quem trabalha em casa"
    ],
    correctIndex: 1,
    explanation: "A Reforma ampliou formas de contratação, mas a pejotização que mascara um empregado real continua sendo fraude e gera vínculo."
  },
  {
    id: 6,
    question: "Quando a contratação PJ é considerada segura e legal?",
    options: [
      "Quando o PJ bate ponto e recebe ordens",
      "Quando há autonomia real, sem subordinação e com liberdade de execução",
      "Quando o PJ usa o computador da empresa",
      "Quando o contrato exige exclusividade total"
    ],
    correctIndex: 1,
    explanation: "A PJ é segura quando existe autonomia real: sem subordinação, com liberdade na forma de executar o serviço."
  },
  {
    id: 7,
    question: "O que é a \"subordinação estrutural\"?",
    options: [
      "Receber ordens diretas de um chefe",
      "Estar inserido na rotina da empresa (e-mail, reuniões, metas) como se fosse funcionário",
      "Seguir as regras do próprio CNPJ",
      "Trabalhar para o cliente da empresa"
    ],
    correctIndex: 1,
    explanation: "Mesmo sem ordens diretas, estar integrado à rotina da empresa (e-mails, reuniões, metas) caracteriza subordinação estrutural."
  },
  {
    id: 8,
    question: "Além de pagar o funcionário, que outra punição a empresa pode sofrer?",
    options: [
      "Nenhuma além do pagamento",
      "Multas do Ministério do Trabalho e autuações da Receita Federal",
      "Perda de todos os seus clientes",
      "Proibição de abrir novas empresas"
    ],
    correctIndex: 1,
    explanation: "Além das verbas trabalhistas, a empresa pode sofrer multas do Ministério do Trabalho e autuações da Receita Federal."
  },
  {
    id: 9,
    question: "Por que só contrato escrito, sem a emissão da NF, não é garantia de segurança total?",
    options: [
      "Porque contratos não valem nada no Brasil",
      "Porque se o dia a dia mostrar subordinação, o juiz anula o contrato",
      "Porque o contrato de PJ é ilegal por natureza",
      "Porque o PJ pode desistir do contrato a qualquer hora"
    ],
    correctIndex: 1,
    explanation: "Pelo princípio da primazia da realidade, se a prática mostrar subordinação, o juiz desconsidera o contrato e reconhece o vínculo."
  },
  {
    id: 10,
    question: "Exclusividade configura vínculo empregatício?",
    options: [
      "Nunca, o PJ pode ser exclusivo se quiser",
      "É um forte indício de dependência e ajuda a caracterizar o vínculo CLT",
      "Só se a empresa for muito grande",
      "Só se o PJ ganhar pouco"
    ],
    correctIndex: 1,
    explanation: "A exclusividade indica dependência econômica e, somada a outros fatores, ajuda a caracterizar o vínculo de emprego."
  },
  {
    id: 11,
    question: "Qual destes elementos pode indicar vínculo empregatício em uma contratação PJ?",
    options: [
      "Emissão de nota fiscal",
      "Prestação de serviços para vários clientes",
      "Subordinação ao contratante",
      "Possuir CNPJ ativo"
    ],
    correctIndex: 2,
    explanation: "A subordinação ao contratante é um dos indícios mais fortes de vínculo. Emitir NF, ter CNPJ e atender vários clientes apontam o contrário."
  },
  {
    id: 12,
    question: "Se houver reconhecimento de vínculo empregatício, a empresa poderá ser obrigada a pagar:",
    options: [
      "Apenas o INSS patronal",
      "Somente férias",
      "Verbas trabalhistas retroativas",
      "Apenas multa administrativa"
    ],
    correctIndex: 2,
    explanation: "O reconhecimento do vínculo obriga ao pagamento de todas as verbas trabalhistas retroativas do período."
  },
  {
    id: 13,
    question: "A exclusividade na prestação de serviços pode ser um indício de:",
    options: [
      "Franquia empresarial",
      "Vínculo empregatício",
      "Sociedade anônima",
      "Planejamento tributário"
    ],
    correctIndex: 1,
    explanation: "Prestar serviço com exclusividade a um só contratante é um indício de dependência e de vínculo empregatício."
  },
  {
    id: 14,
    question: "Qual dos fatores abaixo reduz o risco de caracterização de vínculo empregatício?",
    options: [
      "Controle rígido de jornada",
      "Subordinação direta",
      "Autonomia do prestador",
      "Exclusividade contratual"
    ],
    correctIndex: 2,
    explanation: "A autonomia do prestador é o que diferencia a verdadeira PJ do emprego. Controle de jornada, subordinação e exclusividade aumentam o risco."
  },
  {
    id: 15,
    question: "Qual destes encargos pode ser cobrado da empresa após o reconhecimento do vínculo?",
    options: [
      "FGTS",
      "IPTU",
      "ICMS",
      "ISSQN"
    ],
    correctIndex: 0,
    explanation: "O FGTS é um encargo trabalhista devido na relação de emprego. IPTU, ICMS e ISSQN são tributos que não decorrem do vínculo."
  },
  {
    id: 16,
    question: "O controle obrigatório de horário do profissional PJ pode ser interpretado como:",
    options: [
      "Autonomia empresarial",
      "Gestão de projetos",
      "Indício de relação de emprego",
      "Benefício contratual"
    ],
    correctIndex: 2,
    explanation: "Exigir cumprimento de horário é controle de jornada — um indício clássico de subordinação e de relação de emprego."
  },
  {
    id: 17,
    question: "Qual princípio é analisado pela Justiça do Trabalho para verificar a realidade da relação entre as partes?",
    options: [
      "Princípio da Competitividade",
      "Princípio da Primazia da Realidade",
      "Princípio da Livre Iniciativa",
      "Princípio da Publicidade"
    ],
    correctIndex: 1,
    explanation: "Pelo Princípio da Primazia da Realidade, a Justiça avalia o que realmente acontece na relação, não apenas o que está escrito."
  },
  {
    id: 18,
    question: "Além de verbas trabalhistas, a empresa pode sofrer:",
    options: [
      "Apenas advertência verbal",
      "Fiscalizações e autuações fiscais",
      "Suspensão do CNPJ automática",
      "Cancelamento do contrato social"
    ],
    correctIndex: 1,
    explanation: "A irregularidade atrai fiscalizações e autuações fiscais, somando passivo tributário ao trabalhista."
  },
  {
    id: 19,
    question: "O pagamento mensal fixo, isoladamente, caracteriza vínculo empregatício?",
    options: [
      "Sim, sempre",
      "Não, deve ser analisado junto a outros fatores",
      "Apenas para empresas do Simples Nacional",
      "Apenas quando supera 50 mil reais"
    ],
    correctIndex: 1,
    explanation: "O pagamento mensal sozinho não define vínculo — ele é avaliado em conjunto com subordinação, pessoalidade e habitualidade."
  },
  {
    id: 20,
    question: "Qual pode ser uma consequência financeira significativa da pejotização irregular?",
    options: [
      "Restituição automática de tributos",
      "Economia permanente de encargos",
      "Passivo trabalhista elevado",
      "Redução das obrigações acessórias"
    ],
    correctIndex: 2,
    explanation: "A pejotização irregular pode gerar um passivo trabalhista elevado, anulando qualquer economia aparente de encargos."
  },
  {
    id: 21,
    question: "Qual é a melhor prática para reduzir riscos em contratações PJ?",
    options: [
      "Exigir exclusividade e jornada fixa",
      "Tratar o PJ como empregado comum",
      "Garantir autonomia e contrato compatível com a realidade da prestação de serviços",
      "Proibir a emissão de notas fiscais"
    ],
    correctIndex: 2,
    explanation: "A melhor prática é garantir autonomia real e um contrato que reflita a realidade da prestação de serviços."
  },
  {
    id: 22,
    question: "Qual combinação abaixo representa os principais requisitos que podem caracterizar vínculo empregatício?",
    options: [
      "Capital social, faturamento e lucro",
      "Nota fiscal, contrato social e CNPJ",
      "Pessoalidade, habitualidade, onerosidade e subordinação",
      "Inscrição estadual, municipal e federal"
    ],
    correctIndex: 2,
    explanation: "Pessoalidade, habitualidade, onerosidade e subordinação são os requisitos que, juntos, caracterizam o vínculo de emprego."
  },
  {
    id: 23,
    question: "Um PJ que recebe ordens diretas constantes e não possui autonomia pode gerar qual risco?",
    options: [
      "Risco ambiental",
      "Reconhecimento de vínculo",
      "Quebra de patente",
      "Falência automática"
    ],
    correctIndex: 1,
    explanation: "Ordens diretas constantes e ausência de autonomia revelam subordinação — o que leva ao reconhecimento de vínculo."
  },
  {
    id: 24,
    question: "Qual destes NÃO é um indício forte de vínculo CLT?",
    options: [
      "Pessoalidade",
      "Habitualidade",
      "Subordinação",
      "Prestação para diversos clientes"
    ],
    correctIndex: 3,
    explanation: "Atender diversos clientes demonstra autonomia e independência — o oposto de um indício de vínculo. Os outros três são pilares do emprego."
  },
  {
    id: 25,
    question: "Qual cuidado ajuda a reduzir riscos ao contratar PJ?",
    options: [
      "Exigir presença diária obrigatória",
      "Impedir atendimento a outros clientes",
      "Garantir autonomia na execução",
      "Aplicar regras idênticas às da CLT"
    ],
    correctIndex: 2,
    explanation: "Garantir autonomia na execução do serviço é o cuidado que mais reduz o risco de descaracterização da PJ."
  },
  {
    id: 26,
    question: "Qual característica diferencia um verdadeiro prestador PJ?",
    options: [
      "Dependência total da empresa",
      "Autonomia técnica e operacional",
      "Controle rígido de ponto",
      "Exclusividade obrigatória"
    ],
    correctIndex: 1,
    explanation: "A autonomia técnica e operacional é a marca do verdadeiro prestador PJ; o restante aponta para relação de emprego."
  },
  {
    id: 27,
    question: "O contrato PJ elimina automaticamente o risco trabalhista?",
    options: [
      "Sim, sempre",
      "Não, depende da prática real da relação",
      "Apenas em empresas pequenas",
      "Apenas com nota fiscal"
    ],
    correctIndex: 1,
    explanation: "O contrato sozinho não elimina o risco: o que vale é a prática real da relação (primazia da realidade)."
  }
];

// Quantas questões cada lead responde (sorteadas do banco acima)
const QUIZ_SIZE = 8;

// Embaralha (Fisher-Yates) e devolve as primeiras QUIZ_SIZE questões
function pickQuiz() {
  const pool = CARDS.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(QUIZ_SIZE, pool.length));
}
