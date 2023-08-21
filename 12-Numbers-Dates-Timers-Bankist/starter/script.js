'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2023-08-18T14:11:59.604Z',
    '2023-08-19T17:01:17.194Z',
    '2023-08-20T23:36:17.929Z',
    '2023-08-21T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatCurr = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
  style: `currency`,
  currency: currency  
}).format(value);
};


const formatMovementsDates = function(date) {

  const calcDays = (date1, date2) => Math.round(Math.abs(date2- date1) / (1000*60*60*24));

  const daysPassed = calcDays(new Date(), date)

  console.log(daysPassed);

  if (daysPassed === 0) return `Today`
  if (daysPassed === 1) return `Yesterday`
  if (daysPassed <= 7) return `${daysPassed} days ago`

  //If conditions are not met then proceed to this:
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() +1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  
  // return `${day}/${month}/${year}`

  //OR (INTL)
  return new Intl.DateTimeFormat(currentAccount.locale).format(date)

  }
 



const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

//DATES:
    const date = new Date(acc.movementsDates[i])
    const displayDate = formatMovementsDates(date)

const formattedMov = formatCurr(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

    
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedBalance = formatCurr(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${formattedBalance}`;
};

const calcDisplaySummary = function (acc) {

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedIncome = formatCurr(incomes, acc.locale, acc.currency);

  labelSumIn.textContent = `${formattedIncome}`;

  const out = Math.abs(acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0));

    const formattedOut = formatCurr(out, acc.locale, acc.currency);

  labelSumOut.textContent = `${formattedOut}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

    const formattedInterest = formatCurr(interest, acc.locale, acc.currency);

  labelSumInterest.textContent = `${formattedInterest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// ..FAKED ALWAYS LOGGED IN------------
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
//-------------------------------------
//experimenting with API
const now = new Date();
// const options = {
//   hour: `numeric`,
//   minute: `numeric`,
//   day: `numeric`,
//   month: `long`,
//   year: `numeric`,
//   weekday: `long`
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now)
//-------------------------------------

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0)
    // const month = `${now.getMonth() +1}`.padStart(2, 0)
    // const year = now.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`
//another way (INTL adapted)
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `2-digit`,
      year: `numeric`,
      // weekday: `long`
    };
    
    // const locale = navigator.language;
    // console.log(locale);
    
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  
  const amount = Math.floor(inputLoanAmount.value);
  
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);


    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


//*----------------------Lesson 170

// console.log(23 === 23.0);// true

// //Base 10 : 0 to 9

// //Base binary 2: 0 and 1
// console.log(`1`);
// console.log(0.1 + 0.2);// 0.30000000000000004

// console.log(0.1 + 0.2 === 0.3);// false !
// const trunc = Math.trunc(0.1 + 0.2)
// console.log(trunc === 0.3);// even that is false !
// console.log(`1`);

// //another way to transform a string to a number:
// console.log(Number(`23`));
// console.log(+ `23`); //once JS sees + it takes it as calculations and convert string to number automatically

// //PARSING
// console.log(Number.parseInt(`30.5px`, 10));//30 / the number must be in the beginning
// console.log(Number.parseInt(`e30px`, 10));//NaN since first is a letter

// console.log(Number.parseFloat(`2.5rem`));//2.5  / the number must be in the beginning
// console.log(parseFloat(`2.5rem`));//2.5
// console.log(parseFloat(`e2.5rem`));//NaN since first is a letter
// console.log(`here`);

// //NaN, check if value is not a number
// console.log(Number.isNaN(20));//false
// console.log(Number.isNaN(`20`));//false
// console.log(Number.isNaN(+`20`));//false
// console.log(Number.isNaN(+`20fx`));//true
// console.log(Number.isNaN(23 / 0));//false since infinity

// //isFinite, chceking if value is number
// console.log(Number.isFinite(20));//true
// console.log(Number.isFinite(`20`));//false
// console.log(Number.isFinite(+`20`));//true
// console.log(Number.isFinite(+`20c`));//false
// console.log(Number.isFinite(23 / 0));//false


//*----------------------Lesson 171
//Square ROOT
// console.log(Math.sqrt(25));//5
// //the same result:
// console.log(25 **(1/2));//5
// console.log(8 ** (1/3));//cubic root

// console.log(Math.max(5,18,23,11,2));//23 returns the biggest value, it does not parse
// console.log(Math.min(5,18,23,11,2));//2 returns the biggest value, it does not parse

// console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

// console.log(Math.random());// 0-1
// console.log(Math.trunc(Math.random() * 6) + 1 );// 0-6

// const randomInt = (min, max) => Math.floor(Math.random() * (max-min) + 1) + min //0...1 => 0...(max-min) => min...(max - min + min)

// console.log(randomInt(100, 200));

