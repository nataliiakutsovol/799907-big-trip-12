import {transferValue} from "./../../const.js";
import Abstract from "../../abstract.js";

export default class TransferInput extends Abstract {
  constructor(i) {
    super();
    this._i = i;
  }

  _getTemplate() {
    return (
      `<div class="event__type-item">
        <input id="event-type-${transferValue[this._i].toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferValue[this._i].toLowerCase()}">
        <label class="event__type-label  event__type-label--${transferValue[this._i].toLowerCase()}" for="event-type-${transferValue[this._i].toLowerCase()}-1">${transferValue[this._i]}</label>
      </div>`
    );
  }
}
