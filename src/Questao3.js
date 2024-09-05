const faturamentoMensal = [
    {"dia": 1, "valor": 200},
    {"dia": 2, "valor": 0},  
    {"dia": 3, "valor": 250},
    {"dia": 4, "valor": 300},
    {"dia": 5, "valor": 0}, 
    {"dia": 6, "valor": 400},
    {"dia": 7, "valor": 500},

  ];
  
  function calcularFaturamento(faturamento) {
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
    const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia
    };
  }
  
  const resultado = calcularFaturamento(faturamentoMensal);
  console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
  console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
  console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);