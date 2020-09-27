import HeaderContainer from './view/header-container.js';
import MainContainer from './view/main-container.js';
import Menu from './view/menu.js';
import Stats from './view/stats';
import TripCounter from './view/counter.js';
import {generateTrip} from './mock/trip-item.js';
import {TRIP_COUNT, MenuItem} from './const.js';
import {render, remove} from './utils/render.js';
import TripBoard from "./presenter/trip-board.js";
import FiltersPresenter from "./presenter/filters.js";
import TripsModel from "./model/trip";
import FiltersModel from "./model/filters";
import EventDetailsModel from "./model/event-detail";

const mainBody = document.querySelector(`.page-body`);

const trips = new Array(TRIP_COUNT).fill().map(generateTrip);
const tripsModel = new TripsModel();
tripsModel.setTrips(trips);

const offers = trips.map((trip) => trip.offers);
const destination = trips.map((trip) => trip.destination);
const eventDetailsModel = new EventDetailsModel();
eventDetailsModel.setOffers(offers);
eventDetailsModel.setDestination(destination);

const filtersModel = new FiltersModel();

const boardPresenter = new TripBoard(mainBody, tripsModel, filtersModel, eventDetailsModel);
boardPresenter.init();

// main body components
render(mainBody, new HeaderContainer(), true);
const filtersPresenter = new FiltersPresenter(mainBody, tripsModel, filtersModel);
filtersPresenter.init();

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      remove(tripsStatistics);
      boardPresenter.init();
      break;
    case MenuItem.STATISTICS:
      boardPresenter.destroy();
      render(mainBody, new MainContainer());
      render(statisticsContainer, tripsStatistics);
      break;
  }
};

const handleTaskNewFormClose = () => {
  siteMenuComponent.getElement().querySelector(`[href=${MenuItem.TABLE}]`).disabled = false;
  siteMenuComponent.setMenuItem(MenuItem.TABLE);
};

const siteMenuComponent = new Menu();
siteMenuComponent.setMenuItem(MenuItem.TABLE);
const menuContainer = mainBody.querySelector(`.trip-controls`);
siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
render(menuContainer, siteMenuComponent, true);

const tripsStatistics = new Stats(tripsModel.getTrips());
const statisticsContainer = mainBody.querySelector(`.page-main`);

// const mainContainer = mainBody.querySelector(`.page-main`);
// const tripDetailsContainer = mainContainer.querySelector(`.event--edit`);
// render(tripDetailsContainer, new TripDetails().getElement());
// const tripOfferSection = tripDetailsContainer.querySelector(`.event__section--offers`);
// render(tripOfferSection, new TripOffers().getElement());
// const tripDestignationSection = tripDetailsContainer.querySelector(`.event__section--destination`);
// render(tripDestignationSection, new TripDestignation().getElement());

const tripCounterSection = mainBody.querySelector(`.trip-main`);
render(tripCounterSection, new TripCounter(tripsModel), true);

mainBody.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  boardPresenter.createTrip();
});
