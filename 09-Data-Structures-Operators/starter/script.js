'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2 + 3]]: {
    //computed the value just to show how it can work
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals:
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //ES6, easier sintax for methods/functions in objects:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    // console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//*-----------------lesson 103?

// //Receieve 2 return values from a function:
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
// //Nested destructuring:
// const nested = [1, 2, [5, 6]];
// const [, , [ha, ho]] = nested;
// console.log(ha, ho);
// // Default valeus (if we try to reach an element that is not existing in the array the we can set a default value):
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// //
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //or
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, second] = restaurant.categories;
// console.log(first, second);
// // to skip elements we use space
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// // to swap it we reassign it:
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//*-----------------lesson 104
// //destructuring by function:
// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Via del sol, 21`,
//   mainIndex: 2,
//   starterIndex: 2,
// });
// //...the missing values will be replaced by default values from above in function
// restaurant.orderDelivery({
//   address: `Muhu 4 - 42`,
//   starterIndex: 1,
// });

// //Destructuring OBJECTS
// const { name, openingHours, categories } = restaurant;

// console.log(restaurant);
// console.log(name, categories, openingHours);
// //to rename the variable that are extracted from an object:
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// //to retrieve data from somewhere else without knowing for sure what it is (i.e. we might call it menu but in the source it will be called StarterMenu)
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables (different from arrays)
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); //to make it work we have to wrap it in ( )
// console.log(a, b);

// //destructuring nested objects.
// const {
//   fri: { open: o, close: c }, //renamed them too just for fun
// } = openingHours;
// console.log(o, c);

//*----------Lesson 105
//By using SPREAD OPERATOR we will create a new array using this array but we can add some new elements:

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// //spread operator:
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// //we want to log individual elements (alltogether) of this new array:
// console.log(...newArr); //it will show like data 1 2 7 8 9 not array[1, 2, 7, 8, 9]
// //taking an existing array in the object above and creating a new one by adding some elemnts
// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //join arrays together:
// const menuJoin = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menuJoin);
// //Spread operator works on other Iterables too: array, strings, maps, sets. Not objects. We use operator to build an arrwy or to pass values to a function
// const str = `JOnas`;
// const letters = [...str, ` `, `s.`];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} JOnas`);//wont work - not building an array not passing value to a function
// //real-world exxample:
// // const ingredients = [
// //   prompt(`let\'s make pasta!
// // ingredient 1?`),
// //   prompt(`
// // ingredient 2?`),
// //   prompt(`
// // ingredient 3?`),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients); //function from the object above

// // spread operator works now with Objects too (in the last JS versions):
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: `Guillome`,
// };
// console.log(newRestaurant);

// const restaurantCopy = {
//   ...restaurant,
// };
// restaurantCopy.name = `New resto`;
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//*-----------------lesseon 106

//REST PATTERN
// It is used to pack elements into an array

// 1) Destructuring:

// const arr = [1, 2, ...[3, 4]]; //SPREAD operator is used on the RIGHT side of =
// //exmpl 1
// const [a, b, ...others] = [1, 2, 3, 4, 5]; //REST PATTERN is use on the LEFT side of =
// console.log(a, b, others);

// //exmpl 2
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; //it alsways must be the last in the destructuring assingment
// console.log(pizza, risotto, otherFood);

// //creating an object with REST pattern
// const { sat, ...weekday } = restaurant.openingHours;
// console.log(weekday);

// // 2) Functions:
// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7]; //spread
// add(...x);

// //===
// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);

//*-----------------lesson 107
// //short-circuiting (&& and ||)
// // Use any DATA type, they can return any data type, they do short-circuiting
// console.log(`=====OR ||=====`);
// //SHORT CIRCUITING means that if first value (with AND or OR operator) is a truthy value then it will return it immediately
// console.log(3 || `Jonas`);
// console.log(`` || `Jonas`);
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || `` || `Hello` || 23);

// //exmpl (we dont know if it exists but we want to log it):
// // restaurant.numGuests = 23; //does not exist
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //since it doesnt exeist it will be replaced by 10 by default
// //however if it will be = 0 (instead of 23)  then we will have a problem since its a faulsy result (solution in the next lesson)
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10; //the same result as above
// console.log(guests2);

