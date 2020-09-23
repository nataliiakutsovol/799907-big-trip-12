import Trip from './../view/trip/trip-item.js';
import EditTrip from './../view/edit-trip/edit-trip-container.js';
import {render, replace, remove} from './../utils/render';
import {UserAction, UpdateType} from "./../const.js";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class TripPresenter {
  constructor(tripDayList, changeData, changeMode) {
    this._tripDayList = tripDayList;
    this._changeData = changeData;

    this._tripElement = null;
    this._tripEditElement = null;
    this._mode = Mode.DEFAULT;

    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._editClickHandler = this._editClickHandler.bind(this);
    this._tripClickHandler = this._tripClickHandler.bind(this);
    this._addToFavoriteHandler = this._addToFavoriteHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formDeleteHandler = this._formDeleteHandler.bind(this);
    this._changeMode = changeMode;
  }

  init(trip) {
    this._trip = trip;

    const prevTripElement = this._tripElement;
    const prevEditTripElement = this._tripEditElement;

    this._tripElement = new Trip(trip);
    this._tripEditElement = new EditTrip(trip);

    this._tripElement.setEditTripClickHandler(this._editClickHandler);
    this._tripEditElement.setTripClickHandler(this._tripClickHandler);
    this._tripEditElement.setFavoriteClickHandler(this._addToFavoriteHandler);
    this._tripEditElement.setSubmitClickHandler(this._formSubmitHandler);
    this._tripEditElement.setDeleteClickHandler(this._formDeleteHandler);

    if (prevTripElement === null || prevEditTripElement === null) {
      render(this._tripDayList, this._tripElement, true);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._tripElement, prevTripElement);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._tripEditElement, prevEditTripElement);
    }

    remove(prevTripElement);
    remove(prevEditTripElement);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToTrip();
    }
  }

  _replaceTripToEdit() {
    replace(this._tripEditElement, this._tripElement);
    document.addEventListener(`keydown`, this._onEscKeyDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceEditToTrip() {
    replace(this._tripElement, this._tripEditElement);
    document.addEventListener(`keydown`, this._onEscKeyDown);
    this._mode = Mode.DEFAULT;
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._tripEditElement.reset(this._trip);
      this._replaceEditToTrip();
    }
  }

  _tripClickHandler() {
    this._replaceEditToTrip();
  }

  _editClickHandler() {
    this._replaceTripToEdit();
  }

  _addToFavoriteHandler() {
    this._changeData(
        UserAction.UPDATE_TRIP,
        UpdateType.PATCH,
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
    this._changeData(
        UserAction.UPDATE_TRIP,
        UpdateType.MINOR,
        trip);
    this._replaceEditToTrip();
  }

  _formDeleteHandler(trip) {
    this._changeData(
        UserAction.DELETE_TRIP,
        UpdateType.MINOR,
        trip
    );
  }

  destroy() {
    remove(this._tripElement);
    remove(this._tripEditElement);
  }
}
