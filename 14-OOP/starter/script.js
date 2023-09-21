'use strict';

//*---------------- LESSON 208

//Construter functions:
const Person = function (firstName, birthYear) {
  //Instance properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this:
  // this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  // }
};

const Victoria = new Person(`Victoria`, 1986);
//1. new empty object is created
//2. function is called, This keyword = is new empty {}
//3. {} linked to prototype
//4. function automatically returns from the construction function
const Olga = new Person(`Olga`, 2003);
const Jack = new Person(`Jack`, 2015);
// console.log(Victoria, Olga, Jack);

// console.log(Victoria instanceof Person); //true

//*---------------- LESSON 209

//Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

Victoria.calcAge();
// console.log(Victoria.__proto__);
// console.log(Victoria.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(Victoria)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// console.log(Victoria);

//---
Person.prototype.species = `Homosapiens`;
// console.log(Victoria.species);
// console.log(Olga);

// console.log(Victoria.hasOwnProperty(`firstName`)); //true
// console.log(Victoria.hasOwnProperty(`species`)); //false, since its is coming fron a prototype and its not it;s direct property

//*---------------- LESSON 210
//Theory about prototype

//*---------------- LESSON 211

// console.log(Victoria.__proto__);
// console.log(Victoria.__proto__.__proto__);

// console.log(Person.prototype.constructor);

const arr = [1, 2, 5, 2, 5, 2];
// console.log(arr.__proto__); //each array inherits all methods from the default array default construction
// console.log(arr.__proto__ === Array.prototype); //true
// console.log(arr.__proto__.__proto__); //leads to the object.prototype

//we add a new method to an array construction and we can call this method anytime (shouldnt use this, may be on a small projects, for maintanence reasons and if JS updates with the same method name but different action)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector(`h1`);
// console.dir(x => x + 1);

// //?---------------- LESSON 212 CHALLENGE#1 - PASSED

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   // console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   // console.log(this.speed);
// };

// const bmw = new Car(`BMW`, 120);
// const mercedes = new Car(`Mercedes`, 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();

//*---------------- LESSON 213
//CLASSES

//class expression:
// const Person = class {}
//OR
//Class declaration:
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl(`Jessica`, 1980);

// console.log(jessica);

// console.log(jessica.__proto__);
// console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  // console.log(`Hey, ${this.firstName}`);
};
jessica.greet();

//1. classes are NOT hoisted (means we can NOT use them BEFORE they are declared)
//2. Classes are 1st class cityzens (we can pass them to functions and to return them from functions)
//3. Classes are executed in `strict mode`

//*---------------- LESSON 214
//GETTERS and SETTERS

const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 300],

  // to add a getter to this object :
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //set - will add a new mov into the movements, must have an argument
  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest); //we write it just like a usual object property

account.latest = 50;
// console.log(account.movements);

//setter is great for data validation:

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //methods will be added to .prototype property
  calcAge() {
    // console.log(2037 - this.birthYear);
  }
  //OR
  get age() {
    return 2037 - this.birthYear;
  }
  //set a property that already exists:
  set fullName(name) {
    // console.log(name);
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`hey`);
  }
}
const jess = new PersonCl2(`jess pess`, 1980);
// console.log(jess);

//*---------------- LESSON 214
//STATIC METHODS
//added static into the previous lecture class

//*---------------- LESSON 215
//Object.create

