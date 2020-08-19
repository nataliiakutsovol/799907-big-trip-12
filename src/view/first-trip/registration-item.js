import {registrationObj} from "./../../const.js";
import {createElement} from "./../../utils.js";

const addRegistrationInput = (i) => {
  return (
    `<div class="event__type-item">
      <input id="${registrationObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${registrationObj.value[i]}">
      <label class="event__type-label  ${registrationObj.labelClass[i]}" for="${registrationObj.id[i]}">${registrationObj.text[i]}</label>
    </div>`
  );
};

export default class RegistrationInput {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate() {
    return addRegistrationInput(this._i);
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
