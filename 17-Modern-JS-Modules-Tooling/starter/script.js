//Imporrting module
console.log(`Importing module`);
// import './shoppingCart.js';

// import { addToCart, totalPrice as price } from './shoppingCart.js';
// addToCart(`iron`, 2);

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart(`bread`, 7);
