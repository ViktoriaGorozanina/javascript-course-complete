//* 32 ACTIVATING STRICT MODE
"use strict";
//it must be THE FIRST code line
//! it forbids us to do certain things, it creates visible errors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`drive safe`);

// const private = 0;

//* 33  FUNCTIONS

// function logger() {
//   console.log(`My name is`);
// }

// //calling - running - invoking function
// logger();

// //--------------
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 2);
// console.log(appleOrangeJuice);

//* 34  FUNCTION DECLARATIONS vs EXPRESSIONS
// // DECLARATION
// function calcAge1(birthYear) {
//     return `You are ${2023 - birthYear} years old`;
//   }
//   const age1 = calcAge1(1986);
//   console.log(age1);
//   // we can call a function before declaring the function

//   //EXPRESSION
//   const calcAge2 = function (birthYear) {
//     return `You are ${2024 - birthYear} years old`;
//   };

//   const age2 = calcAge2(1986);
//   console.log(age2);

//* 35  ARROW FUNCTIONs

// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1986);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// const vicRetires = yearsUntilRetirement(1986, `Vic`);
// const keynaRetires = yearsUntilRetirement(2012, `Keyna`);
// console.log(`${vicRetires} and ${keynaRetires}.`);

//* 36  FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangesPieces} oranges pieces`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

//* 37 REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1950, `Yo`));

//? CHALLENGE 1

// const calcAverage = (compOne, compTwo, compThree) =>
//   (compOne + compTwo + compThree) / 3;

// let dolphinsAverage = calcAverage(44, 23, 71);
// let koalasAverage = calcAverage(65, 54, 49);

// dolphinsAverage = calcAverage(85, 54, 41);
// koalasAverage = calcAverage(23, 34, 27);

// function checkWinner(teamOneName, teamOneScore, teamTwoName, teamTwoScore) {
//   if (teamOneScore >= 2 * teamTwoScore) {
//     return `${teamOneName} are the winners! (${teamOneScore} vs ${teamTwoScore})`;
//   } else if (teamTwoScore >= 2 * teamOneScore) {
//     return `${teamTwoName} are the winners! (${teamTwoScore} vs ${teamOneScore})`;
//   } else {
//     return `No one wins!`;
//   }
// }

// const winner = checkWinner(
//   `Koalas`,
//   koalasAverage,
//   `Dolphins`,
//   dolphinsAverage
// );
// console.log(winner);

//* 39 ARRAYS

// const friend1 = `Michael`;
// const friend2 = `STeven`;
// const friend3 = `Peter`;

// // instead of that we store this data in an array:
// const friends = [`Michael`, `Steven`, `Peter`];
// const yearss = new Array(1991, 1994, 2008, 2020);

// const firstName = `Jonas`;
// const jonas = [firstName, `Surname`, 2023 - 1991, `teacher`, friends];
// console.log(jonas);

// // Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2020, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//* 40 BASIC ARRAY OPERATIONS (METHODS)

// // ADD elements:
// // PUSH --------------------------
// const friends = [`Michael`, `Steven`, `Peter`];
// // friends.push(`Gary`);
// const newLength = friends.push(`Gary`);
// console.log(friends);
// console.log(newLength);

// // UNSHIFT ----------------------

// friends.unshift(`John`);
// console.log(friends);

// // REMOVE elements
// // POP ----------------------
// friends.pop();
// console.log(friends);

// // SHIFT ----------------------

// friends.shift();
// console.log(friends);

// const removed = friends.shift();
// console.log(friends);
// console.log(removed);

// // INDEX OF ----------------------
// console.log(friends.indexOf(`Steven`));

// const position = friends.indexOf(`Steven`);
// console.log(position);

// // INCLUDES ----------------------
// console.log(friends.includes(`Bob`)); //false
// console.log(friends.includes(`Steven`)); //true

//? CHALLENGE 2
// let bill = [125, 555, 44];
// let tipPers = [15, 20];

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return (bill * tipPers[0]) / 100;
//   } else {
//     return (bill * tipPers[1]) / 100;
//   }
// }

// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(tips);

// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

// console.log(total);

//* 42 OBJECTS

// // USUAL ARRAY
// const friends = [`Michael`, `Steven`, `Peter`];
// const jonasArray = [`Jonas`, `Surname`, 2037 - 1991, `teacher`, friends];
// console.log(jonasArray);

// // OBJECT
// const jonas = {
//   firstName: `Jonas`,
//   surname: `Surname`,
//   age: 2037 - 1991,
//   job: `teacher`,
//   friends: friends,
// };

// console.log(jonas);

//* 43 DOT vs BRACKET NOTATION (retrieve data from objects)

// const friends = [`Michael`, `Steven`, `Peter`];
// const jonas = {
//   firstName: `Jonas`,
//   lastName: `Surname`,
//   age: 2037 - 1991,
//   job: `teacher`,
//   friends: friends,
// };

// console.log(jonas);

// // DOT NOTATION
// console.log(jonas.lastName); //with a dot we can only state an existing property name
// console.log(jonas[`lastName`]); //in brackets we can put any expression that will give us a value equal to any of the properties of the object:
// // example
// const nameKey = `Name`;
// console.log(jonas[`first` + nameKey]);
// //example 2
// const interestedIn = prompt(
//   `What do you want to know about Jonas? (firtName, lastName, age, job or friends)`
// );

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(`I dont have this information`);
// }

// // add property to an object
// jonas.location = `Portugal`;
// jonas[`twitter`] = `@blabla`;
// console.log(jonas[interestedIn]);

// //Challenge
// // `Jonas has 3 friends, and his best friend is called Michael.`

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );

//* 44 OBJECT METHODS

// const friends = [`Michael`, `Steven`, `Peter`];
// const jonas = {
//   firstName: `Jonas`,
//   lastName: `Surname`,
//   job: `teacher`,
//   friends: friends,
//   hasDriversLicense: true,
//   birthYear: 1986,

//   // calcAge: function (birthYear) { //option 1
//   //   return 2023 - birthYear;

//   // calcAge: function () {
//   //   //option 2
//   //   return 2023 - this.birthYear; //using THIS instead of jonas. (dont repeat yourself)
//   // },

//   calcAge: function () {
//     //option 3 - creating a property variable to store the value
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old ${
//       this.job
//     } and he has ${this.hasDriversLicense ? `a` : `no`} drivers license.`;
//   },
// };
// // console.log(jonas.calcAge());
// // // or
// // console.log(jonas[`calcAge`]()); //calling the function
// // console.log(jonas.age); //WE HAVE TO CALL THE CALC>AGE FUNCTION BEFORE!

// //Challenge
// // Jonas is 46 years old teacher and he has a drivers licence.
// // const jonasLicense = jonas.hasDriversLicense ? `a` : `no`;
// console.log(jonas.getSummary());

//? CHALLENGE 3

const mark = {
  firstName: `Mark`,
  weight: 78,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: `John`,
  weight: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

john.calcBmi();
mark.calcBmi(); //a function must be called always!
console.log(mark.bmi, john.bmi);

const winner =
  mark.bmi > john.bmi
    ? `${mark.firstName}'s BMI (${mark.bmi}) is bigger than ${john.firstName}'s BMI (${john.bmi}).`
    : `${john.firstName}'s BMI (${john.bmi}) is bigger than ${mark.firstName}'s BMI (${mark.bmi}).`;

console.log(winner);
