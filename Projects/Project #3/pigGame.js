const score0 = document.querySelector('#plyr-1');
const score1 = document.getElementById('plyr-2');
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const diceEl = document.querySelector('.diceImage');
const btnNew = document.querySelector('.new-game');
const btnRoll = document.querySelector('.dice');
const btnHold = document.querySelector('.hold');
const currentScoreEl = document.getElementById('current-0');
let currentScore = 0;
score0.textContent = 0;
score1.textContent = 0;
let activePlayer = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current-${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
  }
});
