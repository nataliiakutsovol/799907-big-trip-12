import {createElement} from "./../utils.js";
import {btnObj} from "./../const.js";

const addBtn = (i) => {
  return (
    `<button class="${btnObj.btnClass[i]}" type="${btnObj.type[i]}">${btnObj.text[i]}</button>`
  );
};

export default class Buttons {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate() {
    return addBtn(this._i);
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
