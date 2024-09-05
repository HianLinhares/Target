const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  function calcularPercentualFaturamento(faturamento) {
    const totalMensal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
    const percentualPorEstado = {};
    for (const estado in faturamento) {
      const percentual = (faturamento[estado] / totalMensal) * 100;
      percentualPorEstado[estado] = percentual.toFixed(2);
    }
    return percentualPorEstado;
  }
  

  const percentuais = calcularPercentualFaturamento(faturamentoPorEstado);
  for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }