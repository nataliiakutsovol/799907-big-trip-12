import {createElement} from "./../../utils.js";

const addTripListContainer = () => {
  return (
    `<ul class="trip-days">
    </ul>`
  );
};

export default class TripListContainer {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addTripListContainer();
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
