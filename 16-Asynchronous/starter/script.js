'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//*_______________________________Lesson 248
const getKeys = function (object, keyInd) {
  const keys = Object.keys(object);
  const keyName = keys[keyInd];
  return object[keyName];
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  countriesContainer.style.opacity = 1;
};
const renderCountry = function (data, className = ``) {
  const html = `<article class="country ${className}" >
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.altSpellings[2]}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${getKeys(data.languages, 0)}</p>
    <p class="country__row"><span>💰</span>${
      getKeys(data.currencies, 0).name
    }</p>
  </div>`;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
};

//CALLING API oldschool:
// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);

//   request.send(); // we send the request and it fetches tha data on the background
//   //then we listen to the event Load:
//   request.addEventListener(`load`, function () {
//     //   console.log(this.responseText); //gives JSON

//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);
//     //render country (1)
//     renderCountry(data);

//     //get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return; //finish if there is no neighbour

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener(`load`, function () {
//       // console.log(this.responseText);
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, `neighbour`);
//     });
//   });
// };
// getCountryAndNeighbour(`portugal`);
// getCountryAndNeighbour(`usa`);
// getCountryAndNeighbour(`usa`);
// getCountryAndNeighbour(`spain`);
// getCountryAndNeighbour(`france`);
// getCountryData(`russia`);
// all of them will be printed in the order the data arrival. if we want them to be in a specific order then we would have to chain the requests (to make the second request only after the first one has loaded). next lesson

//*_______________________________Lesson 250

// implementing a sequance of AJAX call. (which action after which)

//*_______________________________Lesson 251
//?MODERN WAY OF AJAX CALL:

const request2 = fetch(`https://restcountries.com/v3.1/name/eesti`);
// console.log(request2);

//*_______________________________Lesson 252
//CONSUMING PROMISES returned from the Fetch function

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //it is a promise itself too. read conspect
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJson = function (url, errorMsg = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

//? same but simplified (also added other ifno):
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //for fulfilled promise
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // console.log(data);
//       //(Lesson 253) getting neighbour data
//       const neighbour = data[0].borders[0];
//       // const neighbour = `fffwfwf`;//test faulsy data

//       if (!neighbour) return;
//       if (!data.ok) {
//         throw new Error(`Unknow neighbour (${data.status})`);
//       }
//       //2nd ajax call for neightbours country
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     //*bug fixed
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], `neighbour`))
//     // ERROR HANDLING
//     .catch(err => {
//       // console.log(`${err} 🛠`);
//       renderError(`Something went wrong 🛠 ${err.message}`); //err is a JS object itself and it has message property
//     })
//     //finally method is not always useful. This is something that happens anyways if fetch was successful or not
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
//*same code but using a function for repetative code:

const getCountryData = function (country) {
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country not found `
  )
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighboursCheck = data[0].borders;
      console.log(neighboursCheck);
      //*bug fixed
      if (!neighboursCheck) throw new Error(`No neighbours`);
      const neighbour = data[0].borders[0];

      //2nd ajax call for neightbours country
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found `
      );
    })
    //Render neighbour
    .then(data => renderCountry(data[0], `neighbour`))

    // ERROR HANDLING
    .catch(err => {
      // console.log(`${err} 🛠`);
      renderError(`Something went wrong 🛠 ${err.message}`); //err is a JS object itself and it has message property
    })
    //finally method is not always useful. This is something that happens anyways if fetch was successful or not
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//*_______________________________Lesson 253
//CHAINING promises
//modifying the previous lessons' code in the second .then

//*_______________________________Lesson 254

// btn.addEventListener(`click`, function () {
//   getCountryData(`australia`);
// });

// getCountryData(`cscsc`);
//*_______________________________Lesson 255
//modifying the previous lessons' code

//?_______________________________Lesson 255 - CHALLENGE #1

const renderMessage = function (data) {
  const html = `You are in ${data.city}, ${data.country}.`;
  console.log(html);
};
const whereAmI = function (lat, long) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=e9762358fbaa41d1ae5a2a6404d1d4fb`
  )
    .then(response => response.json())
    // .then(result => console.log(result));
    .then(data => {
      if (!data.features) throw new Error(`May be you are on Mars.`);
      const countryData = data.features[0].properties;
      console.log(countryData);
      renderMessage(countryData);

      //Displaying ythe card:
      const country = countryData.country;

      fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
          renderCountry(data[0]);

          const neighbour = data[0].borders[0];
          if (!neighbour) return;

          return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data[0], `neighbour`));
    })
    .catch(err => {
      console.log(`Now this is an error. ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener(`click`, function () {
  //Get geolocation data from browser
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position);
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        // return latitude, longitude;
        //Pass lat and lng to the function
        whereAmI(latitude, longitude);
      },
      //error
      function () {
        console.log(`No position`);
      }
    );
  }
});

//*_______________________________Lesson 258

// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec timer`), 0);

// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

// Promise.resolve(`Resolved promise 2`).then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log(`Test end`);

//*_______________________________Lesson 259

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening`);

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve(`You win!`);
//     } else {
//       reject(new Error(`You loose :(`));
//     }
//   }, 2000);
// });
// //consuming the promise:
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout:
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`2 seconds gone`);
    return wait(1);
  })
  .then(() => console.log(`1 more second gone`));

//all this is to perform an async behavior to avoid callback hell

Promise.resolve(`abc`).then(x => console.log(x));
Promise.reject(new Error(`abc`)).catch(x => console.error(x));
