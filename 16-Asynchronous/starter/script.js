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
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);

  request.send(); // we send the request and it fetches tha data on the background
  //then we listen to the event Load:
  request.addEventListener(`load`, function () {
    //   console.log(this.responseText); //gives JSON

    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    //render country (1)
    renderCountry(data);

    //get neighbour country (2)
    const neighbour = data.borders?.[0];

    if (!neighbour) return; //finish if there is no neighbour

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(`GET`, `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener(`load`, function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, `neighbour`);
    });
  });
};
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
console.log(request2);

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

btn.addEventListener(`click`, function () {
  getCountryData(`australia`);
});

// getCountryData(`cscsc`);
//*_______________________________Lesson 255
