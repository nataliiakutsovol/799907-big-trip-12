import Abstract from "../../abstract.js";

export default class EventPrice extends Abstract {

  _getTemplate() {
    return (
      `<div><label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=""></div>`
    );
  }
}
