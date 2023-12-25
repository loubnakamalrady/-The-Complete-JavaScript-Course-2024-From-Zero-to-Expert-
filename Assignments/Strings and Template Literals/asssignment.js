var isIsland = true;
var country = "Egypt";
const continent = "Africa";
var population = 100e6;
var language = "Egyptian";

console.log(isIsland, population, country, continent, language);
/*1. If your country split in half, and each half would contain half the population, 
then how many people would live in each half?*/
var halfPopulation = population / 2;
console.log("Population of each half:", halfPopulation);

/*. Increase the population of your country by 1 and log the result to the console*/
var increasePopulation = population + 1;
console.log("Population increment:", increasePopulation);

/*Finland has a population of 6 million. Does your country have more people than 
Finland?*/
var finlandPop = 6e6;
console.log(finlandPop);

if (finlandPop > population) {
  console.log(`Findland has more population than ${country}`);
} else {
  console.log(`${country} has more population than Findland`);
}

/*The average population of a country is 33 million people. Does your country 
have less people than the average country?*/
var anotherCountry = 33e6;
console.log(anotherCountry);

var average = (population + anotherCountry) / 2;

if (average < anotherCountry) {
  console.log(`The country has more population than ${country}`);
} else {
  console.log(`${country} has more population than country`);
}

/* Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'*/
/* Recreate the 'description' variable from the last assignment, this time 
using the template literal syntax*/
var description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);
