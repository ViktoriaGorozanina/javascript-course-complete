'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//* ------------------------- LESSON 232
let map;
let mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude); //59.4477056 24.8741888
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      //lesson 233, also added script in HTML in the <head>
      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 13);
      console.log(map);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //Handling clicks on map:
      map.on(`click`, function (mapE) {
        mapEvent = mapE;
        //form appears:
        form.classList.remove(`hidden`);
        inputDistance.focus();
      });
    },

    function () {
      alert(`Couldn't get your position`);
    }
  );
}

//Dispays the marker on form submit event:
form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  //clear inoyut fields:
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      ``;
  // console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `running-popup`,
      })
    )
    .setPopupContent('<p>Running<br />workout</p>')
    .openPopup();
});

//toggle hidden class on run-cycle
inputType.addEventListener(`change`, function () {
  inputElevation.closest(`.form__row`).classList.toggle(`.form__row--hidden`);
  inputCadence.closest(`.form__row`).classList.toggle(`.form__row--hidden`);
});

//* ------------------------- LESSON 233
//added code in the previous lesson

//* ------------------------- LESSON 234
//added code in the previous lesson

//* ------------------------- LESSON 235
//added code in the previous lesson
