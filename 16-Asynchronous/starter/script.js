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

  countriesContainer.style.opacity = 1;
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

//? same but simplified:
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      console.log(data);
      //(Lesson 253) getting neighbour data
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      //2nd ajax call
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, `neighbour`));
  //!solve the bug with svg
};
getCountryData(`usa`);

//*_______________________________Lesson 253
//CHAINING promises
//modifying the previous lessons code in the second .then