// console.log(`=====AND &&=====`);
// //it returns a faulsy value (opposite to OR operator)? if no then the last one since it didnt find any faulsy and returned any that left
// console.log(0 && `Jonas`);
// console.log(7 && `Jonas`);
// console.log(`Hello` && 23 && null && `Jonas`); //it will stop at faulty value (null)

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`muchrooms`, `spinach`);
// }
// // or another way (replacement for if statemnets SOMETIMES):
// restaurant.orderPizza && restaurant.orderPizza(`mush`, `spin`); //if the 1 doesnt exist then it will stop on it and do nothing, if it does exist then it will proceed to the second one

//*-----------------lesson 108
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; //since restaurant.numGeuests is a faulsy value then it goes to the second operator which is 10
// console.log(guests);

// //Nullish Coalescing operator (??)
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect); // now we get 0,because this operator works with the idea of KNOWLEDGE values instead of FAULSY values (nullish values are ONLY null or undefined, NOT 0 or empty string ` `)

//*-----------------lesson 109
// //Logical Assignment Operators  ( )

// const rest1 = {
//   name: `Capri`,
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: `La Piazza`,
//   owner: `Giovanni Rossi`,
// };

// //OR assingment operator:
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// rest2.numGuests ||= 10; //this line is THE SAME as the line above but just in a more concise way
// //nullish assingment operator
// rest1.numGuests ??= 30; //this way it will accept 0 value since it is not null or undefined

// console.log(rest1);
// console.log(rest2);

// //----
// rest1.owner = rest1.owner && `<Anonymous>`; //did not replace, undefined - since there is no owner in the rest1
// console.log(rest1);

// rest2.owner = rest2.owner && `<Anonymous>`; //replaced the value because as we learned before && operator skips the truthy value and returns the faulsy one or if there is none then the last truthy one

// rest1.owner ??= `<Anonymous>`; //replaced
// console.log(rest1);
// rest2.owner &&= `<Anonymous>`; //replaced

// console.log(rest1);
// console.log(rest2);

//?------------Challenge #1
// const game = {
//   team1: `Bayern Munich`,
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       `Neuer`,
//       `Pavard`,
//       `Martinez`,
//       `Alaba`,
//       `Davies`,
//       `Kimmich`,
//       `Goretzka`,
//       `Coman`,
//       `Muller`,
//       `Gnarby`,
//       `Lewandowski`,
//     ],
//     [
//       `Burki`,
//       `Shcukz`,
//       `Hummels`,
//       `Akanji`,
//       `Hakimi`,
//       `Weigl`,
//       `Witsel`,
//       `Hazard`,
//       `Brandt`,
//       `Sancho`,
//       `Gotze`,
//     ],
//   ],
//   score: `4:0`,
//   scored: [`Lewadowski`, `Gnarby`, `Lewandowski`, `Hummels`],
//   date: `Nov 9th, 2037`,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1== Passed
// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// //or
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2== Passed
// // const [gk, fieldPlayers] = [players1.shift(), players1];
// const [gk, ...fieldPlayers] = players1;
// console.log(fieldPlayers, gk);

// //3== Passed
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4== Passed
// const players1Final = [...players1, `Thiago`, `Countinho`, `Perisic`];
// console.log(players1Final);

// //5== Partially passed
// // const { team1, draw, team2 } = game.odds;
// //or
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6== Not passed
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored. `);
// };

// // printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimich`);
// printGoals(...game.scored);

// //7== Not passed
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team1 > team2 && console.log(`Team 2 is more likely to win`);

//*------------Lesson 111
//New way of looping

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); //all element are individually logged now
// //possible to use Continue or Break words
// console.log(...menu.entries());

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); //oldschool way, we can destructure array instead:
// } //getting all items as arrays with the index and the array element itself
// //new way:
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

