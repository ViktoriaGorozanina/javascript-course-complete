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

class Workout {
  date = new Date();
  id = (Date.now() + ``).slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; //array of longitude and latitude
    this.distance = distance; //km
    this.duration = duration; //min
  }
}

class Running extends Workout {
  type = `running`;
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;

    this.calcPace();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = `cycling`;
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    //calling methods
    this.calcSpeed();
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60); //because its in minutes be default
    return this.speed;
  }
}
const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1, cycling1);
//* ------------------------- LESSON 232 (restructured in lecture 237)

//APPLICATION ARCHITECTURE////////////////////////////////////////////////////
class App {
  #map;
  #mapEvent;
  #workouts = [];

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
    // console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(latitude, longitude); //59.4477056 24.8741888
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    //lesson 233, also added script in HTML in the <head>
    const coords = [latitude, longitude];

    // console.log(this);
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

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; //converts to number
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //If workout is Running then create running object
    if (type === `running`) {
      const cadence = +inputCadence.value;
      //Check if data is valid (guard clause)
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert(`Input has to be a positive number`);

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If workout is cycling then create cycling object
    if (type === `cycling`) {
      const elevation = +inputElevation.value;
      //Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert(`Input has to be a positive number`);

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add a new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on the map as a marker
    this.renderWorkoutMarker(workout);

    // Render workout on list

    // Hide form + clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        ``;
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type} workout`)
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
