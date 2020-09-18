import {filterValue} from "./../const.js";
import Abstract from "../abstract.js";

const addFilterItem = () => {
  return filterValue.map((filter) =>
    `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" checked>
      <label class="trip-filters__filter-label" for="filter-${filter}">${filter}</label>
    </div>`).join(` `);
}

export default class FilterInput extends Abstract {
  constructor(i) {
    super();
    this._i = i;
  }

  _getTemplate(i) {
    const filterTeplate = addFilterItem(i);
    return (
      `<form class="trip-filters" action="#" method="get">
        <button class="visually-hidden" type="submit">Accept filter</button>
        ${filterTeplate}
      </form>`
    )
  }
}
