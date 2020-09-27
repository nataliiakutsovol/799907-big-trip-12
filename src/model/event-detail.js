import Observer from "./../utils/observer";

export default class EventDetailModel extends Observer {
  constructor() {
    super();
    this._offers = [];
    this._destination = [];
  }

  setOffers(offers) {
    this._offers = offers.slice();
  }

  setDestination(destination) {
    this._destination = destination.slice();
  }

  getOffers() {
    return this._offers;
  }

  getDestination() {
    return this._destination;
  }
}
