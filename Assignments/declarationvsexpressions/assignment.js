///function declaration
function percentageOfWorld1(population) {
  return ((population / 7900e6) * 100).toFixed(1);
}

function printCountry(country) {
  return country;
}

console.log(
  `${printCountry(
    "China"
  )} has 1441 million people, so it's about ${percentageOfWorld1(
    1441e6
  )} of the world population`
);
console.log(
  `${printCountry(
    "Egypt"
  )} has 100 million people, so it's about ${percentageOfWorld1(
    100e6
  )} of the world population`
);

/////////////

//function expression

const percentageOfWorld2 = function (population) {
  return ((population / 7900e6) * 100).toFixed(1);
};

const printCountry2 = function (country) {
  return country;
};

console.log(
  `${printCountry2(
    "Finland"
  )} has 6 million people, so it's about ${percentageOfWorld2(
    6e6
  )} of the world population`
);