//*------------Lesson 112
//Enhanced object literals ES6
//....brought Openng hours out of the restaurant object
//Before ES6 we would need to write into the restaurant object `openingHours: openingHours,`
//instead we write: just `openingHours,`
//2nd enhancement:  ES6, easier sintax for methods/functions in objects: oldway - `item: function(el, el2) {}`, new way - `item(el, el2) {}`
//3rd enhancement: we can write properties of an object as calculations or whatever (exmpl: [weekdays[4]]: {open: 11,} OR [`day-${2 + 4}`]: {...})

//*------------Lesson 113
// optional chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon); // returns undefined which is not existing property

// // instead we write: (with optional chaining)
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //exapmle
// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day} we open at ${open}`); // on sat it opens at 0 - null. so we have to use nullish coalesing operator (changed from || to  ??)
// }

// //Methods

// console.log(restaurant.orderRisotto?.(0, 1) ?? `Metthod does not exist`); //if we wouldnt use ?. then it would give an error since the method does not exist

// //Arrays
// const users = [
//   {
//     name: `Victoria`,
//     email: `hoho`,
//   },
// ];
// console.log(users[0]?.year ?? `User array empty`);
// //by writing as it is shown above we get the same result as below------
// if (users.length > 0) console.log(users[0].name);
// else console.log(`user empty`);

//*------------Lesson 114
// Looping objects: Object keys, values and entries/

//Looping over property names (keys):
// const properties = Object.keys(openingHours);
// console.log(properties);
// console.log(Object.keys(openingHours));

// console.log(`We are open on ${properties.length} days`);

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
// //or
// // for (const day of properties) {
// //   console.log(day);
// // }

// //modified what is above to make it cooler:
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr); //result We are open on 3 days: thu fri sat

// //Property values:
// const values = Object.values(openingHours);
// console.log(values);

// //Entries : (returns keys AND values)
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//?------------Lesson 115 CHALLENGE #2

// const game = {
//   team1: `Bayern Munich`,
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       `Neuer`,
//       `Pavard`,
//       `Martinez`,
//       `Alaba`,
//       `Davies`,
//       `Kimmich`,
//       `Goretzka`,
//       `Coman`,
//       `Muller`,
//       `Gnarby`,
//       `Lewandowski`,
//     ],
//     [
//       `Burki`,
//       `Shcukz`,
//       `Hummels`,
//       `Akanji`,
//       `Hakimi`,
//       `Weigl`,
//       `Witsel`,
//       `Hazard`,
//       `Brandt`,
//       `Sancho`,
//       `Gotze`,
//     ],
//   ],
//   score: `4:0`,
//   scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
//   date: `Nov 9th, 2037`,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//==1 PASSED
// for (let [i, scored] of Object.entries(game.scored)) {
//   console.log(`Goal ${+i + 1}: ${scored}`);
// }

// for (const [i, scored] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${scored}`);
// //

// console.log(Object.entries(game.scored));
// console.log(game.scored.entries());

//==2 PASSED
// console.log(`task 2`);

// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//   sum += odd;
// }

// const oddAv = sum / game.odds.length;
// console.log(oddAv);

// const odds = Object.values(game.odds);
// let sum = 0;

// for (let odd of odds) {
//   sum += odd;
// }

// const average = sum / odds.length;
// console.log(average);

// TEACHER'S SOLUTION:.
// let odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) average += odd;
// average /= odds.length;

// console.log(average);

//==3 PASSED
// console.log(`task 3`);

// const odd = Object.keys(game.odds);
// let oddPrint;
// let outcome = ``;
// for (let [key, value] of Object.entries(game.odds)) {
//   if (key === `x`) {
//     outcome = `draw`;
//   } else {
//     const teamNumber = key.slice(4);
//     outcome = `victory ${game['team' + teamNumber]}`;
//   }

//   oddPrint = `Odd of ${outcome}: ${value}`;
//   console.log(oddPrint);
// }

//TECHERS SOLUTION:

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//==BONUS
// console.log(`task BONUS`);

// const scorers = {};

// for (let player of game.scored) {
//   if (scorers.hasOwnProperty(player)) {
//     scorers[player]++;
//   } else {
//     scorers[player] = 1;
//   }
// }
//OR:
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

//*------------Lesson 116

