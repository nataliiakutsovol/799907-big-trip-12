import Trip from './../view/trip/trip-item.js';
import EditTrip from './../view/edit-trip/edit-trip-container.js';
import {render, replace, remove} from './../utils/render';

export default class TripPresenter {
  constructor(tripDayList, changeData) {

    this._tripDayList = tripDayList;
    this._changeData = changeData;

    this._tripElement = null;
    this._tripEditElement = null;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._editClickHandler = this._editClickHandler.bind(this);
    this._addToFavoriteHandler = this._addToFavoriteHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);

  }

  init(trip) {
    this._trip = trip;

    const prevTripElement = this._tripElement;
    const prevEditTripElement = this._tripEditElement;

    this._tripElement = new Trip(trip);
    this._tripEditElement = new EditTrip(trip);

    this._tripElement.setEditTripClickHandler(this._editClickHandler);
    this._tripEditElement.setFavoriteClickHandler(this._addToFavoriteHandler);
    this._tripEditElement.setSubmitClickHandler(this._formSubmitHandler);

    if (prevTripElement === null || prevEditTripElement === null) {
      render(this._tripDayList, this._tripElement, true);
      return;
    }

    if (this._tripDayList.getElement().containts(prevTripElement.getElement())) {
      replace(this._tripElement, prevTripElement);
    }

    if (this._tripDayList.getElement().containts(prevEditTripElement.getElement())) {
      replace(this._tripEditElement, prevEditTripElement);
    }

    remove(prevTripElement);
    remove(prevEditTripElement);
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

  _addToFavoriteHandler() {
    this._changeData(
        Object.assign(
            { },
            this._trip,
            {
              isFavorite: !this._trip.isFavorite,
            }
        )
    );
  }

  _formSubmitHandler(trip) {
    this._changeData(trip);
    this._replaceEditToTrip();
  }

  destroy() {
    remove(this._tripElement);
    remove(this._tripEditElement);
  }
}
