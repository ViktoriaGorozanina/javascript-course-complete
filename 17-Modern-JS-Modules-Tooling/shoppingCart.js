//Exporting module

//Blocking code
// console.log(`start fetching`);
// await fetch(`https://jsonplaceholder.org/users`); //block execution not only of the module nut the main code too
// console.log(`Fin`);

console.log(`Shopping cart Exporting module`);

const shippingCost = 10;
const cart = [];

// export const addToCart = function (item, quantity) {
//   cart.push({ item, quantity });
//   console.log(`${quantity} ${item} added to cart`);
// };

const totalPrice = 2.25;
const totalQuantity = 55;

export { totalPrice, totalQuantity, cart };

export default function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
}
