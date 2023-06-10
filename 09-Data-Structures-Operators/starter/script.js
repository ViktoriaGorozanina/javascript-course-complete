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
};
//destructuring by function:
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del sol, 21`,
  mainIndex: 2,
  starterIndex: 2,
});
//...the missing values will be replaced by default values from above in function
restaurant.orderDelivery({
  address: `Muhu 4 - 42`,
  starterIndex: 1,
});

//Destructuring OBJECTS
const { name, openingHours, categories } = restaurant;

console.log(restaurant);
console.log(name, categories, openingHours);
//to rename the variable that are extracted from an object:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//to retrieve data from somewhere lese without knowing for sure what it is (i.e. we might call it menu but in the source it will be called StarterMenu)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables (different from arrays)
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); //to make it work we have to wrap it in ( )
console.log(a, b);

//destructuring nested objects.
const {
  fri: { open: o, close: c }, //renamed them too just for fun
} = openingHours;
console.log(o, c);

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
