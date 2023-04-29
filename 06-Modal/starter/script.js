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