const PersonProto = {
  calcAge() {
    // console.log(2037 - this.birthYear);
  },

  data(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
// console.log(steven);

steven.name = `Steven`;
steven.birthYear = 2002;

steven.calcAge();

//
const sarah = Object.create(PersonProto);
sarah.data(`Sarah`, 1979);
sarah.calcAge();
// console.log(sarah);

//?---------------- LESSON 217 CHALLENGE#2 partually done - didnt get the task

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed = this.speed - 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(km) {
//     this.speed = km * 1.6;
//   }
// }

// const ford = new Car(`Ford`, 120);
// console.log(ford.speedUS);
// ford.brake();
// ford.accelerate();
// console.log(ford.speedUS);
// ford.accelerate();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);

//*---------------- LESSON 218
//Inheritance between classes: Constructor functions

const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear);
  this.course = course;
};
//linking prototypes (methods)
Student.prototype = Object.create(Person2.prototype);
//we have to create this connection before we create any more methods
Student.prototype.introduce = function () {
  // console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `IT science`);
// console.log(mike);
mike.introduce();
mike.calcAge();

// console.log(mike.__proto__);
// console.dir(Student.prototype.constructor); //Person, but must be STudent
Student.prototype.constructor = Student; //setting correct prototype
//checking
// console.log(mike instanceof Student); //true
// console.log(mike instanceof Person2); //true
// console.log(mike instanceof Object); //true
// console.dir(Student.prototype.constructor);

// in the code above there was a repetition of the code block, also if in the future we change Person then Student will not be affected (he is also a person)
// ***instead - we call Person.call(this, arguments here) in Student to replace the code block that we need

//?---------------- LESSON 219 CHALLENGE#3 - PASSED
//Parent class
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };
// //CHILD class
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// //link prototypes
// EV.prototype = Object.create(Car.prototype);

// //EV prototypes
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with a cherge of ${this.charge}%`
//   );
// };

// const evcar = new EV(`EVcar`, 120, 23);

// evcar.chargeBattery(90);
// evcar.accelerate();
// evcar.accelerate();
// evcar.accelerate();
// evcar.brake();
// evcar.accelerate();

//*---------------- LESSON 220
//INheritance between classes: ES6 classes

// class StudentCl extends PersonCl {
//   //it can work even without constructor at all, it will inherit what is available from the parent
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   }
// }

// const martha = new StudentCl(`Martha`, 2012, `Data science`);
// martha.introduce();
// martha.calcAge();
// console.log(martha);

//?--------- bonus CHALLENGE# - PASSED
//Parent class
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed = this.speed - 5;
//     console.log(this.speed);
//   }
// }

// //CHILD class
// class EV extends Car {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     console.log(this.charge);
//   }
//   accelerate() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(
//       `${this.make} is going at ${this.speed}km/h, with a cherge of ${this.charge}%`
//     );
//   }
// }

// const tesla = new EV(`Tesla`, 120, 23);

// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();

//*---------------- LESSON 221
//INheritance between classes: Object.create
//Parent class
const PersonProto2 = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    return 2037 - this.birthYear;
  },
};

const steveno = Object.create(PersonProto2);

const StudentProto = Object.create(PersonProto2);
//add inherited init to Students prototype
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.firstName}, i am ${this.calcAge()} years old. I study ${
      this.course
    }`
  );
};

const jay = Object.create(StudentProto);
jay.init(`Jay`, 2015, `Maths`);
// jay.calcAge();
// jay.introduce();
// console.log(jay);

//*---------------- LESSON 222
//Another Class example

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //new
//     //protected property
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`thanks ${owner}`);
//   }
//   //Public interface
//   getMovements() {
//     return this._movements;
//   }

//   deposit(value) {
//     this._movements.push(value);
//   }
//   withdraw(value) {
//     this.deposit(-value); //we call deposit methodbecause the function is the same
//   }
// }

// const acc1 = new Account(`Victoria`, `eur`, 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-250);//replaced it with methods within the class

// acc1.deposit(250);
// acc1.withdraw(140);
// console.log(acc1.getMovements());
// console.log(acc1);

//*---------------- LESSON 223
//Encapsulation: Protected Properties and Methods

//classes do not support it yet (almost there)
//see previous lecture just added to movements and pin ( _ ). not truly protected, its just conventional, just to know that this one is not to be touched outside the class

//*---------------- LESSON 224
//Public fields
//Private fields
//Public methods
//Private methods
//(there is also a static version)

class Account {
  //public fields (instances, not on prototype):
  locale = navigator.language;

  //Private fields (instances):
  #movements = [];
  #pin; //creating kinda emty variable because it actually must be set in the constructor later on

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`thanks ${owner}`);
  }
  //Public methods:

  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value); //we call deposit methodbecause the function is the same
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Approved`);
    }
  }

  static helper() {
    console.log(`Helper`);
  }

  //Private methods: (browsers do not support it yet, or may be chrome does)
  // #approveLoan(val) {
  //   return true;
  // }

  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Victoria`, `eur`, 1111);

// acc1.movements.push(250);
// acc1.movements.push(-250);//replaced it with methods within the class

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements); //error message, since it is protected

//for static:
Account.helper();
