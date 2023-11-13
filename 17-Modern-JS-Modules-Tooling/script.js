//Importing module
// console.log(`Importing module`);
// import './shoppingCart.js';

// import { addToCart, totalPrice as price } from './shoppingCart.js';
// addToCart(`iron`, 2);

import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart(`bread`, 7);

// import anyName, { cart } from './shoppingCart';

// anyName(`pizza`, 2);

//*-------------------- LESSON 273

// const res = await fetch(`https://jsonplaceholder.org/users`);
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.org/users`);
//   const data = await res.json();
//   console.log(data);

//   return {
//     firstName: data.at(-1).firstname,
//     lastName: data.at(-1).lastname,
//   };
// };
// const lastPost = getLastPost();
// console.log(lastPost); //it will return a promise so we have to call .then method on it:
// lastPost.then(res => console.log(res));//but instead we can use top-level await

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////
//Not gonna work in browser but will work in NODE.js
// export.addToCart = function (item, quantity) {
//     cart.push({ item, quantity });
//     console.log(`${quantity} ${item} added to cart`);
//   };

//   //Import
//   const { addTocart} = require(`./shoppingCart.js`)
///////////////////////////////
import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: `bread`, quantity: 5 },
    { product: `pizza`, quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone);
