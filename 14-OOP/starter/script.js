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
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

Victoria.calcAge();
// console.log(Victoria.__proto__);
// console.log(Victoria.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(Victoria)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// console.log(Victoria);

//---
Person.prototype.species = `Homosapiens`;
// console.log(Victoria.species);
// console.log(Olga);

// console.log(Victoria.hasOwnProperty(`firstName`)); //true
// console.log(Victoria.hasOwnProperty(`species`)); //false, since its is coming fron a prototype and its not it;s direct property

//*---------------- LESSON 210
//Theory about prototype

//*---------------- LESSON 211

// console.log(Victoria.__proto__);
// console.log(Victoria.__proto__.__proto__);

// console.log(Person.prototype.constructor);

const arr = [1, 2, 5, 2, 5, 2];
// console.log(arr.__proto__); //each array inherits all methods from the default array default construction
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__); //leads to the object.prototype

//we add a new method to an array construction and we can call this method anytime (shouldnt use this, may be on a small projects, for maintanence reasons and if JS updates with the same method name but different action)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector(`h1`);
// console.dir(x => x + 1);

//?---------------- LESSON 212 CHALLENGE#1 - PASSED

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  // console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  // console.log(this.speed);
};

const bmw = new Car(`BMW`, 120);
const mercedes = new Car(`Mercedes`, 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

//*---------------- LESSON 213
//CLASSES

//class expression:
// const Person = class {}
//OR
//Class declaration:
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl(`Jessica`, 1980);

// console.log(jessica);

// console.log(jessica.__proto__);
// console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  // console.log(`Hey, ${this.firstName}`);
};
jessica.greet();

//1. classes are NOT hoisted (means we can NOT use them BEFORE they are declared)
//2. Classes are 1st class cityzens (we can pass them to functions and to return them from functions)
//3. Classes are executed in `strict mode`

//*---------------- LESSON 214
//GETTERS and SETTERS

const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 300],

  // to add a getter to this object :
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //set - will add a new mov into the movements, must have an argument
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //we write it just like a usual object property

account.latest = 50;
console.log(account.movements);

//setter is great for data validation:

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // console.log(2037 - this.birthYear);
  }
  //OR
  get age() {
    return 2037 - this.birthYear;
  }
  //set a property that already exists:
  set fullName(name) {
    // console.log(name);
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}
const jess = new PersonCl2(`jess pess`, 1980);
console.log(jess);
