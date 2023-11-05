//Exporting module

console.log(`Exporting module`);

const shippingCost = 10;
const cart = [];

export const addToCart = function (item, quantity) {
  cart.push({ item, quantity });
  console.log(`${quantity} ${item} added to cart`);
};

const totalPrice = 2.25;
const totalQuantity = 55;

export { totalPrice, totalQuantity };
