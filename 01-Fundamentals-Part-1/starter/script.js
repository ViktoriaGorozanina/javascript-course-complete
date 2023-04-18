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

// let weightMark = 78;
// let heightMark = 1.69;
// let weightJohn = 92;
// let heightJohn = 1.95;

// // weightMark = 95;
// // heightMark = 1.88;
// // weightJohn = 85;
// // heightJohn = 1.76;

// let bmiMark = weightMark / (heightMark * heightMark);
// let bmiJohn = weightJohn / heightJohn ** 2;

// let markHeigherBMI = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn, markHeigherBMI);
// let whosBmi;
// if (bmiMark > bmiJohn) {
//   whosBmi = `Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`;
// } else {
//   whosBmi = `John's  BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`;
// }
// console.log(whosBmi);

//* 20 TYPE CONVERSION AND COERCION
// CONVERSION
// let inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(inputYear + 18);

// // COERCION
// console.log(`I am ` + 23 + ` years old`); // + operator makes coercion into a String automatically
// console.log(`I am ` + `23` + ` years old`);

// console.log(`23` - `10` - 3); // - operator DOES NOT make coercion into a string automatically, it converts to Numbers instead

// console.log(`23` * `2`); // * operator makes coercion into a Number automatically
// console.log(`23` / `2`); // / operator makes coercion into a Number automatically

//* 21 TRUTHY and FALSY VALUES
// 0, ``, undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(`hey`));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(``));

// let money = 0;
// if (money) {
//   //if statement is trying to convert everithing to Boolean
//   // so "if Money is True value then perform this. if Falsy value then other"
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You shoould get a job`);
// }

// let height;
// if (height) {
//   console.log(`yaay height is defined`);
// } else {
//   console.log(`height is not defined`);
// }

//* 22 EQUALITY OPERATORS == vs ===

// const age = 18;

// if (age === 18) {
//   console.log(`You got it`);
// }

// //OR
// if (age === 18) console.log(`You got it`); // if its only if we can write it in one line

// // const favourite = prompt(`WHats your fav number?`);
// // console.log(favourite);
// // //result = string `23`

// // if (favourite == 23) {
// //   // `23` == 23 - coercion into a number
// //   console.log(`cool`);
// // }

// // -----------------------

// const favourite = Number(prompt(`WHats your fav number?`));
// console.log(favourite); // we add Number converter

// if (favourite === 23) {
//   // `23` == 23 - coercion into a number
//   console.log(`cool`);
// } else if (favourite === 7) {
//   console.log(` ok fine`);
// } else {
//   console.log(`go home`);
// }

// if (favourite !== 23) console.log(`whyy?`); // " if fav IS NOT EQUAL TO then execute ..."

//* 23,24 BOOLEAN LOGIC

// const hasDriversLicence = true; //a
// const hasGoodVision = true; //b

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;
// if (shouldDrive) {
//   console.log(`she can drive`);
// } else {
//   console.log(`do not drive`);
// }

// const isTired = false; // c

// const heShouldDrive = hasDriversLicence && hasGoodVision && !isTired;
// if (heShouldDrive) {
//   console.log(`he can drive`);
// } else {
//   console.log(`do not drive`);
// }

//? 25 CHALLENGE 3
// const dolphinsFirst = 96;
// const dolphinsSecond = 124;
// const dolphinsThinrd = 89;
// const dolphinsAverage = (dolphinsFirst + dolphinsSecond + dolphinsThinrd) / 3;
// console.log(dolphinsAverage);

// const koalasFirst = 88;
// const koalasSecond = 91;
// const koalasThinrd = 130;
// const koalasAverage = (koalasFirst + koalasSecond + koalasThinrd) / 3;
// console.log(koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log(`Dolphins win!`);
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//   console.log(`Koala win!`);
// } else if (
//   dolphinsAverage === koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log(`Its a draw!!!`);
// } else {
//   console.log(`you both loose!`);
// }

//* 26 SWITCH STATEMENT

// const day = `monday`;

// switch (day) {
//   case `monday`: // day === monday
//     console.log(`Today is the day`);

//     break;
//   case `tuesday`:
//     console.log(`Its tomorrow`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`its wednesday and thursday`);
// }

//* 27 STATEMENTS AND EXPRESSIONS

// // these ar expressions
// 4 + 3;
// 1941;
// true && false && !false;

// // these are statements
// if (23 > 10) {
//   const str = `23 is bigger`;
// }

// // basically what has ; at the end  is a statement.
// //! we can use only expressions in TEMPLATE LITERALS ${}

//* 28 CONDITIONAL (TERNARY) OPERATOR

// //similar to if else statement but all in one line
// const age = 23;
// age >= 18 ? console.log(`Im grown up!`) : console.log(`I am a kid `);
// // this method is often used as it is whon below
// const grownUp = age >= 18 ? `Im growm up` : `Im a kid`;
// console.log(grownUp);
// //! also WE CAN USE IT IN TEMPLATE LITERALS since this is an expression!
// console.log(`yaaay ${age >= 18 ? `Im growm up` : `Im a kid`}`);

//? 29 CHALLENGE 4

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// const fullBill = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total amount is ${fullBill}`
// );