// //ROUNDING INTEGERS
// console.log(`------`);
// console.log(Math.trunc(23.3));//23
// console.log(Math.trunc(-23.3));//23

// console.log(Math.round(23.7));//24
// console.log(Math.round(-23.7));//24
// console.log(`------`);

// console.log(Math.ceil(23.3));//24
// console.log(Math.ceil(23.7));//24
// console.log(Math.ceil(-23.3));//23 !

// console.log(`------`);

// console.log(Math.floor(23.3));//23
// console.log(Math.floor(23.7));//23 
// console.log(Math.floor(-23.7));//24 !

// //ROUNDING DECIMALS
// console.log(`------q`);
// console.log((2.7).toFixed(3));//2.700 (STRING)


//*----------------------Lesson 172
//REMAINDER OPERATOR
//OSTATOK POSLE DELENIJA - returns a reminder after division

// console.log(5 % 2);//1 -  5 / 2 = 2 ostatok 1
// console.log(5 / 2);

// console.log(8 % 3);//2
// console.log(8 / 3);

// //formula to check if a number is even and return boolean:
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener(`click`, function() {
//   [...document.querySelectorAll(`.movements__row`)].forEach(function(row, i) {
//   if (i % 2 === 0 ) row.style.backgroundColor = `orangered`
//   if (i % 3 === 0 ) row.style.backgroundColor = `green`
// });});

//*----------------------Lesson 173

// const diameter = 2_874_000_000;//2874000000 - console will ignrore underscores, but it will be easier for us to use it in JS
// console.log(diameter);

// Number(`23_000`)//it won't work with strings

//*----------------------Lesson 174
//BigInt

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(4838430248342043823408394839483204n);
// console.log(BigInt(48384302));

// // Operations
// console.log(10000n + 10000n);
// console.log(36286372637263726376237263726372632n * 10000000n);
// // console.log(Math.sqrt(16n));//wont work !

// const huge = 20289830237283728378237n;
// const num = 23;
// console.log(huge * BigInt(num));
// // console.log(huge * num);//wont work !

// // Exceptions
// console.log(20n > 15);//true
// console.log(20n === 20);//false
// console.log(typeof 20n);//bigInt
// console.log(20n == '20');//true

// console.log(huge + ' is REALLY big!!!');//20289830237283728378237 is REALLY big!!!

// // Divisions
// console.log(`------`);
// console.log(11n / 3n);//it will cut decimal part
// console.log(10n / 3n);//it will cut decimal part
// console.log(10 / 3);//3.33333333333335

//*----------------------Lesson 175
//CREATE A DATE
//4 ways to create dates:

// const now = new Date()
// console.log(now);//Sat Aug 19 2023 13:52:14 GMT+0300 (Eastern European Summer Time)

// console.log(new Date(`Aug 19 2023 13:52:14`));
// console.log(new Date(`December 23, 2012`));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0));//Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
// // console.log(new Date(3 * 24 * 60 * 60 * 1000));//converting days to miliseconds, 3 days later
// //if we calculate 3 * 24 * 60 * 60 * 1000 = we get 259200000 - it is TIMESTAMP

// //Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());

// future.setFullYear(2040)
// console.log(future);


//*----------------------Lesson 176

// const now1 = new Date();

// labelDate.textContent = now1; //will display the whooole information 

// //day/month/year
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0)
// const month = `${now.getMonth() +1}`.padStart(2, 0)
// const year = now.getFullYear();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hours}:${minutes}`



//*----------------------Lesson 177
//to calculate dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(+future);

// const calcDaysPassed = (date1, date2) => Math.abs(date2- date1) / (1000*60*60*24)
// const days1 = calcDaysPassed(new Date(2037, 3, 14),new Date(2037, 3, 4))
// console.log(days1);

//*----------------------Lesson 178
//INTL DATES

// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale).format(date)

// //to control styling:
// const options = {
//   hour: `numeric`,
//   minute: `numeric`,
//   day: `numeric`,
//   month: `2-digit`,
//   year: `numeric`,
//   // weekday: `long`
// };//then pass it as a second argument in the below function

// // const locale = navigator.language;//to get user's browser lang
// // console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now)

//*----------------------Lesson 179
//INTL NUMBERS

const num = 3884764.23;
const options = {
  style: 'currency',//percent, unit...
  // unit: `celsius`//mile-per-hour...
  currency: `EUR`,
  // useGrouping: false,//number are printed without separators
}

console.log(new Intl.NumberFormat(`en-US`, options).format(num));
console.log(new Intl.NumberFormat(`de-DE`, options).format(num));
console.log(new Intl.NumberFormat(`es-ES`, options).format(num));
console.log(new Intl.NumberFormat(`ar-EG`, options).format(num));
console.log(new Intl.NumberFormat(navigator.language, options).format(num));