'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
//another way to get an element by ID:
const score1El = document.getElementById(`score--1`);

const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

//starting conditions:
let scores, currentScore, activePlayer, playing; //setting empty variables

const init = function () {
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = score1El.textContent = 0;
  current0El.textContent = current1El.textContent = 0;

  diceEl.classList.add(`hidden`);
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //? TOGGLE
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// Implementing rolling dice functioinality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    // 1. generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    // 2. display the dice
    diceEl.classList.remove(`hidden`);
    //image corresponds to dice roll Nr:
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: ...
    if (dice !== 1) {
      currentScore += dice; //same as cs = cs + dice

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //... if true, switch to the next player
      switchPlayer();
    }
  }
});

//hold the score
btnHold.addEventListener(`click`, function () {
  if (playing) {
    //add current score to total score of an active player
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if the score if >=< 100
    if (scores[activePlayer] >= 100) {
      //if more then finish the game
      playing = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } //if not - switch the  player
    else {
      switchPlayer();
    }
  }
});

//reset game
btnNew.addEventListener(`click`, init);
