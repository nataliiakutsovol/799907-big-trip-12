import {createElement} from "./../utils.js";
import {filterObj} from "./../const.js";

const addFilterInput = (i) => {

  return (
    `<div class="trip-filters__filter">
      <input id="${filterObj.id[i]}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterObj.value[i]}" checked>
      <label class="trip-filters__filter-label" for="${filterObj.id[i]}">${filterObj.text[i]}</label>
    </div>`
  );
};

export default class FilterInput {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate() {
    return addFilterInput(this._i);
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
