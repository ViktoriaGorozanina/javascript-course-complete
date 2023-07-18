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
const greet =  greeting => name => console.log(`${greeting} ${name}`);
greet(`Hoho`)(`Lucy`)

