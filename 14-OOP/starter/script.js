'use strict';

//*---------------- LESSON 208

//Construter functions:
const Person = function (firstName, birthYear) {
  //Instance properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this:
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // }
};

const Victoria = new Person(`Victoria`, 1986);
//1. new empty object is created
//2. function is called, This keyword = is new empty {}
//3. {} linked to prototype
//4. function automatically returns from the construction function
const Olga = new Person(`Olga`, 2003);
const Jack = new Person(`Jack`, 2015);
// console.log(Victoria, Olga, Jack);

// console.log(Victoria instanceof Person); //true

//*---------------- LESSON 209

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Victoria.calcAge();
console.log(Victoria.__proto__);
console.log(Victoria.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(Victoria)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

console.log(Victoria);

//---
Person.prototype.species = `Homosapiens`;
console.log(Victoria.species);
console.log(Olga);

console.log(Victoria.hasOwnProperty(`firstName`)); //true
console.log(Victoria.hasOwnProperty(`species`)); //false, since its is coming fron a prototype and its not it;s direct property

//*---------------- LESSON 210
