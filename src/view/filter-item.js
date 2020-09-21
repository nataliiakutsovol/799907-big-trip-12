import Abstract from "../abstract.js";

const addFilterItem = (filters, currentFilterType) => {
  return filters.map((filter) =>
    `<div class="trip-filters__filter">
      <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter.type}" ${filter.type === currentFilterType ? `checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-${filter.type}">${filter.type}</label>
    </div>`).join(` `);
};

export default class FilterInput extends Abstract {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  _getTemplate() {
    const filterTepmlate = addFilterItem(this._filters, this._currentFilter);
    return (
      `<form class="trip-filters" action="#" method="get">
        <button class="visually-hidden" type="submit">Accept filter</button>
        ${filterTepmlate}
      </form>`
    );
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}
