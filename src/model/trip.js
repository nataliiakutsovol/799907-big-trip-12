import Observer from "./../utils/observer";

export default class TripModel extends Observer {
  constructor() {
    super();
    this._trips = [];
  }

  setTrips(trips) {
    this._trips = trips.slice();
  }

  getTrips() {
    return this._trips;
  }
}
