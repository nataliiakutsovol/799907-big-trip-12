import {createElement} from "./../../utils.js";

const addRegistrationList = () => {
  return (
    `<fieldset class="event__type-group event__registration">
      <legend class="visually-hidden">Activity</legend>
    </fieldset>`
  );
};

export default class RegistrationList {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return addRegistrationList();
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
