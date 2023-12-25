country = "Egypt";
language = "English";
isIsland = false;
population = 40e6;

if (language === "English" && isIsland === false && population < 50e6) {
  console.log(`You should love in ${country} :)`);
} else {
  console.log(`${country} doesn\'t meet your criteria :(`);
}
