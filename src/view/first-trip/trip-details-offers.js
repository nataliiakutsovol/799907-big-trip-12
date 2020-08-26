import {offerDescription} from "./../../const.js";
import {createElement} from "./../../utils.js";

export default class TripOffers {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return (
      `<div class="event__available-offers">
      ${offerDescription.map((offer) =>
        `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">${offer.name}</span> 
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </label>
        </div>`).join(``)}
    </div>`);
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
