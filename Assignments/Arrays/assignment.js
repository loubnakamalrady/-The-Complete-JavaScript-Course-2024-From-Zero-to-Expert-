const population = [100e6, 20e6, 10e6, 30e6];
if (population.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

function percentageOfWorld1(population) {
  return ((population / 7900e6) * 100).toFixed(1);
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];

console.log(percentages);
