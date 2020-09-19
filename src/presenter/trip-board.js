import HeaderContainer from './../view/header-container.js';
import MainContainer from './../view/main-container.js';
import TripCounter from './../view/counter.js';
import Menu from './../view/menu.js';
import FilterInput from './../view/filter-item.js';
import SortContainer from './../view/sorting-container.js';
import FirstTripEvent from './../view/first-trip/first-trip-container.js';
import TripListContainer from './../view/trip/trip-list-container.js';
import TripDayList from './../view/trip/trip-day-list.js';
import {render} from './../utils/render.js';
import {updateItem} from './../utils/common';
import {TRIP_COUNT, SortType} from './../const.js';
import TripPresenter from './trip';

export default class TripBoard {
  constructor(mainBody) {
    this._mainBody = mainBody;
    this._MainContainer = new MainContainer();
    this._HeaderContainer = new HeaderContainer();
    this._MenuContainer = new Menu();
    this._SortingContainer = new SortContainer();
    this._FirstTripContainer = new FirstTripEvent();
    this._TripListContainer = new TripListContainer();
    this._currentSortType = SortType.EVENT;
    this._tripPresenter = {};

    this._handleTripChange = this._handleTripChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(boardTrips) {
    this._boardTrips = boardTrips.slice();
    this._sourcedBoardTrips = boardTrips.slice();
    render(this._mainBody, this._MainContainer, true);
    render(this._mainBody, this._HeaderContainer, true);
    this._tripBoard();
  }

  _handleModeChange() {
    Object
      .values(this._tripPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleTripChange(updatedTrip) {
    this._boardTrips = updateItem(this._boardTrips, updatedTrip);
    this._sourcedBoardTrips = updateItem(this._sourcedBoardTrips, updatedTrip);
    this._tripPresenter[updatedTrip.id].init(updatedTrip);
  }

  // _sortTrips(SortType) {
  //   switch (sortType) {
  //     case SortType.EVENT:
  //       this._boardTrips.sort(sortTripByEvent);
  //       break;
  //     case SortType.TIME:
  //       this._boardTrips.sort(sortTripByTime);
  //       break;
  //     case SortType.PRICE:
  //       this._boardTrips.sort(sortTripByPrice);
  //       break;
  //     default:
  //       this.__boardTrips = this._sourcedBoardTrips.slice();
  //   }
  // }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTrips(sortType);
    this._clearTripList();
    this._renderTripItemsList();
  }

  _renderCounter() {
    this._TripCounter = new TripCounter();
    const tripCounterSection = this._HeaderContainer.getElement().querySelector(`.trip-main`);
    render(tripCounterSection, this._TripCounter, true);
  }

  _menuContainer() {
    const menuContainer = this._HeaderContainer.getElement().querySelector(`.trip-controls`);
    render(menuContainer, this._MenuContainer);
  }

  _renderFilters() {
    this._Filters = new FilterInput();
    const FilterItems = this._HeaderContainer.getElement().querySelector(`.trip-controls`);
    render(FilterItems, this._Filters);
  }

  _renderSorting() {
    render(this._MainContainer, this._SortingContainer);
    this._SortingContainer.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderFirstTrip() {
    render(this._SortingContainer, this._FirstTripContainer);
  }

  _renderTripDayListContainer() {
    render(this._SortingContainer, this._TripListContainer);
  }

  _renderTripDayList(i, dayTrips, tripDayList) {
    const daysList = new TripDayList(i, dayTrips);
    tripDayList = daysList.getElement().querySelector(`ul.trip-events__list`);
    render(this._TripListContainer, daysList);

    dayTrips.forEach((dayTrip) => {
      this._renderTrip(tripDayList, i, dayTrip);
    });
  }

  _renderTripItemsList() {
    const dates = Array.from(new Set(this._boardTrips.map((trip) => new Date(trip.date).setHours(0, 0, 0, 0)).sort()));
    dates.forEach((day, i) => {
      const dayTrips = this._boardTrips.filter((trip) => {
        return (trip.date.getTime() >= day && trip.date.getTime() <= day + 1000 * 60 * 60 * 24);
      });
      this._renderTripDayList(i, dayTrips);
    });

  }

  _renderTrip(tripDayList, i, trip) {
    const tripPresenter = new TripPresenter(tripDayList, this._handleTripChange, this._handleModeChange);
    tripPresenter.init(trip);
    this._tripPresenter[trip.id] = tripPresenter;
  }

  _clearTripList() {
    Object.values(this._tripPresenter).forEach((presenter) => presenter.destroy());
    this._tripPresenter = {};
  }

  _tripBoard() {
    this._renderCounter();
    this._menuContainer();
    this._renderFilters();
    this._renderSorting();
    // this._renderFirstTrip();
    this._renderTripDayListContainer();
    this._renderTripItemsList(0, Math.min(this._boardTrips.length, TRIP_COUNT));
  }
}
