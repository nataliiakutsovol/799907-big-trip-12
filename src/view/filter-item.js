import {filterValue} from "./../const.js";
import Abstract from "../abstract.js";

export default class FilterInput extends Abstract {
  constructor(i) {
    super();
    this._i = i;
  }

  _getTemplate() {
    return (
      `<div class="trip-filters__filter">
        <input id="filter-${filterValue[this._i]}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterValue[this._i]}" checked>
        <label class="trip-filters__filter-label" for="filter-${filterValue[this._i]}">${filterValue[this._i]}</label>
      </div>`
    );
  }
}
