import {registrationText} from "./../../const.js";
import {createElement} from "./../../utils.js";

export default class RegistrationInput {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate(i) {
    return (
      `<div class="event__type-item">
        <input id="event-type-${registrationText[i].toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${registrationText[i].toLowerCase()}">
        <label class="event__type-label  event__type-label--${registrationText[i].toLowerCase()}" for="event-type-${registrationText[i].toLowerCase()}-1">${registrationText[i]}</label>
      </div>`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate(this._i));
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
