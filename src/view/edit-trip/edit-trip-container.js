import Smart from "./../smart";
import {cities} from "../../const.js";

const addOfferSelectors = (data) => {
  const {offers} = data;
  return offers.map((offer) =>
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
      <label class="event__offer-label" for="event-offer-train-1">
        <span class="event__offer-title">${offer.name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`).join(``);
};

const addCitiesList = () => {
  return cities.map((city) =>
    `<option value="${city}"></option>`).join(``);
};

const addEditTripContainer = (data, i) => {
  const {transport, city, isDate, timeStart, timeEnd, price} = data;
  const offerDescriptionTemplate = addOfferSelectors(data);
  const citiesListTemplate = addCitiesList(i);
  return (
    `<form class="event  event--edit">
    <header class="event__header">
      <div class="event__type-wrapper"> </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${transport}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${citiesListTemplate}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${isDate.toLocaleString(`en-US`, {day: `numeric`, month: `numeric`, year: `2-digit`})} ${timeStart}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${isDate.toLocaleString(`en-US`, {day: `numeric`, month: `numeric`, year: `2-digit`})} ${timeEnd}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>

      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite">
      <label class="event__favorite-btn" for="event-favorite-1">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </label>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>

    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${offerDescriptionTemplate}
        </div>
      </section>
    </section>
  </form>`
  );
};

export default class EditTrip extends Smart {
  constructor(trip = null, i) {
    super();
    this._i = i;
    this._data = EditTrip.parseTripToData(trip);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._dateToggleHandler = this._dateToggleHandler.bind(this);
    this._priceInputHandler = this._priceInputHandler.bind(this);
    this._setInnerHandlers();
  }

  reset(trip) {
    this.updateData(EditTrip.parseTripToData(trip));
  }

  _getTemplate() {
    return addEditTripContainer(this._data, this._i);
  }

  static parseTripToData(trip) {
    return Object.assign(
        {},
        trip,
        {
          isDate: trip.date,  
        }   
    );
  }

  static parseDataToTrip(data) {

    data = Object.assign({}, data);

    if (!data.isDate) {
      data.isDate = null;
    }

    delete data.isDate;

    return data;
  }

  _dateToggleHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isDate: !this._data.isDate
    });
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setSubmitClickHandler(this._callback.onSubmit);
  }

  _setInnerHandlers() {
    this.getElement().querySelector(`.event__input--time`).addEventListener(`click`, this._dateToggleHandler);
    this.getElement().querySelector(`.event__input--destination`).addEventListener(`input`, this._cityInputHandler);
    this.getElement().querySelector(`.event__input--price`).addEventListener(`input`, this._priceInputHandler);
  }

  _cityInputHandler(evt) {
    evt.preventDefault();
    this.updateData({
      city: evt.target.value
    }, true);
  }

  _priceInputHandler(evt) {
    evt.preventDefault();
    this.updateData({
      price: evt.target.value
    }, true);
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.onSubmit(EditTrip.parseDataToTrip(this._data));
  }

  setSubmitClickHandler(callback) {
    this._callback.onSubmit = callback;
    this.getElement().querySelector(`.event__save-btn`).addEventListener(`submit`, this._formSubmitHandler);
  }
}
