/* Contas do levantamento, iguais no deck e no anexo. Tudo sai de window.CUSTOS (dados.js).
   contas(): o que já foi gasto. faixa(): custo mensal da 75 LAB numa base de N displays atendidos,
   com a equipe crescendo (montagem, suporte técnico, sistema e gestão), e a comparação com a NEOBAND.
   o = premissas trocadas no simulador do anexo (mesmos nomes de CUSTOS.escala). */
(function () {
  const soma = (a, f) => a.reduce((t, x) => t + f(x), 0);
  const CATS = {
    modulo: { nome: "Módulo smart", cor: "#1DD4C8", texto: "Peças que vão dentro do display" },
    pd: { nome: "Testes e protótipos", cor: "#2F73FF", texto: "Sensores e placas avaliados antes de fechar o kit" },
    bancada: { nome: "Bancada e ferramentas", cor: "#061B49", texto: "Investimento que serve para os próximos módulos" },
  };
  const GRUPOS = { Montagem: "#1DD4C8", "Suporte técnico": "#2F73FF", Sistema: "#061B49", Gestão: "#4E4E50" };

  function contas(C, o = {}) {
    const vh = o.valorHora ?? C.maoDeObra.valorHora;
    const porCat = {}, porCanal = {}, porDiaCompra = {};
    for (const x of C.compras) {
      porCat[x.cat] = (porCat[x.cat] || 0) + x.valor;
      porCanal[x.canal] = (porCanal[x.canal] || 0) + x.valor;
      porDiaCompra[x.data] = (porDiaCompra[x.data] || 0) + x.valor;
    }
    const compras = soma(C.compras, (x) => x.valor);
    const sistemaPeriodo = soma(C.sistema, (x) => x.set + x.out);
    const sistemaMes = soma(C.sistema, (x) => x.mensal);
    const claude = C.claude.pagoNoPeriodo * C.claude.horasCodice / C.claude.horasTodas;
    const hMedidas = C.maoDeObra.medidas.horas;
    const hCampo = soma(C.maoDeObra.campo, (x) => x.horas);
    const hTotal = hMedidas + hCampo;
    const maoDeObra = hTotal * vh;
    const caixa = compras + sistemaPeriodo + claude;
    const total = caixa + maoDeObra;
    const mHoras = soma(C.mercado.modulos, (m) => m.horas);
    const mValor = soma(C.mercado.modulos, (m) => m.horas * m.valor);
    const bom = soma(C.bom, (x) => x.valor);
    return {
      vh, porCat, porCanal, porDiaCompra, compras, sistemaPeriodo, sistemaMes, claude,
      hMedidas, hCampo, hTotal, maoDeObra, caixa, total, mHoras, mValor, bom,
      mesesEquipe: mHoras / (C.mercado.equipe * C.mercado.horasMes),
      pctClaude: C.claude.horasCodice / C.claude.horasTodas,
    };
  }

  /* Custo mensal da 75 LAB com N displays atendidos.
     oper = depois da implantação (só reposição de módulos); impl = no ano de implantação (todos os módulos novos). */
  function faixa(C, n, o = {}) {
    const E = { ...C.escala, ...o, nuvem: { ...C.escala.nuvem, ...(o.nuvem || {}) }, neoband: { ...C.escala.neoband, ...(o.neoband || {}) } };
    const cargos = JSON.parse(JSON.stringify(C.escala.cargos));
    if (o.salarios) for (const k in o.salarios) cargos[k].salario = o.salarios[k];
    const pac = o.pacotes || C.pacotes;
    const fracSmart = soma(pac.filter((p) => p.smart), (p) => p.mix);
    const precoMedio = soma(pac, (p) => p.mix * p.preco);
    const bom = soma(C.bom, (x) => x.valor);

    // montagem dos módulos smart
    const base = n * fracSmart;
    const modOper = base * E.reposicaoMes, modImpl = base / E.implantacaoMeses + modOper;
    const capacidade = E.horasMes * 60 / E.minutosPorModulo;           // módulos por técnico por mês
    const montOper = modOper / capacidade, montImpl = modImpl / capacidade;

    // suporte técnico da plataforma
    const chamados = n * E.chamadosPorDisplay;
    const hN1 = chamados * E.minN1 / 60, hN2 = chamados * E.fracN2 * E.minN2 / 60;
    const n1 = Math.max(0.5, hN1 / E.horasMes), n2 = hN2 / E.horasMes;

    // manutenção e evolução do sistema
    const dev = E.devBase + n / E.displaysPorDev, devops = n / E.displaysPorDevops;

    // gestão da Códice
    const adm = Math.max(0.25, n / E.displaysPorAdm);
    const equipe = (mont) => {
      const oper = mont + n1 + n2 + dev + devops;
      const gestor = Math.max(0.5, Math.min(1, n / 2500)) + Math.floor(oper / E.pessoasPorGestor);
      const fte = { mont, n1, n2, dev, devops, gestor, adm };
      const linhas = Object.entries(fte).map(([k, f]) => ({ k, ...cargos[k], fte: f, custo: f * cargos[k].salario * E.fatorEncargos }));
      const pessoas = soma(linhas, (l) => l.fte);
      const salarios = soma(linhas, (l) => l.custo);
      const ferramentas = pessoas * E.ferramentasPessoa + dev * E.iaPorDev;
      const porGrupo = {};
      for (const l of linhas) porGrupo[l.grupo] = (porGrupo[l.grupo] || 0) + l.custo;
      return { fte, linhas, pessoas, salarios, ferramentas, porGrupo, cabecas: soma(linhas, (l) => Math.ceil(l.fte - 1e-9)) };
    };

    // nuvem (sem contar com a cota grátis) e hospedagem
    const N = E.nuvem, req = 30 * 24 * 60 / N.batimentoMin;
    const usdModulo = req * N.precoReqMilhao / 1e6 + req * (N.segReq * N.vcpuSeg + N.segReq * N.gibReq * N.gibSeg)
      + req * N.leiturasReq * N.precoLeitura / 1e5 + req * N.gravacoesReq * N.precoGravacao / 1e5;
    const usdDisplay = N.leiturasDisplay * N.precoLeitura / 1e5 + N.gravacoesDisplay * N.precoGravacao / 1e5;
    const aberturas = n / N.displaysPorUsuario * N.mapasPorUsuario;
    const usdMapas = Math.max(0, aberturas - N.mapasGratis) * N.precoMapaMil / 1000;
    const nuvem = (base * usdModulo + n * usdDisplay + usdMapas) * N.dolar * N.contingencia;
    const hospedagem = n <= E.hospedagem.ate ? E.hospedagem.rateio : E.hospedagem.vps;

    const eO = equipe(montOper), eI = equipe(montImpl);
    const pecasOper = modOper * bom, pecasImpl = modImpl * bom;
    const oper = eO.salarios + eO.ferramentas + nuvem + hospedagem + pecasOper;
    const impl = eI.salarios + eI.ferramentas + nuvem + hospedagem + pecasImpl;
    const bancadas = Math.ceil(montImpl - 1e-9) * E.bancada;

    // NEOBAND (referência) e receita
    const NB = E.neoband;
    const nbDisplay = NB.display / NB.vidaMeses + NB.instalacao / NB.vidaMeses + NB.manutencao;
    const receita = n * precoMedio;
    const ativoMes = contas(C).mValor / E.ativoMeses;
    const c75 = oper / n, c75ativo = (oper + ativoMes) / n;
    const capNB = n * (NB.display + NB.instalacao), capLab = contas(C).mValor + base * bom + bancadas;
    return {
      n, fracSmart, precoMedio, base, modOper, modImpl, capacidade, montOper, montImpl, chamados, hN1, hN2,
      eO, eI, usdModulo, usdDisplay, aberturas, usdMapas, nuvem, hospedagem, pecasOper, pecasImpl, bancadas,
      oper, impl, porDisplay: c75, porDisplayImpl: impl / n, nuvemPorModulo: usdModulo * N.dolar * N.contingencia,
      nbDisplay, nbMes: nbDisplay * n, receita, ativoMes,
      partCusto: c75 / (c75 + nbDisplay), partAtivo: c75ativo / (c75ativo + nbDisplay),
      capNB, capLab, partCapital: capLab / (capLab + capNB),
      minimo: c75 / precoMedio, margem: receita - oper - nbDisplay * n,
    };
  }

  const brl = (v, d = 2) => (v ?? 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: d, maximumFractionDigits: d });
  const num = (v, d = 0) => (v ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const mil = (v) => v >= 1e6 ? `R$ ${num(v / 1e6, 1)} mi` : v >= 1e4 ? `R$ ${num(v / 1e3, 1)} mil` : brl(v, 0);
  const pct = (v, d = 1) => num(v * 100, d) + "%";
  const dataBR = (iso) => iso.split("-").reverse().slice(0, 2).join("/");

  window.CALC = { contas, faixa, brl, num, mil, pct, dataBR, CATS, GRUPOS, soma };
})();
