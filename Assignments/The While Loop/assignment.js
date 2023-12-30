const populations = [10e6, 1441e6, 332e6, 83e6];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900e6) * 100;
}
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
  i++;
}
console.log(percentages2);
