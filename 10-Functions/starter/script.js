'use strict';

//*------------------Lesson 128
// const bookings = [];

// const createBooking = function (flightNum,numPassengers = 1, price=199) {


//     // numPassengers = numPassengers || 1; //default value 1. ES5 way of doing it
//     // price = price || 199;//instead we just type it straight into the function values

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`,2, 200);
// createBooking(`LH123`,undefined, 200);//to skip a parameter and leave it to default use undefined

//*------------------Lesson 129

const flight = `LH234`;
const jonas = {
name: `Jonas Blabla`,
passport: 23613546434,

}

const checkIn = function(flightNum, passenger) {
    flightNum = `LH999`, //changing the parameter, however it does not change, since it is a completely diff variable and it doesnt get brought out of the function
    passenger.name = `Mr. ` + passenger.name //but the name changed

    if(passenger.passport === 23613546434) {
        alert(`Checked in`);
    } else {
        alert(`Wrong passport`);
    };
}
// checkIn(flight, jonas)
// console.log(flight);
// console.log(jonas);


//---------------------
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas)
checkIn(flight, jonas)
// console.log(flight, jonas);

//---------------------
//JS passes only by value not reference. Even if it looks like passing by reference