import TripCounter from './view/counter.js';
// first trip details
// import TripDetails from './view/first-trip/trip-details-container.js';
// import TripOffers from './view/first-trip/trip-details-offers.js';
// import TripDestignation from './view/first-trip/trip-details-destignation';
// import FilterInput from './view/filter-item.js';
// mocks
import {generateTrip} from './mock/trip-item.js';
import {TRIP_COUNT} from './const.js';
import {render} from './utils/render.js';
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

const filtersPresenter = new FiltersPresenter(mainBody, tripsModel, filtersModel);
filtersPresenter.init();

const tripCounterSection = mainBody.querySelector(`.trip-main`);
render(tripCounterSection, new TripCounter(tripsModel), true);

mainBody.querySelector(`.trip-main__event-add-btn`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  boardPresenter.createTrip();
});
