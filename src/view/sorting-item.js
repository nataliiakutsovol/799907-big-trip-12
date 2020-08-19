import {createElement} from "./../utils.js";
import {sortObj} from "./../const.js";

const addSortInput = (i) => {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortObj.id[i]}">
      <input id="sort-${sortObj.id[i]}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortObj.id[i]}">
      <label class="trip-sort__btn" for="sort-${sortObj.id[i]}">${sortObj.text[i]}</label>
    </div>`
  );
};

export default class SortItem {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate() {
    return addSortInput(this._i);
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
