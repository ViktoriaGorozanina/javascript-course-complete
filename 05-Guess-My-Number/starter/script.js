'use strict';

// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 💥';

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number ❌';
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won! 💥';
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 🔼';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😪';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 🔽 ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😪';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//? CHALLENGE #1
document.querySelector('.again').addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;

  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
});

// BONUS

// if ((document.querySelector(`.message`).textContent = 'You won! 💥')) {
//   highscore.push(score);
//   document.querySelector(`.highscore`).textContent = Math.max(...highscore);
// }
// console.log(highscore);
