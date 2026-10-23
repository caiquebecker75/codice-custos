/* Contas do levantamento, iguais no deck e no anexo. Tudo sai de window.CUSTOS (dados.js).
   o.valorHora permite simular outro valor-hora. A compra das tags e das pilhas fica fora do levantamento. */
(function () {
  const soma = (a, f) => a.reduce((t, x) => t + f(x), 0);
  const CATS = {
    modulo: { nome: "Módulo smart", cor: "#1DD4C8", texto: "Peças que vão dentro do display" },
    pd: { nome: "Testes e protótipos", cor: "#2F73FF", texto: "Sensores e placas avaliados antes de fechar o kit" },
    bancada: { nome: "Bancada e ferramentas", cor: "#061B49", texto: "Investimento que serve para os próximos módulos" },
  };

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
    const hardware = compras;
    const caixa = compras + sistemaPeriodo + claude;
    const total = caixa + maoDeObra;
    const mHoras = soma(C.mercado.modulos, (m) => m.horas);
    const mValor = soma(C.mercado.modulos, (m) => m.horas * m.valor);
    const bom = soma(C.bom, (x) => x.valor);
    const sistemaPorTagAno = sistemaMes * 12 / C.tags.ativas;
    return {
      vh, porCat, porCanal, porDiaCompra, compras, sistemaPeriodo, sistemaMes, claude,
      hMedidas, hCampo, hTotal, maoDeObra, hardware, caixa, total, mHoras, mValor, bom, sistemaPorTagAno,
      mesesEquipe: mHoras / (C.mercado.equipe * C.mercado.horasMes),
      rastreadoAno: sistemaPorTagAno,
      recorrenteMes: sistemaMes,
    };
  }

  /* Projeção de escala: hardware multiplica; nuvem cresce em linha com o uso medido em outubro
     (uso bruto por tag = (R$ 2,84 pagos + R$ 3,60 cobertos pela cota) ÷ 200 tags), descontando a mesma cota. */
  function escala(C, n, fracSmart, o = {}) {
    const r = contas(C, o);
    const smart = Math.round(n * fracSmart);
    const nuvemBrutaTag = (2.84 + 3.60) / C.tags.ativas;
    const nuvem = Math.max(0, nuvemBrutaTag * n - 3.60);
    const contasG = Math.ceil(n / C.tags.porConta);
    const minGit = Math.round((398 / 23 * 30) / 2 * contasG);
    const hPar = n * C.minutosPorTag / 60, hMont = smart * C.minutosPorModulo / 60;
    return {
      n, smart, modulos: smart * r.bom,
      contasG, minGit, gitGratis: minGit <= 2000, nuvem, sistemaMes: nuvem + 5.61,
      hPar, hMont, maoDeObra: (hPar + hMont) * r.vh,
      capex: smart * r.bom + (hPar + hMont) * r.vh,
    };
  }

  const brl = (v, d = 2) => (v ?? 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: d, maximumFractionDigits: d });
  const num = (v, d = 0) => (v ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const mil = (v) => v >= 1e6 ? `R$ ${num(v / 1e6, 1)} mi` : v >= 1e4 ? `R$ ${num(v / 1e3, 1)} mil` : brl(v, 0);
  const dataBR = (iso) => iso.split("-").reverse().slice(0, 2).join("/");

  window.CALC = { contas, escala, brl, num, mil, dataBR, CATS, soma };
})();
