import Abstract from "../../abstract.js";
import moment from "moment";

const addTimeDifference = (trip) => {
  const {timeStart, timeEnd} = trip;
  return moment.utc(moment(timeEnd).diff(moment(timeStart))).format("h[h] mm[m]");
}

const addOfferSelectors = (trip) => {
  const {offers} = trip;
  return offers.map((offer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
  </li>`).join(``);
};

const addTripItem = (trip) => {
  const {icons, transport, city, timeStart, timeEnd, price} = trip;
  const offerDescriptionTemplate = addOfferSelectors(trip);
  const diff = addTimeDifference(trip)
  return (
    `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${icons}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${transport} ${city}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${timeStart}">${moment(timeStart).format('HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${timeEnd}">${moment(timeEnd).format('HH:mm')}</time>
          </p>
          <p class="event__duration">${diff}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${price}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
         ${offerDescriptionTemplate}
          
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class Trip extends Abstract {
  constructor(trip) {
    super();
    this._trip = trip;
    this._editClickHandler = this._editClickHandler.bind(this);
  }

  _getTemplate() {
    return addTripItem(this._trip);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  setEditTripClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }
}
