'use strict';

//*------------------Lesson 128
// const bookings = [];

// const createBooking = function (flightNum,numPassengers = 1, price=199) {


//     // numPassengers = numPassengers || 1; //default value 1. ES5 way of doing it
//     // price = price || 199;//instead we just type it straight into the function values

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`,2, 200);
// createBooking(`LH123`,undefined, 200);//to skip a parameter and leave it to default use undefined

//*------------------Lesson 129

// const flight = `LH234`;
// const jonas = {
// name: `Jonas Blabla`,
// passport: 23613546434,

// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = `LH999`, //changing the parameter, however it does not change, since it is a completely diff variable and it doesnt get brought out of the function
//     passenger.name = `Mr. ` + passenger.name //but the name changed

//     if(passenger.passport === 23613546434) {
//         alert(`Checked in`);
//     } else {
//         alert(`Wrong passport`);
//     };
// }
// // checkIn(flight, jonas)
// // console.log(flight);
// // console.log(jonas);


// //---------------------
// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas)
// checkIn(flight, jonas)
// // console.log(flight, jonas);

// //---------------------
// //JS passes only by value not reference. Even  if it looks like passing by reference

//*------------------Lesson 131

// const oneWord = function(str) {
//     return str.replace(/ /g, ``).toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [firstWord, ...others] =str.split(` `);
//     return [firstWord.toUpperCase(), ...others].join(` `);
// };

// //higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
// console.log(`Transformed string: ${fn(str)}`);

// console.log(`Transformed by: ${fn.name}`);
// }

// transformer(`JavaScript is the best`, upperFirstWord)//upperFirstWord is callback function
// transformer(`Helo lolo yep lala`, oneWord)//oneWord is callback function.

// //we use callback functions in JS all the time
// const high5 = function() {
//     console.log(`Hi`);
// }

// document.body.addEventListener(`click`, high5);//high5 is callback function

// const one = [`Jonas`, `Martha`, `Adaam`].forEach(high5);
// console.log(one);

//*------------------Lesson 132

//Function returning a function

// const greet = function(greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greeterHey = greet(`Hey`);
// greeterHey(`Jim`);
// //OR in one go
// greet(`Hello`)(`Jimmy`);


//the same but in arrow function:
// const greet =  greeting => name => console.log(`${greeting} ${name}`);
// greet(`Hoho`)(`Lucy`)


//*------------------Lesson 133

// const lufthansa = {
//     airline: `Lufthansa`,
//     iataCode: `LH`,
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}`, name
//         })
//     }
// };

// lufthansa.book(239, `Jonas`);
// lufthansa.book(635, `Victoira`)

// const eurowings = {
//     airline: `Eurowings`,
//     iataCode: `EW`,
//     bookings: []
// }

// const book = lufthansa.book; //we brought out a function (as a variable)out of an object to reuse it in another situations
// //does not work/
// //BUT this. keyword in this situation would point to Lufthansa object - which we dont want.
// //book(23, `Sarah`);
// //there are three methods: call, apply and bind

// //CALL method:
// book.call(eurowings, 23, `Aisha`)//the first word will be where the THIS keyword will point to
// console.log(eurowings);

// book.call(lufthansa, 239, `Mary`)
// console.log(lufthansa);

// const swiss = {
//     airline: `Swiss airlines`,
//     iataCode: `SA`,
//     bookings: []
// }

// book.call(swiss, 111, `Leny`);
// console.log(swiss);

// //Apply methid (similar to CALL method, but doesnt recieve the list of arguments after the THIS keyword statement, instead it will take an ARRAY). Not much used anymore nowadays

// const flightData = [583, `George`];
// book.apply(swiss, flightData)
// console.log(swiss);

// //this one below is the same but using CALL and spread operator
// book.call(swiss, ...flightData)

//*------------------Lesson 134

//BIND method:
//it does not immediately calls the function, instead it returns a new function where THIS keyword is BOUND, so it set to whatever value we set to bind

// const bookEW = book.bind(eurowings);//new function where THIS KEYWORD is ALWAYS eurowings
// const bookLH = book.bind(lufthansa)
// const bookSA = book.bind(swiss)
// bookEW(23, `Mathew`)
// bookLH(256, `Babe`)
// bookSA(123, `Mary`)

// //preset for specific
// const bookEW23 = book.bind(eurowings, 23); //so it is bound to eurowings and automatically fills in the first argument in the function, we only need to enter the second argument
// bookEW23(`Victoria`)
// bookEW23(`Olga`)

// //Objects used together with eventListeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// };
// document.querySelector(`.buy`).addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa))// (`click`, lufthansa.buyPlane) - THIS keyword in this case will point to the element (button), so we have to bind it to the object

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23)//null for binding with Non existing object, 0.23 for the first argument (rate)
// console.log(addVAT(100));
// //or other way:
// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate
//     }
// }

// const addVAT2 = addTaxRate(0.23)
// console.log(addVAT2(100));

//?------------------Challenge #1 135 - PASSED

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     // spreadOptions: options.join(`\n`)

//     displayResults: function(type = `array`) {
//         if (type === `string`) {
//             console.log(`Poll results are ${this.answers.join(`, `)}`);
//         } else {
//             console.log(this.answers);
//         }
// }};


// const registerNewAnswer = function() {
//     const answer = Number(prompt(`${poll.question} \n ${poll.options.join(`\n`)} \n (Write option number)`))
//     if(answer<=3 && answer>=0) {
//         poll.answers[answer]++
//         console.log(poll.answers);
//     } else {
//         console.log(`Incorrect value. Please chose between 0-3`)
//     }
// const answerDisplay = poll.displayResults.bind(poll)
// answerDisplay(`string`);
// };


// const promptWin = document.querySelector(`.poll`).addEventListener(`click`, registerNewAnswer);

// //BONUS:

// const testData1 = {
//     answers:[5, 2, 3]
// };

// const testData2 = {
//     answers:[1, 5, 3, 9, 6, 1]
// };

// const test1= poll.displayResults.bind(testData1)
// const test2= poll.displayResults.bind(testData2)

// test1(`string`);
// test1(`array`);
// test2(`string`);
// test2(`array`);

//*------------------Lesson 136

// const runOnce = function() {
//     console.log(`This will never run again`);
// }
// runOnce();

// //instead we do this:
// (function() {
//     console.log(`This will never run again`);
    
// })();


// // for arrow function:
// (() => console.log(`This will ALSO never run again`))();

// {
//     const isPrivate = 2;
//     var notPrivate = 333;
// }

// console.log(notPrivate);//since it is VAR then is will be accessed
// console.log(isPrivate);//it wont see the var in the inner scope from this global scope, so the var is private

//*------------------Lesson 137










