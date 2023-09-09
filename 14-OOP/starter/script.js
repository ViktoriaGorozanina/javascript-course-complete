'use strict';

//*---------------- LESSON 208

//Construter functions:
const Person = function(firstName, birthYear) {
    //Instance properties:
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this:
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const Victoria = new Person(`Victoria`, 1986);
//1. new empty object is created
//2. function is called, This keyword = is new empty {}
//3. {} linked to prototype
//4. function automatically returns from the construction function
const Olga = new Person(`Olga`, 2003);
const Jack = new Person(`Jack`, 2015);
console.log(Victoria, Olga, Jack);

console.log(Victoria instanceof Person);//true