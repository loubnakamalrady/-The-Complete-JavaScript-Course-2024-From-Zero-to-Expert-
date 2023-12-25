var isIsland = true;
var country = "Egypt";
const continent = "Africa";
var population = 100e6;
var language = "Egyptian";

country = "Sudan";
continent = "Asia";

console.log(isIsland, population, country, continent, language);

//output is
/*Uncaught TypeError: Assignment to constant variable. 
 at https://cdpn.io/cpe/boomboom/pen.js?key=pen.js-63537915-d9e9-7531-0008-becf538d0e22:8*/
