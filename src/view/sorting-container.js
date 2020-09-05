import {sortId, SortType} from "./../const.js";
import Abstract from "../abstract.js";

const addSortingItem = () => {
  return sortId.map((sort) =>
    `<div class="trip-sort__item  trip-sort__item--${sort}">
      <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}" data-sort-type="${sort}">
      <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
    </div>`).join(``);
};

export default class SortContainer extends Abstract {
  constructor(i) {
    super();
    this._i = i;
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  _getTemplate(i) {
    const SortingItemTemplate = addSortingItem(i);
    return (
      `<div class="page-body__container">
      <section class="trip-events">
        <h2 class="visually-hidden">Trip events</h2>

        <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
          <span class="trip-sort__item  trip-sort__item--day">Day</span>
          ${SortingItemTemplate}
          <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
        </form>

        <!-- Контент -->
      </section>
    </div>`
    );
  }

  _sortTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A`) {
      return;
    }

    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._sortTypeChangeHandler);
  }
}
