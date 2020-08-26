import {createElement} from "./../../utils.js";

export default class TransferList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return (
      `<fieldset class="event__type-group event__transfer">
        <legend class="visually-hidden">Transfer</legend>
      </fieldset>`
    );
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
