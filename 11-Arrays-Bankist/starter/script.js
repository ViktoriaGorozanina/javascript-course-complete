'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//*----------------------Lesson 142

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

//*----------------------Lesson 143

// const arr = [23, 11, 64]
// console.log(arr[0]);//before we would do this
// console.log(arr.at(0));//now we can do this with the same result

// console.log(arr[arr.length -1]);// the way we would do it before
// console.log(arr.slice(-1)[0]);//or this way. [means value at this position]
// console.log(arr.at(-1));// this is how we can do it now

//*----------------------Lesson 144

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //FOR-OF method:
// for (const movement of movements) {
//   if(movement>0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }
// //or like :
// // for (const [i, movement] of movements.entries()) {
// //   if(movement>0) {
// //     console.log(`Movement ${i+1}: You deposited ${movement}`);
// //   } else {
// //     console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
// //   }
// // }

// //BUT forEach method:
// movements.forEach(function(movement, index, array) {
//   if(movement>0) {
//     console.log(`Movement ${index+1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
//   }
// })


//*----------------------Lesson 145
//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map) {
//   console.log(`value: ${value}. key: ${key}, map: ${map}`);
// })

// //SET
// const currUnique = new Set([`USD`, `GBP`, `USD`, `EUR`,]);

// currUnique.forEach(function(value, key, set) {
//   console.log(`value: ${value}. key: ${key}, set: ${set}`);
// })

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


//*----------------------Lesson 147
const displayMovements = function(movements) {

containerMovements.innerHTML = ``;//innerHTML is similar to textContent, but textContext return text, while innerHTML returns everyting in HMTL

movements.forEach(function(mov, i) {
const type = mov > 0 ? `deposit` : `withdrawal`

  //create HTML element
  const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
  containerMovements.insertAdjacentHTML(`afterbegin`, html)
})
}


// const calcDisplayBalance = function(movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance} EUR`;
// };

// calcDisplayBalance(account1.movements);

// console.log(containerMovements.innerHTML);

//?----------------------Lesson 148 CHALLENGE - PASSED

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];


// const checkDogs = function(dogs) {
// return dogs.slice(1,3)
// }

// const dogsJuliaKate = dogsKate.concat(checkDogs(dogsJulia))
// console.log(dogsJuliaKate);

// dogsJuliaKate.forEach(function(age, i) {
// if(age>=3) {
//   console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
// } else {
//   console.log(`Dog number ${i+1} is still a puppy, and is ${age} years old`);
// }
// })

// console.log(dogsJulia);

//*----------------------Lesson 149

//MAP, FILTER, REDUCE

//*----------------------Lesson 150

// MAP

const eurToUsd = 1.1;
const movementsUsd = movements.map(function(mov){
  return mov*eurToUsd;
})
//same with arrow function:
const movementsUsd2 = movements.map(mov => mov * eurToUsd);
// console.log(movementsUsd2);



// console.log(movements);
// console.log(movementsUsd);

const movementsUsdFor = []
for(const mov of movements)movementsUsdFor.push(mov * eurToUsd);
// console.log(movementsUsdFor);

const movementsDescription = movements.map((mov, i, arr) =>  `Movement ${i+1}: You ${mov > 0 ? `deposited` : `withdrew`}`
  // {if (mov>0) {
  //   return `Movement ${i+1}: You deposited ${mov}`
  // } else {
  //   return `Movement ${i+1}: You withdrew ${Math.abs(mov)}`
  // }}
)

// console.log(movementsDescription);

//*----------------------Lesson 151
// create user name
const createUserNames = function(accs) {
accs.forEach(function(acc) {
  acc.userName = acc.owner//creates and adds a new property in account object
  .toLowerCase()
  .split(` `)
  .map(name => name[0])
  .join(``);
})
};

const updateUI = function(acc) {
  //Display movements
displayMovements(acc.movements);
//Display balance
calcDisplayBalance(acc)
//Display summary
calcDisplaySummary(acc);
}

createUserNames(accounts)
// console.log(accounts);

//*----------------------Lesson 152

// FILTER method
const deposits = movements.filter(mov => mov>0)
// console.log(deposits);

// for of method the same operation
const depositsFor = [];
for (const mov of movements)
  if (mov > 0) depositsFor.push(mov);
  // console.log(depositsFor);

  //
  const withdrawals = movements.filter(mov => mov<0)
  // console.log(withdrawals);