// const orderSet = new Set([
//   `Pasta`,
//   `Pizza`,
//   `Pizza`,
//   `Risotto`,
//   `Pasta`,
//   `Pizza`,
// ]);

// console.log(orderSet); //it will onlu print (3) [Pasta, Pizza, Risotto]

// console.log(new Set(`Vic`));

// //working with sets
// console.log(orderSet.size); // 3 shows how many unique elements are in the set
// console.log(orderSet.has(`Bread`)); // false - shows if there is a desired element

// orderSet.add(`Garlic Bread`);
// orderSet.add(`Garlic Bread`); //it will add only one Bread
// console.log(orderSet);

// orderSet.delete(`Pasta`); //deletes Pasta
// console.log(orderSet);

// console.log(orderSet[2]); //wont work - undefined

// for (const order of orderSet) console.log(order); //looping is possible through a set

// //usecase:
// const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
// const staffUnique = new Set(staff);

// console.log(staffUnique);
// //lets convert it to an array(using spread operator):
// const staffNew = [...new Set(staff)];
// console.log(staffNew);

// console.log(staffUnique.size);
// console.log(new Set(`Victoria`).size); //counts letters

//*------------Lesson 117
//Maps: fundamentals

//Data structure that we can use to map values to keys

//
//*------------Lesson 118
//another way to populate a new map:

// const question = new Map([
//   [`question`, `What is the best programming language?`],
//   [1, `C`],
//   [2, `Java`],
//   [3, `Javascript`],
//   [`correct`, 3],
//   [true, `correct!!`],
//   [false, `Try again`],
// ]);

// console.log(question);
// //COnvert object to map:
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //FOr loop:
// //Quizz
// console.log(question.get(`question`));
// for (const [key, value] of question) {
//   if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt(`Your answer:`));
// console.log(answer);

// console.log(question.get(answer === question.get(`correct`)));

// //Convert map to an array:
// console.log(...question);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

//*------------Lesson 119
//CHoose from data structure:

//?------------Lesson 120 CHALLENGE #3

// const game = {
//   team1: `Bayern Munich`,
//   team2: `Borrussia Dortmund`,
//   players: [
//     [
//       `Neuer`,
//       `Pavard`,
//       `Martinez`,
//       `Alaba`,
//       `Davies`,
//       `Kimmich`,
//       `Goretzka`,
//       `Coman`,
//       `Muller`,
//       `Gnarby`,
//       `Lewandowski`,
//     ],
//     [
//       `Burki`,
//       `Shcukz`,
//       `Hummels`,
//       `Akanji`,
//       `Hakimi`,
//       `Weigl`,
//       `Witsel`,
//       `Hazard`,
//       `Brandt`,
//       `Sancho`,
//       `Gotze`,
//     ],
//   ],
//   score: `4:0`,
//   scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
//   date: `Nov 9th, 2037`,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Coding Challenge #3

// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// //1 task - Passed
// const events = new Set([...gameEvents.values()]);
// console.log(events); //not an array

// const events1 = [...new Set(gameEvents.values())];
// console.log(events1);

// //2 task - Passed
// gameEvents.delete(64);
// console.log(gameEvents);

// //3 task - Passed
// const avgTimeEv = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${avgTimeEv} minutes`);

// //4 task - Passed
// for (const [key, event] of gameEvents) {
//   const half = key <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`;
//   console.log(`${half} ${key}: ${event}`);
// }

//*------------Lesson 121

// const airline = `TAP Air Portugal`;
// const plane = `A320`;

// console.log(plane[0]);
// console.log(`A320`[0]);

// console.log(airline.length);
// console.log(`airlinestring`.length);
// console.log(`airlinestring`.indexOf(`r`));
// console.log(`airlinestring`.lastIndexOf(`r`));

// console.log(airline.indexOf(`Portugal`));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(` `)));
// console.log(airline.slice(airline.lastIndexOf(` `) + 1));

// console.log(airline.slice(-2)); //gives last two itmes
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === `B` || s === `E`) console.log(`Middle seat`);
//   else console.log(`Window seat`);
// };
// checkMiddleSeat(`11B`); //FYI B is E middle seat in a plane
// checkMiddleSeat(`23C`);
// checkMiddleSeat(`3E`);

