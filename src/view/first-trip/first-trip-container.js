import {createElement} from "./../../utils.js";

export default class FirstTripEvent {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return (
      `<form class="trip-events__item  event  event--edit" action="#" method="post">
        <header class="event__header">
              
          <div class="event__type-wrapper"></div>
    
          <div class="event__field-group  event__field-group--destination"></div>
    
          <div class="event__field-group  event__field-group--time"></div>
    
          <div class="event__field-group  event__field-group--price"></div>
        </header>
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
