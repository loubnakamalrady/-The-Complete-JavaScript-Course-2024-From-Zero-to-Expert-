const score0 = document.getElementById('plyr-0');
const score1 = document.getElementById('plyr-1');
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const diceEl = document.querySelector('.diceImage');
const btnNew = document.querySelector('.new-game');
const btnRoll = document.querySelector('.dice');
const btnHold = document.querySelector('.hold');
const currentScore0El = document.getElementById('current-0');
const currentScore1El = document.getElementById('current-1');

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
};

let currentScore, activePlayer, scores, playing;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');
};

init();

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`plyr-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove(`player-active`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
