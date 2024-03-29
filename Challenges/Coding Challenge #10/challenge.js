const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewndowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
//2.
const [gk, ...fieldPlayers] = players1;
//3.
const allPlayers = [...players1, ...players2];
//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
//6.
const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};
//7.
printGoal("Davies", "Muller", "Lewandowski", "Kimmich");
printGoal("Davies", "Muller");

printGoal(...game.scored);

//8.

team1 < team2 && console.log("Team 1 is more likely to win");

team1 > team2 && console.log("Team 2 is more likely to win");
