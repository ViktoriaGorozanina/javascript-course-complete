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
const displayMovements = function(movements, sort = false) {
  
    const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;// we add slice to make a shallow copy of the array so it doest mutate the original array, and then sort it

    containerMovements.innerHTML = ``;//innerHTML is similar to textContent, but textContext return text, while innerHTML returns everyting in HMTL

    movs.forEach(function(mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`

  //create HTML element
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
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

  btnLoan.addEventListener('click', function (e) {
e.preventDefault();

const amount = Number(inputLoanAmount.value);

if (amount > 0 && 
  currentAccount.movements.some(mov => mov >= amount * 0.1)) {
  // Add movement
  currentAccount.movements.push(amount);

  // Update UI
  updateUI(currentAccount);
}
inputLoanAmount.value = '';
});

  //*----------------------Lesson 160
  //FINDINDEX

  btnClose.addEventListener(`click`, function(e) {
    e.preventDefault();
    
    const accIndex = accounts.findIndex(acc => acc.userName === currentAccount.userName)
    const pin = Number(inputClosePin.value);
    
    console.log(accIndex);
    if (currentAccount.userName === inputCloseUsername.value &&
      currentAccount.pin === pin) 
      {
        console.log(`deleted`);
      accounts.splice(accIndex, 1)
      updateUI(currentAccount);

      
      //Log out
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(` `)[0]}`//to use only the first name of the owner
      containerApp.style.opacity = 0;
      
    }
    //Clean the fields
  inputClosePin.value = inputCloseUsername.value = ``;
  inputClosePin.blur()
  inputCloseUsername.blur()
  });


  let sorted = false;
  btnSort.addEventListener(`click` , function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;//so when we click the second time it switches back every time

  })

   //*----------------------Lesson 161
  //SOME method

  //INCLUDES works with equality
//   console.log(movements);
//   console.log(movements.includes(-130));

//   //SOME works with condition
//  if(movements.some(mov => mov > 0)) {
//   console.log(movements);
//  } 

//EVERY method
// if (movements.every(mov => mov === 100)) {
//   console.log(movements);
// }

 //*----------------------Lesson 162
  //FLAT and FLATMAP methods

//FLAT
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arr.flat());//flattens all the nested arrays

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9];
// console.log(arrDeep.flat(2));//now it goes 2 levels deep
// //to calculate overall balance
// const accountMovements = accounts.map(acc => acc.movements)
// const allMovements = accountMovements.flat();
// const overallBalance = allMovements.reduce((acc,mov) => acc + mov, 0)
// console.log(overallBalance);
// //chaining:
// const overallBalance2 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// //FLATMAP = combined map + flat
// const overallBalance3 = accounts.flatMap(acc => acc.movements)
// .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance3);


//*----------------------Lesson 163
//SORTING arrays

const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
// console.log(owners.sort());//now its sorted alphabetically, mutates the orginal array

//Numbers
//!if we return < 0 then A is greater than B (keep order)
//!if we return > 0 then B is greater than A (switch order)

// console.log(movements.sort((a,b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }));
//OR
// console.log(movements.sort((a,b) =>a-b));//for ascending result
// console.log(movements.sort((a,b) =>b-a));//for descending result

//implementing it on website:
//up in the code btnSort

//*----------------------Lesson 164
//CREATING and FILLING ARRAYS, more ways:

const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);//creates an array with 7 empty elements
//FILL
// console.log(x);
// console.log(x.fill(1));
// console.log(x);
// console.log(x.fill(2));
// console.log(x.fill(5, 2, 5));

//ARRAY.FROM - the same but cleaner way than new Array + fill
const y = Array.from({length: 7}, () => 1);
// console.log(y);

const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

const q = Array.from({length: 30}, () => Math.floor(Math.random()*6)+1);
// console.log(q);



labelBalance.addEventListener(`click`, function() {
  const movementsUI = Array.from(document.querySelectorAll(`.movements__value`), (el) => Number(el.textContent.replace(`€`, ``)));
  // console.log(movementsUI);
})

//*----------------------Lesson 166
//Array methods practice

//1. calculate how much ha sbeen deposited from all the accounts
// const bankDepositSum = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);//or replace two first with FLATMAP

// console.log(bankDepositSum);

// //2. how many deposits at least 1000
// const numAtLeast1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;

// console.log(numAtLeast1000);
// //the same using reduce method:
// const numAtLeast1000reduce = accounts
// .flatMap(acc => acc.movements)
// .reduce((accum, curr) => curr >= 1000 ? accum + 1 : accum, 0)

// console.log(numAtLeast1000reduce);

