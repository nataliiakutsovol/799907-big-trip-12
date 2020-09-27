import Abstract from "../abstract.js";

export default class TripCounter extends Abstract {
  constructor(tripModel) {
    super();
    this._trips = tripModel.getTrips();
  }

  takeTotalSum() {
    return Array.from(this._trips.map((trip) => trip.price)).reduce((a, b) => a + b, 0);
  }

  _getTemplate() {
    const counter = this.takeTotalSum();
    return (
      `<section class="trip-main__trip-info  trip-info">
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${counter}</span>
        </p>
      </section>`
    );
  }
}
