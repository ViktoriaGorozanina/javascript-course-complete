'use strict';
const bookings = [];

const createBooking = function (flightNum,numPassengers = 1, price=199) {


    // numPassengers = numPassengers || 1; //default value 1. ES5 way of doing it
    // price = price || 199;//instead we just type it straight into the function values

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`,2, 200);
createBooking(`LH123`,undefined, 200);