// //3. create a new object using reduce
// //object that contains some of the withdrawals and some of the deposits
// const {deposits1, withdrawals1} = accounts
// .flatMap(acc => acc.movements)
// .reduce(function(accum, curr) {
// curr > 0 ? accum.deposits1 += curr : accum.withdrawals1 += curr;
// return accum
// }, 
// {deposits1: 0, withdrawals1: 0});

// console.log(deposits1, withdrawals1);

// //4. create a simple function to convert any string in a title case ( capitalize words): this is a nice title --> This Is a Nice Title
// const convertTitleCase = function(title) {
// const exceptions = [`a`, `the`, `an`, `and`, `but`, `or`, `on`, `in`, `with`];
// const titleCase = title.toLowerCase().split(` `).map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(` `);
// const upperCaseSentance = titleCase[0].toUpperCase() + titleCase.slice(1);
// return upperCaseSentance
// };
// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title, but not too long`));
// console.log(convertTitleCase(`here is an another title with an example`));
// console.log(convertTitleCase(`a very nice picture`));


//?----------------------Lesson 167 CHALLENGE

const dogs = [
  { weight: 22, 
    curFood: 250, 
    owners: ['Alice', 'Bob'] },

  { weight: 8, 
    curFood: 200, 
    owners: ['Matilda'] },

  { weight: 13, 
    curFood: 275, 
    owners: ['Sarah', 'John'] },

  { weight: 32, 
    curFood: 340, 
    owners: ['Michael'] }

  ];
  
 //? 1. = passed
 console.log(`1.`);

  dogs.map(function(dog) {
  const calcFood = dog.weight ** 0.75 * 28;
  dog.recommendedFood = Math.trunc(calcFood);
  })
  //To check teachers solution:
  // dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

  console.log(dogs);

  //? 2. = passed
  console.log(`2.`);

  const eatWell = function(name) {

    const ownerDog = dogs.find(function(dog) {
      dog.owners.includes(name)
      return dog
    } )

    if(ownerDog.recommendedFood === ownerDog.curFood) {
      console.log(`The dog eats normal`);
    } else if (ownerDog.recommendedFood > ownerDog.curFood) {
      console.log(`The dog eats too little`);
    } else {
      console.log(`The dog eats too much`);
    }
//better:
    console.log(`dog is eating too ${
      ownerDog.curFood > ownerDog.recommendedFood ? 'much' : 'little'}.`);

  }
eatWell(`Sarah`)

//To check teachers solution:

//?3. = passed

console.log(`3.`);
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.filter(function(dog) {

  // if(dog.recommendedFood < dog.curFood) return ownersEatTooMuch.push(dog.owners)
  // if(dog.recommendedFood > dog.curFood) return ownersEatTooLittle.push(dog.owners)
  
//SHORTER:
  dog.recommendedFood < dog.curFood ? ownersEatTooMuch.push(dog.owners) : ownersEatTooLittle.push(dog.owners)
})

console.log(ownersEatTooMuch.flat(), ownersEatTooLittle.flat());

//To check teachers solution:
const ownersEatTooMuch2 = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch2);

//? 4. = passed
console.log(`4.`);

// const display = function(arr) {
//   const arrFlat = arr.flat();
// const owners = arrFlat.join(` and `)
// return owners
// }

//shorter version if its not used further on and function is not needed:
console.log(`${ownersEatTooLittle.flat().join(` and `)}'s dogs eat too little`);
console.log(`${ownersEatTooMuch.flat().join(` and `)}'s dogs eat too much`);

//? 5. = passed
console.log(`5.`);
// const normalEating = dogs.map(dog => dog.recommendedFood === dog.curFood ? true : false).includes(true);
// console.log(normalEating);
// //OR
const normalEating2 = dogs.some(dog => dog.recommendedFood === dog.curFood);
console.log(normalEating2);

//? 6. = passed
console.log(`6.`);

const eatingOkay = dogs.some(dog => dog.curFood >= dog.recommendedFood*0.9 && dog.curFood <= dog.recommendedFood*1.1);
console.log(eatingOkay);

//To check teachers solution:
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

//? 7. = passed
console.log(`7.`);

const eatingOkayDogs = dogs.filter(dog => dog.curFood >= dog.recommendedFood*0.9 && dog.curFood <= dog.recommendedFood*1.1);

console.log(eatingOkayDogs);

//To check teachers solution:
console.log(dogs.filter(checkEatingOkay));


//? 8. = passed
console.log(`8.`);

const dogs2 = dogs.slice();
console.log(dogs2);

const dogsArr = dogs2.map(dog => dog.recommendedFood).sort((a,b) => a-b);
console.log(dogsArr);

//shorter:
const dogs3 = dogs.slice().map(dog => dog.recommendedFood).sort((a,b) => a-b);
console.log(dogs3);
//ok the task was to sort the dogs not their recommendedfood results, but otherwise good.


//To check teachers solution:
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);

