import {createElement} from "./../../utils.js";

const addEventDestination = () => {
  return (
    `<div><label class="event__label  event__type-output" for="event-destination-1">Bus to</label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
      <option value="Saint Petersburg"></option>
    </datalist></div>`
  );
};

export default class EventDestination {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addEventDestination();
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
