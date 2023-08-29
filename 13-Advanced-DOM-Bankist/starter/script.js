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
console.log(document.documentElement);//selects the entire HTML
console.log(document.head);//selects head of HTML
console.log(document.body);//selects body of HTML

const header = document.querySelector(`.header`);//selects class
const allSections = document.querySelectorAll(`.section`);//selects all
console.log(allSections);//returns Node list

document.getElementById(`section--1`);//select by id name

const allButtons = document.getElementsByTagName(`button`);//selects all elements with selected tags 

console.log(allButtons);//returns HTML collection

const btn = document.getElementsByClassName(`btn`);
console.log(btn);//gets HTML collection of all btn class elements


//CREATING and INSERTING html elements
// .insertAdjacentHTML

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);//adds class name
message.textContent = `We use cookies for analytics.`;
message.innerHTML = `We use cookies for analytics. <button class="btn btn--close-cookie">Got it"!</button>`;

//we need to insert the created element into our DOM:
// header.prepend(message);
header.append(message)
// header.append(message.cloneNode(true));//now the element will be in two places since we cloned two out of 1

// header.before(message);//creates an el. before the selected element (header) as a sibling
// header.after(message.cloneNode);//creates an el. after the selected element (header) as a sibling

//DELETE elements
document.querySelector(`.btn--close-cookie`).addEventListener(`click`, function(){
  message.remove();
})

//*-------------------Lesson 187 

//STYLES
// message.style.backgroundColor = `#37383d`;
// message.style.width = `120%`;
// // message.style.padding = `10px 0px 10px 0px`;
// //we can't read styles from css:
// console.log(message.style.height);
// console.log(message.style.backgroundColor);//reads only the color that we set above here in JS

// //GET STYLE FROM CSS
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// //increase height
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + `px`;
// console.log(getComputedStyle(message).height);

// //CSS custom properties (variables)
// document.documentElement.style.setProperty(`--color-primary`, `orangered`)

// //ATTRIBUTES
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);//class (before it was `className` in html)
// //shows only standard properties

// logo.alt = `Hello you`
// console.log(logo.alt);
// //Non-standard
// // console.log(logo.designer);//wont work since its non standard
// console.log(logo.getAttribute(`designer`));
// logo.setAttribute(`company`, `Vicky`)
// console.log(logo.company);

// //to get real src from HTML
// console.log(logo.src);//absolute link - http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png
// console.log(logo.getAttribute(`src`));//img/logo.png

// const link = document.querySelector(`.twitter-link`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// //DATA attributes
// console.log(logo.dataset.versionNumber);


// //CLASSES
// logo.classList.add(`class`);//can pass multiple classes
// logo.classList.remove(`class`);//can pass multiple classes
// logo.classList.toggle(`class`);//can pass multiple classes
// logo.classList.contains(`class`);//not includes. can pass multiple classes

// //set a class
// logo.className = `Jonas`//dont use, it will overwrite  all teh existing classes and allows to put only 1 class

//*-------------------Lesson 188


const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll (X/Y)`, 
  window.pageXOffset, 
  window.pageYOffset);

  console.log(`height and with viewport`, 
  document.documentElement.clientHeight, 
  document.documentElement.clientWidth);

  //scrolling (oldschool):
  // window.scrollTo(
    // s1coords.left + window.pageXOffset, 
    // s1coords.top + window.pageYOffset)

    //smooth scrolling:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // })

  //modern scrolling:
section1.scrollIntoView({behavior: `smooth`});
})


//*-------------------Lesson 189
//TYPE OF EVENTS
// const h1 = document.querySelector(`h1`);

// const alertH1 = function(e) {
//   alert(`ALERT ALERT`)

//   // h1.removeEventListener(`mouseenter`, alertH1)
//   }

// h1.addEventListener(`mouseenter`, alertH1)

// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 3000);
// //another way to attatch an event listener to an element (old school):
// // h1.onmouseenter = function(e) {
// //   alert(`onmouseenter alert`)
// //   }

//*-------------------Lesson 190