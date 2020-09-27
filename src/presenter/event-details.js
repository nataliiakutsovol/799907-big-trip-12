import EditTrip from './../view/edit-trip/edit-trip-container.js';

export default class EventDetailsPresenter {
  constructor(changeData, tripsModel, eventTypeModel) {
    this._changeData = changeData;
    this._tripsModel = tripsModel;
    this._eventTypeModel = eventTypeModel;
    this._tripEditElement = null;
  }

  init(trip) {
    this._trip = trip;
    this._tripEditElement = new EditTrip(trip);
  }
}
