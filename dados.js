/* Levantamento de custos da Códice e projeção de escala, para definir a participação da 75 LAB e da NEOBAND.
   Fonte única do deck (index.html) e do anexo (detalhes.html). Valores em reais.
   Compras: valor efetivamente pago no pedido (com frete, impostos e descontos), lido no histórico de pedidos
   da Shopee e do AliExpress em 23/10/2026. Nenhum dado pessoal entra aqui. */
window.CUSTOS = {
  atualizadoEm: "23/10/2026",
  periodo: { inicio: "10/09/2026", fim: "23/10/2026" },

  compras: [
    // módulo smart: cat "modulo" = vai no display; "pd" = teste, protótipo e alternativa avaliada
    { data: "2026-09-10", canal: "Shopee", item: "Placa ESP32 Wi-Fi e Bluetooth, 30 pinos soldados", qtd: 1, valor: 39.99, cat: "modulo", uso: "Cérebro do módulo smart do display" },
    { data: "2026-09-10", canal: "Shopee", item: "Sensor ultrassônico HC-SR04", qtd: 1, valor: 19.99, cat: "modulo", uso: "Contagem de abordagem (distância < 120 cm)" },
    { data: "2026-09-10", canal: "Shopee", item: "Sensor de umidade e temperatura DHT11", qtd: 1, valor: 20.99, cat: "modulo", uso: "Clima no ponto de venda" },
    { data: "2026-09-13", canal: "AliExpress", item: "Radar de presença Hi-Link HLK-LD2410C (24 GHz)", qtd: 1, valor: 21.84, cat: "pd", uso: "Presença humana parada na frente do display" },
    { data: "2026-09-13", canal: "AliExpress", item: "Radar de presença Hi-Link HLK-LD2410C (2º lote)", qtd: 1, valor: 23.31, cat: "pd", uso: "Segunda unidade para teste comparativo" },
    { data: "2026-09-13", canal: "AliExpress", item: "Sensores BME280 (temperatura, umidade e pressão)", qtd: 1, valor: 44.15, cat: "pd", uso: "Alternativa mais precisa ao DHT11" },
    { data: "2026-09-13", canal: "AliExpress", item: "Acelerômetro MPU-6500 (I2C/SPI)", qtd: 1, valor: 14.49, cat: "pd", uso: "Detecção de pancada, tombo e arrasto do display" },
    { data: "2026-09-13", canal: "AliExpress", item: "Módulos HX711 de pesagem (5 peças)", qtd: 5, valor: 24.16, cat: "pd", uso: "Leitura de peso (ruptura de gôndola), teste" },
    { data: "2026-09-13", canal: "AliExpress", item: "Célula de carga 50 kg (meia ponte)", qtd: 1, valor: 29.92, cat: "pd", uso: "Teste de balança sob o display" },
    { data: "2026-09-10", canal: "Shopee", item: "Raspberry Pi Pico W (Wi-Fi e Bluetooth)", qtd: 1, valor: 74.00, cat: "pd", uso: "Microcontrolador alternativo avaliado" },
    { data: "2026-09-13", canal: "Shopee", item: "Placa adaptadora shield ESP32 com bornes", qtd: 1, valor: 39.98, cat: "pd", uso: "Montagem sem solda no protótipo" },
    { data: "2026-09-13", canal: "AliExpress", item: "Protoboard MB-102 com kit de jumpers (65 peças)", qtd: 1, valor: 49.92, cat: "pd", uso: "Prototipagem dos circuitos" },
    { data: "2026-09-13", canal: "Shopee", item: "Kit jumper 20 cm, 60 peças (macho e fêmea)", qtd: 1, valor: 20.00, cat: "modulo", uso: "Ligações dos sensores" },
    { data: "2026-09-13", canal: "Shopee", item: "Kit de resistores CR25 1/4 W (560R a 6K8)", qtd: 1, valor: 24.00, cat: "modulo", uso: "Divisor de tensão 1k/2k do ECHO" },
    { data: "2026-09-20", canal: "Shopee", item: "Caixa plástica vedada com parafuso (tipo CFTV)", qtd: 1, valor: 17.29, cat: "modulo", uso: "Invólucro do módulo, teste" },
    { data: "2026-09-20", canal: "Shopee", item: "Kit com 4 caixas vedadas de passagem", qtd: 4, valor: 30.04, cat: "modulo", uso: "Invólucros dos módulos" },
    { data: "2026-09-20", canal: "Shopee", item: "Caixa retangular com tampa 20 x 12 x 8 cm", qtd: 1, valor: 28.30, cat: "pd", uso: "Invólucro maior, teste" },
    // bancada e ferramentas (investimento reaproveitável)
    { data: "2026-09-13", canal: "Shopee", item: "Mini ferro de solda USB sem fio com display", qtd: 1, valor: 80.08, cat: "bancada", uso: "Solda dos módulos" },
    { data: "2026-09-16", canal: "Shopee", item: "Fio de estanho 1 mm com fluxo (4 rolos)", qtd: 4, valor: 37.47, cat: "bancada", uso: "Solda" },
    { data: "2026-09-13", canal: "Shopee", item: "Pasta de solda (fluxo) Soldatec 50 g", qtd: 1, valor: 14.98, cat: "bancada", uso: "Solda" },
    { data: "2026-09-13", canal: "AliExpress", item: "Pasta de solda sem chumbo SN99 (alta temperatura)", qtd: 1, valor: 46.49, cat: "bancada", uso: "Solda de SMD e conectores" },
    { data: "2026-09-16", canal: "Shopee", item: "Sugador de solda com 3 bicos", qtd: 1, valor: 17.13, cat: "bancada", uso: "Retrabalho" },
    { data: "2026-09-13", canal: "Shopee", item: "Esponja metálica para ponta do ferro", qtd: 1, valor: 14.37, cat: "bancada", uso: "Limpeza do ferro" },
    { data: "2026-09-13", canal: "Shopee", item: "Lupa de bancada 5x com 2 LEDs e garras", qtd: 1, valor: 52.90, cat: "bancada", uso: "Montagem fina" },
    { data: "2026-09-13", canal: "Shopee", item: "Manta antiestática magnética 350 x 250 mm", qtd: 1, valor: 29.90, cat: "bancada", uso: "Proteção dos componentes" },
    { data: "2026-09-20", canal: "Shopee", item: "Mini retífica multifuncional 57 em 1", qtd: 1, valor: 129.49, cat: "bancada", uso: "Recorte e furação dos invólucros" },
    { data: "2026-09-13", canal: "AliExpress", item: "Soprador térmico 220/110 V", qtd: 1, valor: 53.52, cat: "bancada", uso: "Termorretrátil e retrabalho" },
  ],

  // peças de 1 módulo smart, pelo kit de fábrica (firmware 2.1.1): ESP32 + HC-SR04 + DHT11 numa caixa vedada
  bom: [
    { item: "Placa ESP32 30 pinos (Wi-Fi e Bluetooth)", valor: 39.99, base: "pedido de 10/09" },
    { item: "Sensor ultrassônico HC-SR04 (abordagem)", valor: 19.99, base: "pedido de 10/09" },
    { item: "Sensor DHT11 (temperatura e umidade)", valor: 20.99, base: "pedido de 10/09" },
    { item: "Caixa vedada (1 do kit de 4)", valor: 7.51, base: "R$ 30,04 ÷ 4" },
    { item: "Jumpers (6 de 60)", valor: 2.00, base: "R$ 20,00 ÷ 60 × 6" },
    { item: "Resistores do divisor 1k e 2k", valor: 0.10, base: "2 peças de um kit de R$ 24,00 (estimativa)" },
  ],
  bomOpcionais: [{ item: "Acelerômetro (pancada e arrasto)", valor: 14.49, base: "MPU-6500 do AliExpress" }],
  bomPendentes: ["Fonte USB 5 V e cabo: não aparecem nos pedidos (provavelmente reaproveitados)"],

  // sistema: custo real lido nos painéis em 23/10/2026
  sistema: [
    { item: "Google Cloud / Firebase (banco, funções, site, agendador, cofre de chaves)", set: 0.02, out: 2.53, mensal: 2.84,
      fonte: "Console de faturamento, conta 0126F1-41244F-F1CF4B (set: R$ 0,02; out até 23: R$ 2,53; previsão de out: R$ 2,84). Funções usaram R$ 3,60, cobertos pela cota grátis. O agendador (R$ 1,61) caiu para 2 jobs grátis em 10/10." },
    { item: "Hostinger Business Web Hosting (rateio: 1 de 13 sites)", set: 5.61, out: 5.61, mensal: 5.61,
      fonte: "Plano de R$ 72,99/mês (histórico de pagamentos), hospeda 13 sites; a Códice é um deles." },
    { item: "GitHub (repositórios e publicação automática)", set: 0, out: 0, mensal: 0, fonte: "Plano grátis." },
    { item: "Google Maps Platform (mapas e Street View)", set: 0, out: 0, mensal: 0, fonte: "Sem cobrança: dentro da cota grátis mensal do Google." },
    { item: "Avisos no celular (ntfy) e OpenStreetMap", set: 0, out: 0, mensal: 0, fonte: "Serviços públicos grátis, sem conta e sem chave." },
  ],

  // ferramenta de desenvolvimento: Claude (plano Max), rateado pelas horas de sessão no período
  claude: {
    pagoNoPeriodo: 1498.35, horasCodice: 51.1, horasTodas: 311.4,
    fonte: "Pagamentos no período: 17/09 R$ 550,00 (Max 5x) e 09/10 R$ 948,35 (Max 20x). Parcela da Códice = 51,1 h de 311,4 h de sessões entre 10/09 e 23/10.",
  },

  // mão de obra já feita
  maoDeObra: {
    valorHora: 150,
    valorHoraFonte: "Meio da faixa de desenvolvedor full stack pleno (R$ 120 a R$ 200/h).",
    medidas: { horas: 51.1, dias: 20, fonte: "Tempo ativo das sessões de trabalho em que os comandos mexeram no projeto (blocos com pausas de até 20 min), 10/09 a 23/10." },
    campo: [{ item: "Montagem, solda e testes do módulo ESP32 (protótipo e kit de fábrica)", horas: 12, base: "estimativa" }],
    porDia: { "2026-09-10": 2.9, "2026-09-11": 1.5, "2026-09-13": 5.1, "2026-09-14": 7.4, "2026-09-15": 4.9, "2026-09-16": 1.0, "2026-09-17": 1.6, "2026-09-18": 4.7, "2026-09-21": 2.0, "2026-09-22": 1.0, "2026-09-23": 1.3, "2026-09-24": 2.5, "2026-09-27": 10.4, "2026-09-28": 0.9, "2026-10-01": 0.6, "2026-10-02": 0.1, "2026-10-05": 0.7, "2026-10-06": 0.4, "2026-10-09": 0.2, "2026-10-10": 1.9 },
  },

  entrega: { commits: 246, telas: 48, funcoes: 49, linhas: 51758 },

  // equivalente de mercado: o mesmo escopo feito por uma equipe tradicional, sem IA
  mercado: {
    fonteHora: [
      { nome: "GeraContratos: tabela de serviços profissionais (full stack pleno R$ 120 a 200/h, sênior R$ 200 a 400/h)", url: "https://geracontratos.com.br/recursos/tabela-valores-servicos-profissionais" },
      { nome: "Monitor do Mercado: quanto um programador freelancer cobra por hora em 2026 (pleno R$ 130 a 200/h, sênior R$ 220 a 300/h)", url: "https://monitordomercado.com.br/noticias/399275-quanto-um-programador-freelancer-cobra-por-hora-no-brasil-em-2026-e-o-que-define-o-nivel-junior-pleno-e-senior/" },
    ],
    modulos: [
      { nome: "Plataforma web", detalhe: "48 telas: painel, frota, mapa, PDV, mídia e cotas, comercial, operação, administração, demonstração", horas: 1150, valor: 150 },
      { nome: "Backend e automações", detalhe: "49 funções, regras de acesso, ingestão dos módulos, relógios, alertas, avisos no celular, relatórios", horas: 620, valor: 150 },
      { nome: "Firmware ESP32 e kit de fábrica", detalhe: "Sensores, Bluetooth, atualização pela internet, portal de Wi-Fi, fila offline, gravação e cadastro em escala", horas: 320, valor: 250 },
      { nome: "Design de produto e interface", detalhe: "Marca Códice, conceitos, telas, versão celular", horas: 160, valor: 150 },
      { nome: "Testes, implantação e documentação", detalhe: "15% do desenvolvimento", horas: 314, valor: 150 },
      { nome: "Gestão do projeto", detalhe: "10% do desenvolvimento", horas: 209, valor: 150 },
    ],
    conferencia: "Conferência por tamanho: 51.758 linhas entregues a 20 linhas por hora = 2.588 h, na mesma ordem das 2.773 h por módulo.",
    equipe: 5, horasMes: 140,
  },

  // quem põe o quê (premissa a validar com a NEOBAND)
  divisao: {
    lab: ["Plataforma Códice: software, nuvem, dados e relatórios", "Módulo smart: peças, montagem, firmware e kit de fábrica", "Suporte técnico da plataforma (lojas, redes e módulos)", "Manutenção e evolução do sistema", "Gestão da Códice: operação, faturamento e cobrança"],
    neoband: ["Produção dos displays (chassi e comunicação)", "Logística e instalação nas lojas", "Manutenção física dos displays", "Fábrica: 40+ anos, FSC, Fornecedor do Ano 2025"],
  },

  // pacotes vendidos pela Códice (por display por mês) e mistura usada na projeção
  pacotes: [
    { nome: "Essencial", preco: 499, mix: 0.5, smart: false, inclui: "QR patrimonial e do shopper, prova de instalação" },
    { nome: "Sense", preco: 849, mix: 0.4, smart: true, inclui: "Essencial + módulo smart: proximidade, alertas de conexão, painel" },
    { nome: "Media", preco: 1290, mix: 0.1, smart: true, inclui: "Sense + tela e player, conteúdo remoto, prova de veiculação" },
  ],

  // premissas da projeção de escala (todas editáveis no anexo)
  escala: {
    faixas: [500, 1000, 2500, 5000, 10000, 25000, 50000],
    implantacaoMeses: 12, reposicaoMes: 0.01, minutosPorModulo: 30, horasMes: 140,
    chamadosPorDisplay: 0.1, minN1: 15, fracN2: 0.2, minN2: 45,
    devBase: 0.5, displaysPorDev: 10000, displaysPorDevops: 25000, pessoasPorGestor: 20, displaysPorAdm: 15000,
    fatorEncargos: 1.8, ferramentasPessoa: 400, iaPorDev: 1100, bancada: 476.33,
    cargos: {
      mont: { nome: "Técnico de montagem", grupo: "Montagem", salario: 2800, fonte: "Portal Salário: técnico eletrônico, média nacional ~R$ 2.802 (CAGED)", url: "https://www.salario.com.br/profissao/tecnico-eletronico-em-geral-cbo-313215" },
      n1: { nome: "Suporte N1", grupo: "Suporte técnico", salario: 2400, fonte: "Numerando: técnico de suporte ao usuário de TI, mediana SP R$ 2.352 (CAGED jan/2026)", url: "https://numerando.com.br/salarios/tecnico-de-suporte-ao-usuario-de-tecnologia-da-informacao/sao-paulo" },
      n2: { nome: "Suporte N2", grupo: "Suporte técnico", salario: 4000, fonte: "Portal Salário: analista de suporte técnico, média R$ 3.990,66 (CAGED jun/2025 a mai/2026)", url: "https://www.salario.com.br/profissao/analista-de-suporte-tecnico-cbo-212420/" },
      dev: { nome: "Desenvolvedor pleno", grupo: "Sistema", salario: 10000, fonte: "JobRise: desenvolvedor pleno CLT R$ 7.000 a R$ 13.000 (2026)", url: "https://jobrise.io/pt/blog/quanto-ganha-um-desenvolvedor-no-brasil-2026/" },
      devops: { nome: "DevOps pleno", grupo: "Sistema", salario: 11000, fonte: "JobRise: DevOps pleno CLT R$ 8.000 a R$ 14.000 (2026)", url: "https://jobrise.io/pt/blog/salario-devops-no-brasil-2026-quanto-paga/" },
      gestor: { nome: "Gestor da Códice", grupo: "Gestão", salario: 13900, fonte: "Portal Salário: gerente de projetos de TI, média R$ 13.919,54 (CAGED)", url: "https://www.salario.com.br/profissao/gerente-de-projetos-de-tecnologia-da-informacao-cbo-142520/" },
      adm: { nome: "Administrativo e financeiro", grupo: "Gestão", salario: 4161, fonte: "Numerando: analista financeiro, média SP R$ 4.161 (CAGED mar/2026)", url: "https://numerando.com.br/salarios/analista-financeiro/sao-paulo" },
    },
    encargosFonte: { nome: "ValorFinal: custo do funcionário CLT 2026 (sem Simples, com VT, VR e plano de saúde passa de +80%)", url: "https://valorfinal.com.br/guia/custo-funcionario" },
    nuvem: {
      dolar: 5.0, batimentoMin: 5, leiturasReq: 2, gravacoesReq: 3, segReq: 0.2, gibReq: 0.5,
      precoLeitura: 0.06, precoGravacao: 0.18, precoReqMilhao: 0.40, vcpuSeg: 0.0000336, gibSeg: 0.0000035,
      leiturasDisplay: 3000, gravacoesDisplay: 300, displaysPorUsuario: 25, mapasPorUsuario: 60, mapasGratis: 10000, precoMapaMil: 7,
      contingencia: 1.5,
      fontes: [
        { nome: "Firestore: preço de leitura e gravação (us-central1 US$ 0,03 e 0,09 por 100 mil; usamos o dobro por segurança)", url: "https://cloud.google.com/firestore/pricing" },
        { nome: "Cloud Run functions: US$ 0,40 por milhão de chamadas; região tier 2 US$ 0,0000336 por vCPU-s", url: "https://cloud.google.com/run/pricing" },
        { nome: "Google Maps Platform: mapas dinâmicos, 10 mil grátis por mês e US$ 7 por mil acima", url: "https://developers.google.com/maps/billing-and-pricing/pricing" },
        { nome: "Dólar perto de R$ 5,00 em outubro de 2026 (Canal Rural, 09/10: R$ 4,9851)", url: "https://www.canalrural.com.br/economia/ibovespa-sobe-138-no-fechamento-e-dolar-comercial-cai-para-r-49851/" },
      ],
    },
    hospedagem: { ate: 2500, rateio: 5.61, vps: 196.99, fonte: "Hostinger: rateio do plano atual até 2.500 displays; acima, servidor VPS KVM 4 (R$ 196,99/mês, preço pago hoje pela 75 LAB em outro projeto)" },
    neoband: { display: 3200, instalacao: 350, manutencao: 70, vidaMeses: 36,
      fonte: "Deck comercial da Códice: comprar um display custa R$ 3.200 + instalação R$ 350 + manutenção e operação R$ 70/mês. É preço de venda, não custo: a NEOBAND precisa abrir o custo real." },
    ativoMeses: 36,
  },
};
