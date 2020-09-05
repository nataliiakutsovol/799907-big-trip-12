import Abstract from "../../abstract.js";
import Trip from "./trip-item";
import TripBoard from "./../../presenter/trip-board";

export default class TripDayList extends Abstract {
  constructor(i, items) {
    super();
    this._i = i;
    this._items = items;
  }

  _getTemplate() {
    // создать элементом верстку дня и на основе нее взять querySelector(".trip-events__list") и выполнить рендер в массиве this._items
    return (
      `<li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">${this._i + 1}</span>
          <time class="day__date" datetime="2019-03-18">${this._items[0].date.toLocaleString(`en-US`, {day: `numeric`, month: `short`})}</time>
        </div>
        <ul class="trip-events__list">
        ${this._items.map((trip) => new TripBoard(trip)._renderTrip(trip)).join(` `)}
        </ul>
      </li>`
    );
  }
}

// ${this._items.map(trip => new Trip(trip)._getTemplate()).join(` `)}

// ${this._items.forEach(trip => new TripBoard(trip)._renderTrip(trip)).join(` `)}
