import Abstract from "../abstract.js";

export default class TripCounter extends Abstract {

  _getTemplate(counter) {
    //counter = 11;
    return (
      `<section class="trip-main__trip-info  trip-info">
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${counter}</span>
        </p>
      </section>`
    );
  }
}
