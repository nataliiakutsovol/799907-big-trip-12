
import {createElement} from "./../utils.js";

export default class EventTypeIconSection {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return (
      `<div><label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
    
      <div class="event__type-list"></div>
      </div>`
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
