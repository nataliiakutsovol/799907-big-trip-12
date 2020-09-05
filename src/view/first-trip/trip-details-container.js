import Abstract from "../../abstract.js";

export default class TripDetails extends Abstract {

  _getTemplate() {
    return (
      `<section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      </section>
  
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      </section>`
    );
  }
}
