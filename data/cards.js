// 8 questões sobre gestão de PJ — CONARH 2026
// REVISAR o conteúdo jurídico com o time antes do evento.
const CARDS = [
  {
    id: 1,
    question: "Quando a empresa pede para o profissional abrir CNPJ, quem assume a responsabilidade legal pelo CNPJ?",
    options: [
      "A empresa contratante",
      "O profissional PJ",
      "Ambos, depende do contrato",
      "A Receita Federal"
    ],
    correctIndex: 1,
    explanation: "O CNPJ pertence ao profissional. A empresa pede, mas quem responde legalmente é o dono do CNPJ — inclusive por dívidas fiscais."
  },
  {
    id: 2,
    question: "Um PJ com horário fixo, subordinação e exclusividade para uma só empresa gera qual risco para a contratante?",
    options: [
      "Nenhum — é um contrato 100% válido",
      "Reconhecimento de vínculo empregatício na Justiça",
      "Apenas uma multa da Receita",
      "Perda do CNPJ do profissional"
    ],
    correctIndex: 1,
    explanation: "Subordinação, habitualidade e pessoalidade são indícios de vínculo. A Justiça do Trabalho pode reconhecer o vínculo e gerar um passivo trabalhista pesado."
  },
  {
    id: 3,
    question: "Quem é responsável por emitir a nota fiscal na contratação PJ?",
    options: [
      "A empresa contratante",
      "O profissional PJ",
      "O contador da contratante",
      "Não há emissão de nota"
    ],
    correctIndex: 1,
    explanation: "O prestador PJ emite a nota fiscal dos serviços. A contratante apenas paga e arquiva o documento."
  },
  {
    id: 4,
    question: "O que um bom contrato PJ deve deixar claro acima de tudo?",
    options: [
      "O horário de almoço do profissional",
      "Escopo, entregáveis e ausência de subordinação",
      "As metas pessoais do prestador",
      "Nada — contrato verbal já basta"
    ],
    correctIndex: 1,
    explanation: "O contrato deve reforçar a natureza autônoma da relação — escopo, prazos e independência — reduzindo o risco de reconhecimento de vínculo."
  },
  {
    id: 5,
    question: "Na relação PJ legítima, a contratante deve pagar férias, 13º e FGTS ao profissional?",
    options: [
      "Sim, sempre",
      "Não — essas verbas são da relação CLT",
      "Só o 13º salário",
      "Só o FGTS"
    ],
    correctIndex: 1,
    explanation: "Na relação PJ não há verbas trabalhistas. Se a empresa paga esses direitos, isso vira indício de vínculo empregatício."
  },
  {
    id: 6,
    question: "Para encerrar um contrato PJ, a empresa precisa:",
    options: [
      "Pagar aviso prévio e multa de 40% do FGTS",
      "Seguir as cláusulas de rescisão previstas no contrato",
      "Homologar a saída no sindicato",
      "Dar baixa no CNPJ do prestador"
    ],
    correctIndex: 1,
    explanation: "A rescisão segue o contrato civil — em geral um aviso prévio contratual, sem verbas rescisórias trabalhistas."
  },
  {
    id: 7,
    question: "Quem recolhe os tributos do profissional PJ (ex: Simples Nacional)?",
    options: [
      "A empresa contratante",
      "O próprio PJ, através do seu CNPJ",
      "A Receita Federal, automaticamente",
      "O contador da contratante"
    ],
    correctIndex: 1,
    explanation: "O PJ é responsável pelos próprios tributos e obrigações acessórias do seu CNPJ."
  },
  {
    id: 8,
    question: "Ao gerenciar dezenas de PJs, qual é o maior desafio de compliance?",
    options: [
      "Escolher o modelo do crachá",
      "Controlar contratos, notas e renovações sem uma central única",
      "Definir o horário do café",
      "Nenhum — é igual a gerir CLT"
    ],
    correctIndex: 1,
    explanation: "Sem uma plataforma central, contratos, notas fiscais e renovações se perdem — gerando risco fiscal e trabalhista. É exatamente aí que a Contrata PJ entra."
  }
];
