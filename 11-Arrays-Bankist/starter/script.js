'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//?----------------------Lesson 142

// let arr = [ `a`, `b`, `c`, `d`, `e`]; 


// //SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2,3));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));//last element
// console.log(arr.slice(0, -2));// minus means EXCEPET last two

// //SPLICE
// const arr2 = arr.splice(-1);//deleted the last element of the arr and left the last element to create a new array arr2
// console.log(arr);
// console.log(arr2);

// arr.splice(1, 2)//deletes/extracts all elements from 1 to 2
// console.log(arr);

// //REVERSE
// arr = [ `a`, `b`, `c`, `d`, `e`]; 
// const arr3 = [`j`,`i`,`h`,`g`,`i`];
// console.log(arr3.reverse());

// //CONCAT
// //joins arrays

// const letters = arr.concat(arr3, arr2);
// console.log(letters);
// console.log(arr);

// //JOIN
// console.log(letters.join(`-`));

//?----------------------Lesson 143

// const arr = [23, 11, 64]
// console.log(arr[0]);//before we would do this
// console.log(arr.at(0));//now we can do this with the same result

// console.log(arr[arr.length -1]);// the way we would do it before
// console.log(arr.slice(-1)[0]);//or this way. [means value at this position]
// console.log(arr.at(-1));// this is how we can do it now

//?----------------------Lesson 144

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//FOR-OF method:
for (const movement of movements) {
  if(movement>0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
//or like :
// for (const [i, movement] of movements.entries()) {
//   if(movement>0) {
//     console.log(`Movement ${i+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

//BUT forEach method:
movements.forEach(function(movement, index, array) {
  if(movement>0) {
    console.log(`Movement ${index+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
  }
})


//
