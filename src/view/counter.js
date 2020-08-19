import {createElement} from "./../utils.js";

const addTripCount = (counter) => {
  counter = 11;
  return (
    `<section class="trip-main__trip-info  trip-info">
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${counter}</span>
      </p>
    </section>`
  );
};

export default class TripCounter {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addTripCount();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
