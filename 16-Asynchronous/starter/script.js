'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//*_______________________________Lesson 248

//CALLING API oldschool:
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open(`GET`, `https://restcountries.com/v3.1/name/${country}`);

  request.send(); // we send the request and it fetches tha data on the background
  //then we listen to the event Load:
  request.addEventListener(`load`, function () {
    //   console.log(this.responseText); //gives JSON

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const getKeys = function (object, keyInd) {
      const keys = Object.keys(object);
      const keyName = keys[keyInd];
      return object[keyName];
    };

    const html = `<article class="country">
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
  });
};

getCountryData(`portugal`);
getCountryData(`eesti`);
getCountryData(`usa`);
getCountryData(`spain`);
getCountryData(`france`);
// all of them will be printed in the order the data arrival. if we want them to be in a specific order then we would have to chain the requests (to make the second request only after the first one has loaded). next lesson

//*_______________________________Lesson 249
