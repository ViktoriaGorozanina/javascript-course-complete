'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//*-------------------Lesson 186

//SELECTING
// console.log(document.documentElement);//selects the entire HTML
// console.log(document.head);//selects head of HTML
// console.log(document.body);//selects body of HTML

// const header = document.querySelector(`.header`);//selects class
// const allSections = document.querySelectorAll(`.section`);//selects all
// console.log(allSections);//returns Node list

// document.getElementById(`section--1`);//select by id name

// const allButtons = document.getElementsByTagName(`button`);//selects all elements with selected tags 

// console.log(allButtons);//returns HTML collection

// const btn = document.getElementsByClassName(`btn`);
// console.log(btn);//gets HTML collection of all btn class elements


// //CREATING and INSERTING html elements
// // .insertAdjacentHTML

// const message = document.createElement(`div`);
// message.classList.add(`cookie-message`);//adds class name
// message.textContent = `We use cookies for analytics.`;
// message.innerHTML = `We use cookies for analytics. <button class="btn btn--close-cookie">Got it"!</button>`;

// //we need to insert the created element into our DOM:
// // header.prepend(message);
// header.append(message)
// // header.append(message.cloneNode(true));//now the element will be in two places since we cloned two out of 1

// // header.before(message);//creates an el. before the selected element (header) as a sibling
// // header.after(message.cloneNode);//creates an el. after the selected element (header) as a sibling

// //DELETE elements
// document.querySelector(`.btn--close-cookie`).addEventListener(`click`, function(){
//   message.remove();
// })

//*-------------------Lesson 187