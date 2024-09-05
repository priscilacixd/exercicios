const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let total = 0;
for (const estado in faturamentoEstados) {
    total = total + faturamentoEstados[estado];
}

for (const estado in faturamentoEstados) {
    const valor = faturamentoEstados[estado];
    const percentual = (valor / total) * 100;
    
    console.log(`Percentual de ${estado}: `, + percentual.toFixed(2),"%");
}
