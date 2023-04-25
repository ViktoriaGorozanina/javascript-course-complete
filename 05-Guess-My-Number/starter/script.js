'use strict';

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 💥';

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ❌';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won! 💥';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too big ⬜';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too small ◽ ';
  }
});
