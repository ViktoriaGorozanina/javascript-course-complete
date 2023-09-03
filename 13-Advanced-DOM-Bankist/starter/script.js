'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
const nav = document.querySelector(`.nav`);

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
//////////////////////////////////
//Lesson 192
// Page navigation


//*-------------------Lesson 186

//SELECTING
// console.log(document.documentElement);//selects the entire HTML
// console.log(document.head);//selects head of HTML
// console.log(document.body);//selects body of HTML

const header = document.querySelector(`.header`);//selects class
const allSections = document.querySelectorAll(`.section`);//selects all
// console.log(allSections);//returns Node list

document.getElementById(`section--1`);//select by id name

const allButtons = document.getElementsByTagName(`button`);//selects all elements with selected tags 

// console.log(allButtons);//returns HTML collection

const btn = document.getElementsByClassName(`btn`);
// console.log(btn);//gets HTML collection of all btn class elements


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


// btnScrollTo.addEventListener(`click`, function(e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log(`Current scroll (X/Y)`, 
//   // window.pageXOffset, 
//   // window.pageYOffset);

//   // console.log(`height and with viewport`, 
//   // document.documentElement.clientHeight, 
//   // document.documentElement.clientWidth);

//   //scrolling (oldschool):
//   // window.scrollTo(
//     // s1coords.left + window.pageXOffset, 
//     // s1coords.top + window.pageYOffset)

//     //smooth scrolling:
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset, 
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: `smooth`,
//   // })

//   //modern scrolling:
// section1.scrollIntoView({behavior: `smooth`});
// })


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

//*-------------------Lesson 191

// //rgb(255,255,255)
// const randomInt = (min,max) => Math.floor(Math.random () * (max - min +1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor(0,255));

// document.querySelector(`.nav__link`).addEventListener(`click`, function(e) {
//   // console.log(`link`);
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);//to see from wich element the event is triggered, and through which elements it bubbles
//   console.log(e.currentTarget === this);//means that e.current target is the same as the element in this querySelector

//   //Stop propagation:
//   // e.stopPropagation();//to `isolate` the element so propagation stops and the event will happen only in this element
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function(e) {
//   this.style.height = `100px`;
//   console.log(`LINK`, e.target, e.currentTarget);//to see from wich element the event is triggered, and through which elements it bubbles
//   console.log(e.currentTarget === this);//means that e.current target is the same as the element in this querySelector

//   //Stop propagation:
//   e.stopPropagation();//to `isolate` the element so propagation stops and the event will happen only in this element
// });

// document.querySelector(`.nav`).addEventListener(`click`, function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);//to see from wich element the event is triggered, and through which elements it bubbles
//   console.log(e.currentTarget === this);//means that e.current target is the same as the element in this querySelector

//   //Stop propagation:
//   e.stopPropagation();//to `isolate` the element so propagation stops and the event will happen only in this element
// });

//*-------------------Lesson 192

//
btnScrollTo.addEventListener(`click`, function(e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(`Current scroll (X/Y)`, 
  // window.pageXOffset, 
  // window.pageYOffset);

  // console.log(`height and with viewport`, 
  // document.documentElement.clientHeight, 
  // document.documentElement.clientWidth);

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

  // Page navigation
//this is the way we would do it a normal way, but it is not a good practice to use this method to apply it for thousands of elements for example, so we need to delegate it.
// document.querySelectorAll(`.nav__link`).forEach(function(el) {
//   el.addEventListener(`click`, function(e) {
//     e.preventDefault();
//     const id = this.getAttribute(`href`);
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: `smooth`});
//   })
//   })

//delegate it (so now it works like "if clicked element is `this` then happen `this`"):

//1. Add event listener to a common parent elemnet
//2. Determine what element orginated the event

document.querySelector(`.nav__links`).addEventListener(`click`, function(e) {
    console.log(e.target);

    //Matching strategy:
    if(e.target.classList.contains(`nav__link`)){
    console.log(`link`);

      e.preventDefault();
        const id = e.target.getAttribute(`href`);
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior:     `smooth`})
    }
})


//*-------------------Lesson 193

// const h1 = document.querySelector(`h1`);

// // Going downwards: child
// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);//direct children nodes
// console.log(h1.children);//direct children elements

// h1.firstElementChild.style.color = `white`;
// h1.lastElementChild.style.color = `black`;

// // Going upwards: parent
// console.log(h1.parentNode);//direct parent node
// console.log(h1.parentElement);//direct parent elements

// console.log(h1.closest(`.header`).style.background = `var(--gradient-secondary)`);//it will find NON direct parent
// console.log(h1.closest(`h1`).style.background = `var(--color-tertiary)`);//it will find itself

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);//selects all siblings
// [...h1.parentElement.children].forEach(function(el) {
//   if(el !== h1) el.style.transform = `scale(0.5)`
// })

//*-------------------Lesson 194


const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

// tabs.forEach(t=>t.addEventListener(`click`, () =>
// console.log(`tab`)));
//better to use event delegation!:
tabsContainer.addEventListener(`click`, function(e) {
  const clicked = e.target.closest(`.operations__tab`);
  // console.log(clicked);

  //Guard clause:
  if(!clicked) return;//if nothing is clicked then we wanto to immediately finish the function

  //putting other buttons down (clearing active status):
  tabs.forEach(t => t.classList.remove(`operations__tab--active`));
//adding active status to clicked btn:
  clicked.classList.add(`operations__tab--active`);

  //activate content area:
  tabsContent.forEach(c => c.classList.remove(`operations__content--active`))
  // console.log(clicked.dataset.tab);//remove active class

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add(`operations__content--active`);
})

//*-------------------Lesson 195
//Menu fade animation
// const nav = document.querySelector(`.nav`);

const handleHover = function(e) {

  if(e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
        });

    logo.style.opacity = this;
  }
}

// nav.addEventListener(`mouseover`, function(e) {
//   handleHover(e, 0.5)
// });

// nav.addEventListener(`mouseout`, function(e) {
//   handleHover(e, 1)});

  //better:
  //Bind method
  nav.addEventListener(`mouseover`, handleHover.bind(0.5));
  
  nav.addEventListener(`mouseout`, handleHover.bind(1));
  

  //*-------------------Lesson 195

//   //Sticky navigation: not the best option, check the next lesson
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

//   window.addEventListener(`scroll`, function(e) {
//     // console.log(window.scrollY);

//     if(window.scrollY > initialCoords.top) {
//       nav.classList.add(`sticky`)} 
//       else {nav.classList.remove(`sticky`)
//   }});

//*-------------------Lesson 196
// Sticky navigation: Intersection Observer API

// const obsCallBack = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root: null,//viewport
//   // threshold: 0.1,//10% of root (viewport)
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header1 = document.querySelector(`.header`);
const navHeight = nav.getBoundingClientRect();

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting)
  nav.classList.add(`sticky`)
  else nav.classList.remove(`sticky`)
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: `-90px`,//has to be px, rem and % do not work
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header1);