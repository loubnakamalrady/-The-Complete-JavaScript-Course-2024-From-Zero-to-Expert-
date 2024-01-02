let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Function to display the message
const displayMessage = function (message) {
  document.querySelector(".guessText").textContent = message;
};

// Function to change the content of elements
const changingContent = function (score, color, numberBckColor) {
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#numberTyped").style.backgroundColor = numberBckColor;
};

// Function to update the guessed number
const guessingNumber = function (guessed) {
  document.querySelector(".guessedNumber").textContent = guessed;
};

// Event listener for the "check" button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#numberTyped").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("Incorrect Input!");
  }
  // Correct guess
  else if (guess === secretNumber) {
    displayMessage("Correct Answer!!");
    changingContent(score, "#60b347", "#FFFFFF");
    guessingNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
  // Incorrect guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!!" : "Too Low!!");
      score--;
      changingContent(score);
    } else {
      displayMessage("You Lost The Game!!");
      changingContent(score, "#ff0000", "#FFFFFF");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Event listener for the "again" button
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  changingContent(score, "#000000", "#000000");
  document.querySelector("#numberTyped").value = "";
  guessingNumber("?");
});
