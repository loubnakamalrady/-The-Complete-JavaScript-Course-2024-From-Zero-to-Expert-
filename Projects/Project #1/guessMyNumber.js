let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#numberTyped").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".guessText").textContent = "Incorrect Input!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".guessText").textContent = "Too High!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessText").textContent = "You Lost The Game!!";
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector("#numberTyped").style.backgroundColor = "#FFFFFF";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".guessText").textContent = "Too Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessText").textContent = "You Lost The Game!!";
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector("#numberTyped").style.backgroundColor = "#FFFFFF";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    document.querySelector(".guessText").textContent = "Correct Answer!!";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("#numberTyped").style.backgroundColor = "#FFFFFF";
    document.querySelector(".guessedNumber").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guessText").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector("#numberTyped").style.backgroundColor = "#000000";
  document.querySelector("#numberTyped").value = "";
  document.querySelector(".guessedNumber").textContent = "?";
});
