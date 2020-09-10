import Abstract from "../../abstract.js";

export default class TripDayList extends Abstract {
  constructor(i, items) {
    super();
    this._i = i;
    this._items = items;
  }

  _getTemplate() {
    return (
      `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${this._i + 1}</span>
          <time class="day__date" datetime="2019-03-18">${this._items[0].date.toLocaleString(`en-US`, {day: `numeric`, month: `short`})}</time>
        </div>
        <ul class="trip-events__list">
       
        </ul>
      </li>`
    );
  }
}

