'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

console.log(btnsOpenModal);
const openModal = function () {
  console.log(`Button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
// ATTACH THE FUNCTION TO ALL THREE BUTTONS THAT HAVE ONE THE SAME CLASS
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
// WE DO NOT CALL FUNCTION BY (), THE FUNCTION WILL BE CALLED AUTOMATICALLY WHEN CLICKED
btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

//by the code below below we will see in the console which key was presses
document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  //if key Escape is pressed then close modal if modal does not contain Hidden class in it:
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});
