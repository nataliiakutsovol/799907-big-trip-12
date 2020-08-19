import {createElement} from "./../../utils.js";

const addTransferList = () => {
  return (
    `<fieldset class="event__type-group event__transfer">
      <legend class="visually-hidden">Transfer</legend>
    </fieldset>`
  );
};

export default class TransferList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addTransferList();
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
