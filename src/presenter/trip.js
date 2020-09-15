import Trip from './../view/trip/trip-item.js';
import EditTrip from './../view/edit-trip/edit-trip-container.js';
import {render, replace} from './../utils/render';

export default class TripPresenter {
  constructor(tripDayList) {
    this._tripDayList = tripDayList;

    this._tripElement = null;
    this._tripEditElement = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._editClickHandler = this._editClickHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  init(trip) {
    this._trip = trip;
    this._tripElement = new Trip(trip);
    this._tripEditElement = new EditTrip(trip);

    this._tripElement.setEditTripClickHandler(this._editClickHandler);
    this._tripEditElement.setSubmitClickHandler(this._formSubmitHandler);

    render(this._tripDayList, this._tripElement, true);
  }

  _replaceTripToEdit() {
    replace(this._tripEditElement, this._tripElement);
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  _replaceEditToTrip() {
    replace(this._tripElement, this._tripEditElement);
    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceEditToTrip();
    }
  }

  _editClickHandler() {
    this._replaceTripToEdit();
  }

  _formSubmitHandler() {
    this._replaceEditToTrip();
  }
}
