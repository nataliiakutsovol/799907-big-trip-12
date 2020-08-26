import {createElement} from "./../utils.js";
import {sortId} from "./../const.js";

const addSortingItem = () => {
  return sortId.map((sort) =>
    `<div class="trip-sort__item  trip-sort__item--${sort}">
      <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}">
      <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
    </div>`).join(``);
};

export default class SortContainer {
  constructor(i) {
    this._element = null;
    this._i = i;
  }

  _getTemplate(i) {
    const SortingItemTemplate = addSortingItem(i);
    return (
      `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>
        ${SortingItemTemplate}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
      </form>`
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
