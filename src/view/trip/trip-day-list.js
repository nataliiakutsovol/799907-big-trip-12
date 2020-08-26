import {createElement} from "./../../utils.js";

export default class TripDayList {
  constructor(i, trip) {
    this._element = null;
    this._i = i;
    this._trip = trip;
  }

  _getTemplate(i, trip) {
    const {date} = trip;
    return (
      `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${i + 1}</span>
          <time class="day__date" datetime="2019-03-18">${date.toLocaleString(`en-US`, {day: `numeric`, month: `short`})}</time>
        </div>
        <ul class="trip-events__list"></ul>
      </li>`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate(this._i, this._trip));
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
