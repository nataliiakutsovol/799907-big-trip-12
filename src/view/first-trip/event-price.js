import {createElement} from "./../../utils.js";

const addEventPrice = () => {
  return (
    `<div><label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=""></div>`
  );
};

export default class EventPrice {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addEventPrice();
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
