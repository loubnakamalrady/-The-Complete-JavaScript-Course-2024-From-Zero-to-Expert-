const myCountry = {
  country: "Egypt",
  capital: "Cairo",
  lanaguage: "Egyptian",
  population: 100e6,
  neighbours: ["Lybia", "Morocco", "Sudan"],
  describe: function () {
    console.log(`${this.country} has ${myCountry.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
  and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    var isIsland = this.neighbours.length > 0 ? true : false;
  },
};

myCountry.describe();
