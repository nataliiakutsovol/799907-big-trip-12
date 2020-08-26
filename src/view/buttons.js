import {createElement} from "./../utils.js";
import {btnObj} from "./../const.js";

export default class Buttons {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate(i) {
    return (
      `<button class="${btnObj.btnClass[i]}" type="${btnObj.type[i]}">${btnObj.text[i]}</button>`
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
