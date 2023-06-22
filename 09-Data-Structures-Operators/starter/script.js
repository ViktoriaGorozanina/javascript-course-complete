'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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

//*------------Lesson 111
//New way of looping

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); //all element are individually logged now
//possible to use Continue or Break words
console.log(...menu.entries());

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`); //oldschool way, we can destructure array instead:
} //getting all items as arrays with the index and the array element itself
//new way:
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

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
// //to retrieve data from somewhere lese without knowing for sure what it is (i.e. we might call it menu but in the source it will be called StarterMenu)
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
//By usung SPREAD OPERATOR we will create a new array using this array but with some new elements in the beginning:

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
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

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
// //SHORT CIRCUITING means that if first value (with and or or operator) is a truthy value then it will return it immediately
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
// rest1.owner &&= `<Anonymous>`; //replaced

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
