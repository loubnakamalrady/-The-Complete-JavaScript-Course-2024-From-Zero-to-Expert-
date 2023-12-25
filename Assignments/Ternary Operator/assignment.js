var isIsland = true;
var country = "Egypt";
const continent = "Africa";
var population = 100e6;
var language = "Egyptian";

// if (population > 33e6) {
//   console.log(`${country}\'s population is above average`);
// } else {
//   var average = (33e6 - population) / 2;
//   console.log(`${country}\'s population is ${average} million below average`);
// }

/*"Egypt's population is above average" when 130
"Egypt's population is 11500000 million below average" when 10*/
var average = (33e6 - population) / 2;
var isMore =
  population > 33e6
    ? console.log(`${country}\'s population is above average`)
    : console.log(
        `${country}\'s population is ${average} million below average`
      );
