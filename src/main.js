import Menu from './view/menu.js';
import TripCounter from './view/counter.js';
import FilterInput from './view/filter-item.js';
import AcceptFiltersBtn from './view/filter-button.js';

// first trip details
import EventTypeIconSection from './view/event-type-icon.js';
import EventDestination from './view/first-trip/event-destination.js';
import EventTime from './view/first-trip/event-time.js';
import EventPrice from './view/first-trip/event-price.js';
import TransferList from './view/first-trip/transfer-list.js';
import TransferInput from './view/first-trip/transfer-item.js';
import RegistrationList from './view/first-trip/registration-list.js';
import RegistrationInput from './view/first-trip/registration-item.js';
import Buttons from './view/buttons.js';
import TripDetails from './view/first-trip/trip-details-container.js';
import TripOffers from './view/first-trip/trip-details-offers.js';
import TripDestignation from './view/first-trip/trip-details-destignation';

// mocks
import {generateTrip} from './mock/trip-item.js';
import {TRIP_COUNT, filterValue, transferValue, registrationText, btnObj} from './const.js';
import {render} from './utils/render.js';
import TripBoard from "./presenter/trip-board.js";

const trip = new Array(TRIP_COUNT).fill().map(generateTrip);

const mainBody = document.querySelector(`.page-body`);

const boardPresenter = new TripBoard(mainBody);
boardPresenter.init(trip);

// Header components
const headerContainer = mainBody.querySelector(`.page-header`);
const tripCounterContainer = headerContainer.querySelector(`.trip-main`);
const menuContainer = tripCounterContainer.querySelector(`.trip-controls`);

render(tripCounterContainer, new TripCounter(), true);
render(menuContainer, new Menu().getElement());
render(menuContainer, new AcceptFiltersBtn().getElement());
const filterItemContainer = menuContainer.querySelector(`.trip-filters`);
for (let i = 0; i < filterValue.length; i++) {
  render(filterItemContainer, new FilterInput(i).getElement(), true);
}

// main body components
const mainContainer = mainBody.querySelector(`.page-main`);
const tripDetailsContainer = mainContainer.querySelector(`.event--edit`);
render(tripDetailsContainer, new TripDetails().getElement());
const tripOfferSection = tripDetailsContainer.querySelector(`.event__section--offers`);
render(tripOfferSection, new TripOffers().getElement());
const tripDestignationSection = tripDetailsContainer.querySelector(`.event__section--destination`);
render(tripDestignationSection, new TripDestignation().getElement());

const tripEventsHeader = mainContainer.querySelector(`.event__header`);
const tripEventWrapper = tripEventsHeader.querySelector(`.event__type-wrapper`);
const tripEventDestination = tripEventsHeader.querySelector(`.event__field-group--destination`);
const tripEventTiming = tripEventsHeader.querySelector(`.event__field-group--time`);
const tripEventPricing = tripEventsHeader.querySelector(`.event__field-group--price`);
render(tripEventWrapper, new EventTypeIconSection().getElement(), true);
render(tripEventDestination, new EventDestination(), true);
render(tripEventTiming, new EventTime().getElement(), true);
render(tripEventPricing, new EventPrice().getElement(), true);
for (let i = 0; i < btnObj.type.length; i++) {
  render(tripEventsHeader, new Buttons(i).getElement());
}
const tripTransferList = tripEventWrapper.querySelector(`.event__type-list`);
render(tripTransferList, new TransferList().getElement(), true);
const transferItem = tripTransferList.querySelector(`.event__transfer`);
for (let i = 0; i < transferValue.length; i++) {
  render(transferItem, new TransferInput(i).getElement());
}
render(tripTransferList, new RegistrationList().getElement());
const registrationItem = tripTransferList.querySelector(`.event__registration`);
for (let i = 0; i < registrationText.length; i++) {
  render(registrationItem, new RegistrationInput(i).getElement());
}
