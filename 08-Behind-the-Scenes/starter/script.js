'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you are a millenial`;
//       console.log(str);
//       //creating a new variable with the same name as in the outer scope's variable. It will be used, since variable look=up will stop after searching in this scope.
//       const firstName = `Nick`;
//       //reassigning outer scope's variable
//       output = `New output!`;

//       function add(a, b) {
//         return a + b;
//       }
//       //   console.log(add(2, 3));
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = `Victoria`;
// calcAge(1991);

//-------------------LESSON 85

// console.log(me);
// console.log(job);
// console.log(year);
// var me = `Vic`;
// let job = `Dev`;
// const year = 1986;

//FUnctions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`all Products deleted`);
// }

//Other example

// var x = 1;
// let y = 2;
// const z = 3;

//-------------------LESSON 97

// console.log(this);

// //====Function This
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undifened
// };

// calcAge(1991);

// //----Arrow This
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //this refers to browser window as it is read as it was in a global scope since arrow function doent get its own This
// };

// calcAgeArrow(1980);

// //-------Method This

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year); //points to jonas since jonas was the object-calling the method
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //"method borrowing",so THIS keyword is pointing now to the method of matilda
// matilda.calcAge();
// // console.log(matilda);

// const f = jonas.calcAge;
// f(); // now This is undefined since f is not attached to jonas and it is just borrowing a function, from where This can not point anywhere

//-------------------LESSON 98

// const jonas = {
//   firstName: `Jonas`,
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => console.log(`Hey ${jonas.firstName}`), //we cant use This in arrow functions
// };

// jonas.greet();

//---------------
// const jonas = {
//   firstName: `Jonas`,
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // solution 1
//     // const self = this; //self or That - words are created to replace This in a following function which would be undefined otherwise
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     //Solution 2
//     // Use arrow function instead  - it will go back/inherit then to calcAge method who's This is jonas.
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
// };

// jonas.calcAge();

//---------------
//Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5, 10, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

//----------------------LESSON 99

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: `Jonas`,
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(`Friend`, friend);
// console.log(`Me`, me);
// // me and friend point to the exact the same point in the memory heap where the object data is stored, so it gets replaced there from 30 to 27 and works for both.

//-------------------LESSON 100
// Primitive types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;

console.log(lastName);
console.log(oldLastName);

//Reference types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before marriage :`, jessica);
console.log(`After marriage :`, marriedJessica);

//COpying objects (merges two objects and then returns a new one)
const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;
console.log(`Before marriage :`, jessica2);
console.log(`After marriage :`, jessicaCopy);
