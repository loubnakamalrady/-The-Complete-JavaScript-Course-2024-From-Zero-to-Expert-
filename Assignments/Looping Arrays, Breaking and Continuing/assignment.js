const populations = [10e6, 1441e6, 332e6, 83e6];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900e6) * 100;
}

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}

console.log(percentages2);
