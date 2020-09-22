import Abstract from "../abstract.js";
import {MenuItem} from "../const";

export default class Menu extends Abstract {
  constructor() {
    super();

    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  _getTemplate() {
    return (
      `<nav class="trip-controls__trip-tabs  trip-tabs">
        <a class="trip-tabs__btn  trip-tabs__btn--active" name="${MenuItem.TABLE}" href="#">Table</a>
        <a class="trip-tabs__btn" name="${MenuItem.STATISTICS}" href="#">Stats</a>
      </nav>`
    );
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    this._callback.menuClick(evt.target.name);
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }

  setMenuItem(menuItem) {
    const item = this.getElement().querySelector(`[name=${menuItem}]`);
    if (item !== null) {
      item.active = true;
    }
  }
}
