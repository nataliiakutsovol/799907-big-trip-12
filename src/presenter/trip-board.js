import HeaderContainer from './../view/header-container.js';
import MainContainer from './../view/main-container.js';
import TripCounter from './../view/counter.js';
import Menu from './../view/menu.js';
import FilterInput from './../view/filter-item.js';
import SortContainer from './../view/sorting-container.js';
import FirstTripEvent from './../view/first-trip/first-trip-container.js';
import TripListContainer from './../view/trip/trip-list-container.js';
import TripDayList from './../view/trip/trip-day-list.js';
import {render, remove} from './../utils/render.js';
import {SortType, UpdateType, UserAction} from './../const.js';
import TripPresenter from './trip';

export default class TripBoard {
  constructor(mainBody, tripModel) {
    this._mainBody = mainBody;
    this._tripsModel = tripModel;
    this._MainContainer = new MainContainer();
    this._HeaderContainer = new HeaderContainer();
    this._MenuContainer = new Menu();
    this._SortingContainer = new SortContainer();
    this._FirstTripContainer = new FirstTripEvent();
    this._TripListContainer = new TripListContainer();
    this._currentSortType = SortType.EVENT;
    this._tripPresenter = {};

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);

    this._tripsModel.addObserver(this._handleModelEvent);
  }

  init() {
    render(this._mainBody, this._MainContainer, true);
    render(this._mainBody, this._HeaderContainer, true);
    this._tripBoard();
    this._tripList();
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

    return this._tripsModel.getTrips();
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
        this._clearBoard()
        this._tripList();
        break;
      case UpdateType.MAJOR:
        this._tripList();
        break;
    }
  }

  _handleSortTypeChange(sortType) {
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

  _renderMenuContainer() {
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

  _clearBoard({resetSortType = false} = {}) {
    const tripCount = this._getTrips().length;

    Object
      .values(this._tripPresenter)
      .forEach((presenter) => presenter.destroy());
    this._tripPresenter = {};

    remove(this._SortingContainer);
    //remove(this._noTripContainer);
    remove(this._TripListContainer)

      this._renderedTripCount = Math.min(tripCount, this._renderedTripCount);

    if (resetSortType) {
      this._currentSortType = SortType.EVENT;
    }
  }

  _tripBoard() {
    this._renderCounter();
    this._renderMenuContainer();
    this._renderFilters();
    // this._renderFirstTrip();
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
    this._renderTripItemsList()
  }
}
