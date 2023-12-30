const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  lanaguage: "Egyptian",
  population: 100e6,
  neighbours: ["Lybia", "Morocco", "Sudan"],
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

console.log(myCountry.population + 2e6);
console.log(myCountry["population"] + 2e6);
