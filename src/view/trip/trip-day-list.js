import Abstract from "../../abstract.js";
import moment from "moment";

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
          <time class="day__date" datetime="2019-03-18">${moment(this._items[0].date).format(`MMM D`)}</time>
        </div>
        <ul class="trip-events__list">
       
        </ul>
      </li>`
    );
  }
}

