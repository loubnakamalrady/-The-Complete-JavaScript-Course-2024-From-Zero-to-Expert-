const percentageOfWorld3 = (population) =>
  ((population / 7900e6) * 100).toFixed(1);

const printCountry3 = (country) => country;

console.log(
  `${printCountry3(
    "Finland"
  )} has 6 million people, so it's about ${percentageOfWorld3(
    6e6
  )} of the world population`
);
