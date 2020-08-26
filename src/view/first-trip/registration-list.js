import {createElement} from "./../../utils.js";

export default class RegistrationList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return (
      `<fieldset class="event__type-group event__registration">
        <legend class="visually-hidden">Activity</legend>
      </fieldset>`
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
