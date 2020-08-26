import {createElement} from "./../utils.js";

export default class AcceptFiltersBtn {
  constructor() {
    this._element = null;
  }

  _getTemplate(text) {
    text = `Accept filter`;
    return (
      `<form class="trip-filters" action="#" method="get">
        <button class="visually-hidden" type="submit">${text}</button>
      </form>`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
