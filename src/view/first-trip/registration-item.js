import {registrationText} from "./../../const.js";
import Abstract from "../../abstract.js";

export default class RegistrationInput extends Abstract {
  constructor(i) {
    super();
    this._i = i;
  }

  _getTemplate() {
    return (
      `<div class="event__type-item">
        <input id="event-type-${registrationText[this._i].toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${registrationText[this._i].toLowerCase()}">
        <label class="event__type-label  event__type-label--${registrationText[this._i].toLowerCase()}" for="event-type-${registrationText[this._i].toLowerCase()}-1">${registrationText[this._i]}</label>
      </div>`
    );
  }
}
