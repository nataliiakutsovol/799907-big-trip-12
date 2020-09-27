import {render, remove} from './../utils/render.js';
import EditTrip from './../view/edit-trip/edit-trip-container.js';
import {generateId} from "./../mock/trip-item";
import {UpdateType, UserAction} from './../const.js';

export default class FirstTripPresenter {
  constructor(TripListContainer, changeData, tripsModel) {
    this._TripListContainer = TripListContainer;
    this._changeData = changeData;
    this._tripsModel = tripsModel;
    this._tripEditElement = null;
    this._addEventTypeHandler = this._addEventTypeHandler.bind(this);
    this._addToFavoriteHandler = this._addToFavoriteHandler.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
    this._formDeleteHandler = this._formDeleteHandler.bind(this);
    this._tripClickHandler = this._tripClickHandler.bind(this);
  }

  init() {
    if (this._tripEditElement !== null) {
      return;
    }

    this._tripEditElement = new EditTrip();
    this._tripEditElement.setTripClickHandler(this._addToFavoriteHandler);
    this._tripEditElement.setEventTypeClickHandler(this._addEventTypeHandler);
    this._tripEditElement.setTripClickHandler(this._tripClickHandler);
    this._tripEditElement.setSubmitClickHandler(this._formSubmitHandler);
    this._tripEditElement.setDeleteClickHandler(this._formDeleteHandler);

    render(this._TripListContainer, this._tripEditElement, true);

    document.addEventListener(`keydown`, this._onEscKeyDown);
  }

  destroy() {
    if (this._tripEditElement === null) {
      return;
    }

    remove(this._tripEditElement);
    this._tripEditElement = null;

    document.removeEventListener(`keydown`, this._onEscKeyDown);
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

  _addEventTypeHandler(trip) {
    this._changeData(
        UserAction.ADD_TRIP,
        UpdateType.PATCH,
        trip
    );
  }

  _formSubmitHandler(trip) {
    this._changeData(
        UserAction.ADD_TRIP,
        UpdateType.MINOR,
        Object.assign({id: generateId()}, trip)
    );
    this.destroy();
  }

  _formDeleteHandler() {
    this.destroy();
  }

  _tripClickHandler() {
    this.destroy();
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.destroy();
    }
  }
}
