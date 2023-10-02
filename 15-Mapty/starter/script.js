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

//* ------------------------- LESSON 232 (restructured in lecture 237)

class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition(); //we call this method here because: normally we should be calling it outside the class (app._getPosition), but once we create a new object "new App" - class constructor is immediately called therefore is called everething that is in it

    //Dispays the marker on form submit event:
    form.addEventListener(`submit`, this._newWorkout.bind(this));

    inputType.addEventListener(`change`, this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert(`Couldn't get your position`);
        }
      );
    }
  }

  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude); //59.4477056 24.8741888
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //lesson 233, also added script in HTML in the <head>
    const coords = [latitude, longitude];

    console.log(this);
    this.#map = L.map('map').setView(coords, 13);
    // console.log(this.#map);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map:
    this.#map.on(`click`, this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    //form appears:
    form.classList.remove(`hidden`);
    inputDistance.focus();
  }

  _toggleElevationField() {
    //toggle hidden class on run-cycle
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  }

  _newWorkout(e) {
    e.preventDefault();

    //clear input fields:
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        ``;
    // console.log(this.#mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

//new objects:
const app = new App();

//* ------------------------- LESSON 233 (restructured in lecture 237)
//added code in the previous lesson

//* ------------------------- LESSON 234 (restructured in lecture 237)
//added code in the previous lesson

//* ------------------------- LESSON 235 (restructured in lecture 237)
//added code in the previous lesson

//* ------------------------- LESSON 236 (restructured in lecture 237)
//structuring the previous code

//* ------------------------- LESSON 237 (restructured code)