//*------------Lesson 122

// const airline = `TAP Air Portugal`;
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log(`TAP Air Portugal`.toLowerCase());

// //Fix capitalization in names:
// const passenger = `jonas`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails:
// const email = `hello@gmail.com`;
// const loginEmail = `HellO@GmaIl.com \n`; // \n - enter

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// //to do the same in one step:
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);//true

// //to replace parts of strings:
// const priceGB = `288,978£`;
// console.log(priceGB);
// const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);

// console.log(priceUS);

// const announcement = `COme to the boarding door 23! door door`
// console.log(announcement.replace(`O`, `o`));
// console.log(announcement.replace(`door`, `gate`));//replaces only first element
// console.log(announcement.replaceAll(`door`, `gate`));//replaces all elements
// //before it was done by a regular expression:
// console.log(announcement.replace(/door/g, `gate`));//g stands for global

// //bolleans:
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.startsWith(`A`));

// if (plane.includes(`Airbus`) && plane.endsWith(`neo`))  {
//   console.log(`yayy`);
// } else {
//   console.log(`no`);
// };

// const checkBaggage = function(items) {
// const baggage = items.toLowerCase();
// if(baggage.includes(`sock`) || baggage.includes(`wolf`)) {
//   console.log(`Go home!`);}
//   else {
//     console.log(`welcome aboard`);
//   }
// };

// checkBaggage(`I have socks, lock, bag, banana, bycicle`);
// checkBaggage(`I have lipstick, sandwich, DOG, snEaker, babY`);

//*------------Lesson 123
// //SPLIT
// console.log(`a+very+nice+string`.split(`+`));
// //usecase:
// const [firstName, lastName] = `Victoria Gorozanina`.split(` `);
// console.log(firstName);
// console.log(lastName);

// //JOIN usecase:
// console.log([`Mrs.`, firstName, lastName.toUpperCase()].join(` `));//Mrs. Victoria GOROZANINA

// //Capitalize every word
// const capitalizeName = function(fullname) {
// const names = fullname.split(` `);
// const namesUpper = [];
// for (const nam of names) {
//   // namesUpper.push(nam[0].toUpperCase() + nam.slice(1));  //OR:
//   namesUpper.push(nam.replace(nam[0], nam[0].toUpperCase()));

// }
// console.log(namesUpper.join(` `));
// };

// capitalizeName(`victoria evgenyevna gorozanina`)
// capitalizeName(`marie ann smith`)


// //padding a string
// const message = `Go to gate 23`;
// console.log(message.padStart(20, `+`));
// console.log(message.padEnd(20, `+`));
// console.log(message.padStart(25, `+`).padEnd(35, `-`));//first step it will make it 25, then second step it will make it 35 from 25

// //usecase:
// //credit card masked numbers
// const maskCreditCard = function(number) {
// // const str = String(number);//OR:
// const str = number +``;
// const lastNum = str.slice(-4);
// return lastNum.padStart(str.length, `*`);
// };
// console.log(maskCreditCard(4589265435892547));

// //Repeat method:
// const message2 = `Message tra lala... Yayy `;
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3);
// planesInLine(8);

//?------------Challenge #4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const separate = text.split(`\n`);
  const splitArr = [];

    for(const el of separate) {
    const trimmed = el.trim().toLowerCase();
    const split = trimmed.split(`_`);
    splitArr.push(split)
  };

 let camelCaseArr=[];
  for(const [el1, el2] of splitArr){
    // console.log(el1, el2);
    const camelCase = el1 + el2.replace(el2[0], el2[0].toUpperCase());
    const padding = camelCase.padEnd(20, ` `);
    camelCaseArr.push(padding);

    // console.log(camelCase);
    // return camelCase;
  }

  for(let i=0; i<camelCaseArr.length; i++) {

  const tick = camelCaseArr[i] + (`✅`.repeat(i+1));
  console.log(tick);
  }

});

//TEACHER's SOLUTION:

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});












