import NoTripsContainer from "./../view/no-trips";
import HeaderContainer from './../view/header-container.js';
import MainContainer from './../view/main-container.js';
import TripCounter from './../view/counter.js';
import Menu from './../view/menu.js';
import SortContainer from './../view/sorting-container.js';
import FirstTripEvent from './../view/first-trip/first-trip-container.js';
import TripListContainer from './../view/trip/trip-list-container.js';
import TripDayList from './../view/trip/trip-day-list.js';
import {render, remove} from './../utils/render.js';
import {filter} from "./../utils/filters.js";
import {SortType, UpdateType, UserAction} from './../const.js';
import TripPresenter from './trip';

export default class TripBoard {
  constructor(mainBody, tripModel, filtersModel) {
    this._mainBody = mainBody;
    this._tripsModel = tripModel;
    this._filtersModel = filtersModel;
    this._MainContainer = new MainContainer();
    this._HeaderContainer = new HeaderContainer();
    this._MenuContainer = new Menu();
    this._SortingContainer = new SortContainer();
    this._FirstTripContainer = new FirstTripEvent();
    this._TripListContainer = new TripListContainer();
    this._NoTripsContainer = new NoTripsContainer();
    this._currentSortType = SortType.EVENT;
    this._tripPresenter = {};
    this._filtersPresenter = {};

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);

    this._tripsModel.addObserver(this._handleModelEvent);
    this._filtersModel.addObserver(this._handleModelEvent);
  }

  init() {
    render(this._mainBody, this._MainContainer);
    this._tripBoard();
    this._tripList();
  }

  destroy() {
    this._clearBoard({resetRenderedTaskCount: true, resetSortType: true});
    this._tripsModel.removeObserver(this._handleModelEvent);
    this._filtersModel.removeObserver(this._handleModelEvent);
    remove(this._MainContainer);
  }
  _getTrips() {
    // switch (this._currentSortType) {
    //   case SortType.EVENT:
    //     return this._tripsModel.getTrips().slice().sort(sortTripByEvent);
    //   case SortType.TIME:
    //     return this._tripsModel.getTrips().slice().sort(sortTripByTime);
    //   case SortType.PRICE:
    //     return this._tripsModel.getTrips().slice().sort(sortTripByPrice);
    // }

    const filterType = this._filtersModel.getFilters();
    const trips = this._tripsModel.getTrips();
    const filtredTrips = filter[filterType](trips);
    return filtredTrips;
  }

  _handleModeChange() {
    Object
      .values(this._tripPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_TRIP:
        this._tripsModel.updateTrip(updateType, update);
        break;
      case UserAction.ADD_TRIP:
        this._tripsModel.addTrip(updateType, update);
        break;
      case UserAction.DELETE_TRIP:
        this._tripsModel.deleteTrip(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._tripPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearBoard();
        this._tripList();
        break;
      case UpdateType.MAJOR:
        this._clearBoard();
        this._tripList();
        break;
    }
  }

  _handleSortTypeChange(sortType, resetSortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortTrips(sortType);
    this._clearBoard(resetSortType = true);
    this._tripList();
  }

  _renderCounter() {
    this._TripCounter = new TripCounter();
    const tripCounterSection = this._HeaderContainer.getElement().querySelector(`.trip-main`);
    render(tripCounterSection, this._TripCounter, true);
  }

  _renderSorting() {
    render(this._MainContainer, this._SortingContainer);
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
    const dates = Array.from(new Set(this._getTrips().map((trip) => new Date(trip.date).setHours(0, 0, 0, 0)).sort()));
    dates.forEach((day, i) => {
      const dayTrips = this._getTrips().filter((trip) => {
        return (trip.date.getTime() >= day && trip.date.getTime() <= day + 1000 * 60 * 60 * 24);
      });
      this._renderTripDayList(i, dayTrips);
    });
  }

  _renderTrip(tripDayList, i, trip) {
    const tripPresenter = new TripPresenter(tripDayList, this._handleViewAction, this._handleModeChange);
    tripPresenter.init(trip);
    this._tripPresenter[trip.id] = tripPresenter;
  }

  _renderNoTrips() {
    render(this._MainContainer, this._NoTripsContainer);
  }

  _clearBoard({resetSortType = false} = {}) {
    const tripCount = this._getTrips().length;

    Object
      .values(this._tripPresenter)
      .forEach((presenter) => presenter.destroy());
    this._tripPresenter = {};

    remove(this._SortingContainer);
    remove(this._TripListContainer);

    this._renderedTripCount = Math.min(tripCount, this._renderedTripCount);

    if (resetSortType) {
      this._currentSortType = SortType.EVENT;
    }
  }

  _tripBoard() {
    this._renderCounter();
  }

  _tripList() {
    const trips = this._getTrips();
    const tripCount = trips.length;
    if (tripCount === 0) {
      this._renderNoTrips();
      return;
    }
    this._renderSorting();
    this._renderTripDayListContainer();
    this._renderTripItemsList();
  }
}
