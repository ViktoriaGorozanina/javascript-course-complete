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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
  //   return `${firstName} retires in ${retirement} years`;
};
