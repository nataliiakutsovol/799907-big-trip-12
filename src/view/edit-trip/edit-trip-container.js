import Smart from "./../smart";
import {cities, eventRegistrationType, eventTransferType} from "../../const.js";
import {generateId} from "./../../mock/trip-item";
import flatpickr from "flatpickr";
import "./../../../node_modules/flatpickr/dist/flatpickr.min.css";

const BLANK_TRIP = {
  type: {
    name: `bus`,
    label: `Bus to `
  },
  id: generateId(),
  city: null,
  date: new Date(),
  timeStart: new Date(),
  timeEnd: new Date(),
  offers: [],
  destination: ``,
  isFavorite: false,
};

const addOfferSelectors = (data) => {
  const {offers} = data;
  return offers ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${offers.map((offer, i) =>
    `<div class="event__offer-selector">
          <input class="event__offer-checkbox visually-hidden" id="event-offer-train-${i + 1}" type="checkbox" title="${offer.name}" name="event-offer-train">
          <label class="event__offer-label" for="event-offer-train-${i + 1}">
            <span class="event__offer-title">${offer.name}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
          </label>
        </div>`).join(``)}
      </div>
    </section>` : ` `;
};

const addDestination = (data) => {
  const {destination} = data;
  return destination ? `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${destination.text}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
    ${destination.photos.map((photo) =>
    `<img class="event__photo" src="img/photos/${photo}.jpg" alt="Event photo">`).join(``)}
    </div>
  </div>
</section>` : ` `;
};

const addCitiesList = () => {
  return cities.map((city) =>
    `<option value="${city}"></option>`).join(``);
};

const addTransferList = () => {
  return eventTransferType.map((transfer) =>
    `<div class="event__type-item">
      <input  id="event-type-${transfer.name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" title="${transfer.label}" value="${transfer.name}">
      <label class="event__type-label  event__type-label--${transfer.name}" for="event-type-${transfer.name}-1">${transfer.name.charAt(0).toUpperCase() + transfer.name.substr(1)}</label>
    </div>`).join(``);
};

const addRegistrationList = () => {
  return eventRegistrationType.map((registration) =>
    `<div class="event__type-item">
      <input id="event-type-${registration.name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" title="${registration.label}" value="${registration.name}">
      <label class="event__type-label  event__type-label--${registration.name}" for="event-type-${registration.name}-1">${registration.name.charAt(0).toUpperCase() + registration.name.substr(1)}</label>
    </div>`).join(` `);
};

const addEditTripContainer = (data, i) => {
  const {type, city, isDate, price, isFavorite} = data;
  const offerDescriptionTemplate = addOfferSelectors(data);
  const destinationTemplate = addDestination(data);
  const citiesListTemplate = addCitiesList(i);
  const transferListTemplate = addTransferList(i);
  const registrationListTemplate = addRegistrationList(i);

  return (
    `<form class="event  event--edit">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type.name}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle" type="checkbox">
  
        <div class="event__type-list">
        <fieldset class="event__type-group event__transfer">
          <legend class="visually-hidden">Transfer</legend>
          ${transferListTemplate}
        </fieldset>
        <fieldset class="event__type-group event__registration">
          <legend class="visually-hidden">Activity</legend>
          ${registrationListTemplate}
        </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination">
        ${type.label}
        </label>
        <input class="event__input  event__input--destination" id="event-destination" type="text" name="event-destination" value="${city ? city : ``}" list="destination-list-1" required>
        <datalist id="destination-list-1">
        ${citiesListTemplate}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${isDate}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-2">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-2" type="text" name="event-end-time" value="${isDate}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-2">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${price ? price : ``}" required>
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit" >Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>

      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" ${isFavorite === true ? `checked` : ` `}>
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
    ${type.isEventDetails ? offerDescriptionTemplate : ``}
    ${type.isEventDetails ? destinationTemplate : ``}
    </section>
  </form>`
  );
};

export default class EditTrip extends Smart {
  constructor(trip = BLANK_TRIP, i) {
    super();
    this._i = i;
    this._data = EditTrip.parseTripToData(trip);
    this._datepicker = null;
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formDeleteHandler = this._formDeleteHandler.bind(this);
    this._dateChangeHandler = this._dateChangeHandler.bind(this);
    this._addEventTypeHandler = this._addEventTypeHandler.bind(this);
    this._addOffers = this._addOffers.bind(this);
    this._cityInputHandler = this._cityInputHandler.bind(this);
    this._addToFavoriteHandler = this._addToFavoriteHandler.bind(this);
    this._priceInputHandler = this._priceInputHandler.bind(this);
    this._tripClickHandler = this._tripClickHandler.bind(this);
    this._setInnerHandlers();
    this._setDatepicker();
  }

  removeElement() {
    super.removeElement();

    if (this._datepicker) {
      // this._datepicker.destroy();
      this._datepicker = null;
    }
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

  restoreHandlers() {
    this._setInnerHandlers();
    this._setDatepicker();
    this.setOffersClickHandler(this._callback.offersClick);
    this.setEventTypeClickHandler(this._callback.evenTypeClick);
    this.setSubmitClickHandler(this._callback.onSubmit);
    this.setDeleteClickHandler(this._callback.onDelete);
  }

  _setInnerHandlers() {
    this.getElement().querySelectorAll(`.event__offer-checkbox`).forEach((el) => {
      el.addEventListener(`input`, this._addOffers);
    });
    this.getElement().querySelector(`.event__input--destination`).addEventListener(`input`, this._cityInputHandler);
    this.getElement().querySelector(`.event__input--price`).addEventListener(`input`, this._priceInputHandler);
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._addToFavoriteHandler);
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

  _dateChangeHandler([userDate]) {
    userDate.setHours(23, 59, 59, 999);
    this.updateData({
      date: userDate
    });
  }

  _setDatepicker() {
    if (this._datepicker) {
      this._datepicker.destroy();
      this._datepicker = null;
    }
    if (this._data.isDate) {
      this._datepicker = flatpickr(
          this.getElement().querySelectorAll(`.event__input--time`),
          {
            dateFormat: `m/d/y H:i`,
            defaultDate: this._data.date,
            onChange: this._dateChangeHandler,
          }
      );
    }
  }

  _addToFavoriteHandler(evt) {
    evt.preventDefault();
    this.updateData({
      isFavorite: !this._data.isFavorite,
    }, true);
  }

  _addOffers(evt) {
    const offer = this._data.offers.find((c) => c.name === evt.target.title);
    const offers = [];
    offers.push(offer);
    this.updateData({
      offers: offers
    }, true);
  }

  _addEventTypeHandler(evt) {
    evt.preventDefault();
    const type = [...eventTransferType, ...eventRegistrationType].find((c) => c.name === evt.target.value);
    this.updateData({
      type: type
    }, true);
    this._callback.evenTypeClick(this._data);
  }

  setEventTypeClickHandler(callback) {
    this._callback.evenTypeClick = callback;
    this.getElement()
    .querySelectorAll(`.event__type-input`).forEach((el) => {
      el.addEventListener(`input`, this._addEventTypeHandler);
    });
  }

  _formSubmitHandler(evt) {
    evt.preventDefault();
    this._callback.onSubmit(EditTrip.parseDataToTrip(this._data));
  }

  setSubmitClickHandler(callback) {
    this._callback.onSubmit = callback;
    this.getElement()
    .addEventListener(`submit`, this._formSubmitHandler);
  }

  _formDeleteHandler(evt) {
    evt.preventDefault();
    this._callback.onDelete(EditTrip.parseDataToTrip(this._data));
  }

  setDeleteClickHandler(callback) {
    this._callback.onDelete = callback;
    this.getElement()
    .querySelector(`.event__reset-btn`).addEventListener(`click`, this._formDeleteHandler);
  }

  _tripClickHandler(evt) {
    evt.preventDefault();
    this._callback.tripClick();
  }

  setTripClickHandler(callback) {
    this._callback.tripClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._tripClickHandler);
  }
}
