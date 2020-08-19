import {transferObj} from "./../../const.js";
import {createElement} from "./../../utils.js";

const addTransferInput = (i) => {
  return (
    `<div class="event__type-item">
      <input id="${transferObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferObj.value[i]}">
      <label class="event__type-label  ${transferObj.labelClass[i]}" for="${transferObj.id[i]}">${transferObj.text[i]}</label>
    </div>`
  );
};

export default class TransferInput {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate() {
    return addTransferInput(this._i);
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
