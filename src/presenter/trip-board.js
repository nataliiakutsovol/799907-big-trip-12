import HeaderContainer from './../view/header-container.js';
import MainContainer from './../view/main-container.js';

import Menu from './../view/menu.js';
import FilterInput from './../view/filter-item.js';
import SortContainer from './../view/sorting-container.js';
import FirstTripEvent from './../view/first-trip/first-trip-container.js';
import TripListContainer from './../view/trip/trip-list-container.js';
import TripDayList from './../view/trip/trip-day-list.js';
import Trip from './../view/trip/trip-item.js';
import EditTrip from './../view/edit-trip/edit-trip-container.js';
import {render, replace} from './../utils/render.js';
import {TRIP_COUNT, SortType} from './../const.js';

export default class TripBoard {
  constructor(mainBody) {
    this._mainBody = mainBody;
    this._MainContainer = new MainContainer();
    this._HeaderContainer = new HeaderContainer();
    this._SortingContainer = new SortContainer();
    this._FirstTripContainer = new FirstTripEvent();
    this._TripListContainer = new TripListContainer();

    this._currentSortType = SortType.EVENT;
  }

  init(boardTrips) {
    this._boardTrips = boardTrips.slice();
    this._sourcedBoardTrips = boardTrips.slice();
    render(this._mainBody, this._MainContainer, true);
    render(this._mainBody, this._HeaderContainer, true);
    this._tripBoard();
  }

  _sortTrips(SortType) {
    switch (sortType) {
        
      case SortType.EVENT:
        this._boardTrips.sort(sortTripByEvent);
        break;
      case SortType.TIME:
        this._boardTrips.sort(sortTripByTime);
        break;
      case SortType.PRICE:
        this._boardTrips.sort(sortTripByPrice);
        break;
      default:
        this.__boardTrips = this._sourcedBoardTrips.slice();
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTrips(sortType);
    this._clearTripList();
    this._renderTripListItems();
  }

  _renderSorting() {
    render(this._MainContainer, this._SortingContainer);
    this._SortingContainer.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _clearTripListItems() {
    this._TripListContainer.getElement().innerHTML = ``;
    this._renderedTaskCount = TRIP_COUNT;
  }

  _renderFirstTrip() {
    render(this._SortingContainer, this._FirstTripContainer);
  }

  _renderTripDayListContainer() {
    render(this._SortingContainer, this._TripListContainer);
  }

  _renderTripDayList(i, dayTrips) {
    const tripDayList = new TripDayList(i, dayTrips);
    render(this._TripListContainer, tripDayList);
  }

  _renderTripListItems() {
    const dates = Array.from(new Set(this._boardTrips.map(trip => new Date(trip.date).setHours(0, 0, 0, 0)).sort()));
    dates.forEach((day, i) => {
      const dayTrips = this._boardTrips.filter((trip) => {
        return trip.date.getTime() >= day && trip.date.getTime() <= day + 1000 * 60 * 60 * 24;
      });
      this._renderTripDayList(i, dayTrips);
    });
  }

  _renderTrip(trip) {
    const tripElement = new Trip(trip);
    const tripEditElement = new EditTrip(trip);
    const tripItem = this._mainBody.querySelector(`.trip-events__list`);

    const replaceTripToEdit = () => {
      replace(tripEditElement, tripElement);
    };

    const replaceEditToTrip = () => {
      replace(tripElement, tripEditElement);
    };

    tripElement.setEditTripClickHandler(() => {
      replaceTripToEdit();
    });

    tripEditElement.setSubmitClickHandler(() => {
      replaceEditToTrip();
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        replaceEditToTrip();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    render(tripItem, tripElement, true);
  }

  //   _renderTripItems(from, to) {
  //     this._boardTrips
  //       .slice(from, to)
  //       .forEach((boardTrip) => this._renderTrip(boardTrip));
  //   }

  _tripBoard() {
    this._renderSorting();
    this._renderFirstTrip();
    this._renderTripDayListContainer();
    this._renderTripListItems(0, Math.min(this._boardTrips.length, TRIP_COUNT));
    // this._renderTripItems()
  }
}