//*----------------------Lesson 153

// REDUCE method -> snowball

// console.log(movements);
// const balance = movements.reduce(function(accum, currentValue, i, arr){
//   console.log(`Iteration ${i}: ${accum}`);
// return accum + currentValue;
// }, 0)

// console.log(movements);
const balance = movements.reduce((accum, currentValue, i, arr)=> accum + currentValue, 0)

// console.log(balance);
//the same thing with FOR OF:
let balance2 = 0;
for (const mov of movements) balance2 += mov;

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
  //we need to save the value to be able to use it in other functions when transferring money, so we change (movements) in function to (acc) so the value will be calculated nad passed according to the current account

};


// to get maximum value of the movements arr
const max = movements.reduce((acc, mov) => acc>mov ? acc : mov, movements[0]);
// console.log(max);


//?----------------------Lesson 154 CHALLENGE

// const calcAverageHumanAge = function(dogsAges) {

//   const humanAge = dogsAges.map(years => years<= 2 ? years *2 : years * 4 +16) 
//   console.log(humanAge);

//   const older = humanAge.filter(years => years >= 18)
//   console.log(older);

//   const averAge = older.reduce((acc, years,i,array) => acc + years / array.length, 0);
//   console.log(Math.trunc(averAge));
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

//*----------------------Lesson 155

const eurToUsd1 = 1.1;
//called PIPELINE

const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd1)
.reduce((acc,mov) => acc + mov , 0);

// console.log(totalDepositsUSD);
///////////////////////////////////


const calcDisplaySummary = function(acc) {
const incomes = acc.movements
.filter(mov => mov>0)
.reduce((acc,mov) => acc + mov, 0)
labelSumIn.textContent = `${incomes}€`;

const out = acc.movements
.filter(mov => mov < 0)
.reduce((acc, mov) => acc + mov, 0)
labelSumOut.textContent = `${Math.abs(out)}€`

const interest = acc.movements
.filter(mov => mov>0)
.map(deposit => deposit * acc.interestRate/ 100)
.filter(int => int>=1)
.reduce((acc,int) => acc + int, 0);
labelSumInterest.textContent = `${interest}€`
};



///////////////////////////////
//?----------------------Lesson 156 CHALLENGE - PASSED

// const calcAverageHumanAge = dogsAges => dogsAges
//   .map(years => years<= 2 ? years *2 : years * 4 +16) 
//   .filter(years => years >= 18)
//   .reduce((acc, years,i,array) => acc + years / array.length, 0);
  
  
//   const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
//   const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
//   console.log(Math.trunc(avg1),Math.trunc(avg2));

//*----------------------Lesson 157

// const firstWithdrawal2 = movements.find(mov => mov < 0);
// console.log(firstWithdrawal2);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === `Jessica Davis`)//returns the whole object with owner name Jessica Davis found in the accounts
// console.log(account);
// //the same thing with for of loop
// for(const acc of accounts) {
//   if (acc.owner === `Jessica Davis`) {
//     console.log(acc);
//   }
// }


//*----------------------Lesson 158

//! LOGIN
//Event handlers
let currentAccount;

btnLogin.addEventListener(`click`, function(e) {
  e.preventDefault();//prevent form from submitting by HTML default function
  currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value)
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
//Display UI and message
labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`//to use only the first name of the owner
containerApp.style.opacity = 100;

//Clear inout fields:
inputLoginUsername.value = inputLoginPin.value = ``;
inputLoginPin.blur();//field loses the focus

//UPDATE UI:
updateUI(currentAccount);
  }

})

//*----------------------Lesson 159
//IMPLEMENTING TRANSFERS

btnTransfer.addEventListener(`click`, function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(acc => acc.userName === inputTransferTo.value)

  console.log(amount, recieverAcc);

  if(amount > 0 && 
    currentAccount.balance >= amount && 
    recieverAcc?.userName !== currentAccount.userName &&
    recieverAcc) 
    {
      //doing the tranfer:
      currentAccount.movements.push(-amount);
      recieverAcc.movements.push(amount);
      updateUI(currentAccount);

    } else {
      console.log(`ERROR`);
    };

    //Clean the fields
    inputTransferAmount.value = inputTransferTo.value = ``;
    inputTransferAmount.blur()
    inputTransferTo.blur()
  });