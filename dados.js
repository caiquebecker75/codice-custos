/* Levantamento de custos do projeto Códice (plataforma + rastreamento por tag + módulo smart ESP32).
   Fonte única do deck (index.html) e do anexo (detalhes.html). Valores em reais.
   Compras: valor efetivamente pago no pedido (com frete, impostos e descontos), lido no histórico de pedidos
   da Shopee e do AliExpress em 23/10/2026. Nenhum dado pessoal (endereço, documento, pagamento) entra aqui. */
window.CUSTOS = {
  atualizadoEm: "23/10/2026",
  periodo: { inicio: "09/09/2026", fim: "23/10/2026" },

  compras: [
    // ---------------------------------------------------------------- módulo smart (cat "modulo" = vai no display; "pd" = teste, protótipo e alternativa avaliada)
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
    // ---------------------------------------------------------------- rastreamento
    { data: "2026-09-09", canal: "Shopee", item: "Smart tag BASIKE (rede Buscar da Apple)", qtd: 1, valor: 50.99, cat: "pd", uso: "Teste inicial da rede da Apple, antes da escolha pela rede do Google" },
    // ---------------------------------------------------------------- bancada e ferramentas (investimento reaproveitável)
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

  // lista de peças de 1 módulo smart, pelo kit de fábrica (firmware 2.1.1): ESP32 + HC-SR04 + DHT11 numa caixa vedada
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
  minutosPorModulo: 30, minutosPorTag: 3,

  // tags Find My: compra fora da Shopee e do AliExpress do Caique; preço de referência até confirmar
  tags: {
    quantidade: 204, ativas: 200, contasGoogle: 2, porConta: 100,
    precoUnitario: 39.56, confirmado: false,
    referencia: "Mini rastreador genérico compatível com Encontre Meu Dispositivo, R$ 39,56 no Pix (Magazine Luiza). Modelo usado: α'GOLD PLUS TCD-06B, pilha CR2032.",
    referenciaUrl: "https://m.magazineluiza.com.br/busca/kit+2+smarttrackers/",
    pilhaCr2032: 6.96, pilhaFonte: "5 pilhas CR2032 Panasonic por R$ 34,82 (pedido da Shopee de 07/06/2026)", trocasPorAno: 1,
  },

  // sistema: custo real lido nos painéis em 23/10/2026
  sistema: [
    { item: "Google Cloud / Firebase (Firestore, Functions, Hosting, Scheduler, Secret Manager)", set: 0.02, out: 2.53, mensal: 2.84,
      fonte: "Console de faturamento, conta 0126F1-41244F-F1CF4B (set: R$ 0,02; out até 23: R$ 2,53; previsão de out: R$ 2,84). Funções usaram R$ 3,60, cobertos pela cota grátis. O Scheduler (R$ 1,61) caiu para 2 jobs grátis em 10/10." },
    { item: "Hostinger Business Web Hosting (rateio: 1 de 13 sites)", set: 5.61, out: 5.61, mensal: 5.61,
      fonte: "Plano de R$ 72,99/mês (histórico de pagamentos), hospeda 13 sites; a Códice é um deles." },
    { item: "GitHub (repositórios e Actions do coletor)", set: 0, out: 0, mensal: 0,
      fonte: "Plano grátis: 398 de 2.000 minutos de Actions usados em outubro." },
    { item: "Google Maps Platform (mapas e Street View)", set: 0, out: 0, mensal: 0,
      fonte: "Sem cobrança no faturamento: dentro do crédito mensal grátis do Google." },
    { item: "Avisos no celular (ntfy) e lojas pelo OpenStreetMap", set: 0, out: 0, mensal: 0,
      fonte: "Serviços públicos grátis, sem conta e sem chave." },
    { item: "Contas Google do rastreamento (2) e rede Encontre Meu Dispositivo", set: 0, out: 0, mensal: 0,
      fonte: "Contas gratuitas; a rede do Google não cobra." },
  ],

  // ferramenta de desenvolvimento: Claude (plano Max), rateado pelas horas de sessão no período
  claude: {
    pagoNoPeriodo: 1498.35, parcela: 0.186, horasCodice: 58.0, horasTodas: 311.4,
    fonte: "Pagamentos no período: 17/09 R$ 550,00 (Max 5x) e 09/10 R$ 948,35 (Max 20x). Parcela da Códice = 58,0 h de 311,4 h de sessões entre 10/09 e 23/10 (registro das sessões).",
  },

  // mão de obra
  maoDeObra: {
    valorHora: 150,
    valorHoraFonte: "Meio da faixa de desenvolvedor full stack pleno (R$ 120 a R$ 200/h).",
    medidas: { horas: 58.0, dias: 22, fonte: "Tempo ativo das sessões de trabalho com o Claude Code em que os comandos mexeram no projeto (blocos com pausas de até 20 min), 10/09 a 23/10. Bate com os 22 dias com commit." },
    campo: [
      { item: "Pareamento das 204 tags no Android, nomes e conferência", horas: 10.2, base: "3 min por tag (estimativa)" },
      { item: "Montagem, solda e testes do módulo ESP32 (protótipo e kit de fábrica)", horas: 12, base: "estimativa" },
      { item: "Cadastro de CDs, lojas e contas Google; login das contas no coletor", horas: 3, base: "estimativa" },
    ],
    porDia: { "2026-09-10": 2.9, "2026-09-11": 1.5, "2026-09-13": 5.1, "2026-09-14": 7.4, "2026-09-15": 7.3, "2026-09-16": 1.2, "2026-09-17": 2.7, "2026-09-18": 4.7, "2026-09-21": 2.1, "2026-09-22": 1.1, "2026-09-23": 1.3, "2026-09-24": 2.5, "2026-09-27": 10.8, "2026-09-28": 1.0, "2026-10-01": 0.6, "2026-10-02": 0.3, "2026-10-05": 1.3, "2026-10-06": 0.5, "2026-10-09": 0.3, "2026-10-10": 3.1, "2026-10-21": 0.2, "2026-10-23": 0.1 },
  },

  // o que foi construído (base do equivalente de mercado)
  entrega: {
    commits: 246, diasComCommit: 22, linhasPlataforma: 49898, linhasFirmware: 3572, telas: 50, funcoes: 54, tags: 204,
  },

  // equivalente de mercado: o mesmo escopo feito por uma equipe tradicional, sem IA
  mercado: {
    fonteHora: [
      { nome: "GeraContratos: tabela de serviços profissionais (full stack pleno R$ 120 a 200/h, sênior R$ 200 a 400/h)", url: "https://geracontratos.com.br/recursos/tabela-valores-servicos-profissionais" },
      { nome: "Monitor do Mercado: quanto um programador freelancer cobra por hora em 2026 (pleno R$ 130 a 200/h, sênior R$ 220 a 300/h)", url: "https://monitordomercado.com.br/noticias/399275-quanto-um-programador-freelancer-cobra-por-hora-no-brasil-em-2026-e-o-que-define-o-nivel-junior-pleno-e-senior/" },
    ],
    modulos: [
      { nome: "Plataforma web", detalhe: "50 telas: painel, frota, mapa ao vivo, rastreadores, PDV, mídia, comercial, operação, administração, demonstração", horas: 1150, valor: 150 },
      { nome: "Backend e automações", detalhe: "54 funções, regras de acesso, ingestão IoT, relógios, alertas, avisos no celular, relatórios públicos", horas: 620, valor: 150 },
      { nome: "Rastreamento Find My", detalhe: "Coletor multi-conta, criptografia da rede do Google, renovação de chaves, faixa rápida, cerca virtual", horas: 300, valor: 250 },
      { nome: "Firmware ESP32 e kit de fábrica", detalhe: "Sensores, BLE, OTA, portal de Wi-Fi, fila offline, gravação e cadastro em escala", horas: 320, valor: 250 },
      { nome: "Design de produto e interface", detalhe: "Marca Códice, conceitos, telas, versão celular", horas: 160, valor: 150 },
      { nome: "Testes, implantação e documentação", detalhe: "15% do desenvolvimento", horas: 359, valor: 150 },
      { nome: "Gestão do projeto", detalhe: "10% do desenvolvimento", horas: 239, valor: 150 },
    ],
    conferencia: "Conferência por tamanho: 53.470 linhas entregues a 20 linhas por hora (código pronto, com teste) = 2.674 h, na mesma ordem das 3.148 h por módulo.",
    equipe: 5, horasMes: 140,
  },
};
