
const faturamentoTotal = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53;

const spPercentual = (67836.43 / faturamentoTotal) * 100;
const rjPercentual = (36678.66 / faturamentoTotal) * 100;
const mgPercentual = (29229.88 / faturamentoTotal) * 100;
const esPercentual = (27165.48 / faturamentoTotal) * 100;
const outrosPercentual = (19849.53 / faturamentoTotal) * 100;

console.log(`Percentual de representação de SP: ${spPercentual}%`);
console.log(`Percentual de representação de RJ: ${rjPercentual}%`);
console.log(`Percentual de representação de MG: ${mgPercentual}%`);
console.log(`Percentual de representação de ES: ${esPercentual}%`);
console.log(`Percentual de representação de Outros: ${outrosPercentual}%`);