import {createElement} from "./../utils.js";
import {filterValue} from "./../const.js";

export default class FilterInput {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate(i) {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${filterValue[i]}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterValue[i]}" checked>
        <label class="trip-filters__filter-label" for="filter-${filterValue[i]}">${filterValue[i].toUpperCase()}</label>
      </div>`
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
