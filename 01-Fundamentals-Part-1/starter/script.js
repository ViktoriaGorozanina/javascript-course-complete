// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

// let PI = 3.1415;

// let country = "estonia";
// let continent = "europe";
// let population = 100000000;
// console.log(country, continent, population);
// console.log(typeof country);

// let age = 30;
// age = 31;

// const ageVictoria = 2023 - 1986;
// const ageKeyna = 2023 - 2012;
// const ageAbdu = 2023 - 2015;
// console.log(ageVictoria, ageKeyna, ageAbdu);

// //! Mathematic operators
// const now = 2023;
// const ageVictoria = now - 1986;
// const ageKeyna = now - 2012;
// const ageAbdu = now - 2015;
// console.log(ageVictoria, ageKeyna, ageAbdu);

// //! Assingment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x*4 = 100
// x++; // x = x + 1
// x--; //x = x - 1

// //! Comparison operators
// console.log(ageVictoria > ageKeyna); // >   <   >=   <=
// console.log(ageKeyna >= 10);
// console.log(now - 1986 > now -2012);

// //* OPERATION PRECENDENCE
// const now = 2023;
// const ageVictoria = now - 1986;
// const ageKeyna = now - 2012;
// console.log(now - 1986 > now - 2012);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10;
// console.log(x, y);

// const averageAge = (ageVictoria + ageKeyna) / 2;
// console.log(ageVictoria, ageKeyna, averageAge);

// //? CHALLENGE 1

// let weightMark = 78;
// let heightMark = 1.69;
// let weightJohn = 92;
// let heightJohn = 1.95;

// weightMark = 95;
// heightMark = 1.88;
// weightJohn = 85;
// heightJohn = 1.76;

// let bmiMark = weightMark / (heightMark * heightMark);
// let bmiJohn = weightJohn / heightJohn ** 2;

// let markHeigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHeigherBMI);

//* TEMPLATE LITERALS and strings

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "im " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`a
// multiple
// line`);

//* If / Else STATEMENTS

// const age = 15;

// if (age >= 18) {
//   console.log("You can start driving licence ");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Boo! go home and study ${yearsLeft} more years`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//? CHALLENGE 1

let weightMark = 78;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

// weightMark = 95;
// heightMark = 1.88;
// weightJohn = 85;
// heightJohn = 1.76;

let bmiMark = weightMark / (heightMark * heightMark);
let bmiJohn = weightJohn / heightJohn ** 2;

let markHeigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHeigherBMI);
let whosBmi;
if (bmiMark > bmiJohn) {
  whosBmi = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
} else {
  whosBmi = `John's  BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
}
console.log(whosBmi);
