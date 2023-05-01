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

let activePlayer = 0;
let currentScore = 0;
const scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add(`hidden`);

// Implementing rolling dice functioinality
btnRoll.addEventListener(`click`, function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  // 2. display the dice
  diceEl.classList.remove(`hidden`);
  //!image corresponds to dice roll Nr:
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1: ...
  if (dice !== 1) {
    currentScore += dice; //same as cs = cs + dice

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //... if true, switch to the next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    //? TOGGLE
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});

//hold the score
