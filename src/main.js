import {addMenu} from './view/menu.js';
import {addTripCount} from './view/counter.js';
import {filterObj, addFilterInput} from './view/filter-item.js';
import {addFiltersBtn} from './view/filter-button.js';
import {addSortContainer} from './view/sorting-container.js';
import {sortObj, addSortInput} from './view/sorting-item.js';
import {addFirstTripEvent} from './view/first-trip/first-trip-container.js';
import {addEditTripContainer} from './view/edit-trip/edit-trip-container.js';
import {addTripListContainer} from './view/trip/trip-list-container.js';
import {addTripDayList} from './view/trip/trip-day-list.js';
import {addTripItem} from './view/trip/trip-item.js';
// first trip details
import {addEventTypeIcon} from './view/event-type-icon.js';
import {addEventDestination} from './view/first-trip/event-destination.js';
import {addEventTime} from './view/first-trip/event-time.js';
import {addEventPrice} from './view/first-trip/event-price.js';
import {addTransferList} from './view/first-trip/transfer-list.js';
import {transferObj, addTransferInput} from './view/first-trip/transfer-item.js';
import {addRegistrationList} from './view/first-trip/registration-list.js';
import {registrationObj, addRegistrationInput} from './view/first-trip/registration-item.js';
import {btnObj, addBtn} from './view/buttons.js';
import {addTripDetails} from './view/first-trip/trip-details-container.js';
import {addTripOffers} from './view/first-trip/trip-details-offers.js';
import {addTripDestignation} from './view/first-trip/trip-details-destignation';

// mocks
import {generateTrip} from './mock/trip-item.js';
import {TRIP_COUNT} from './const.js';

const trip = new Array(TRIP_COUNT).fill().map(generateTrip);
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainBody = document.querySelector(`.page-body`);

// Header components
const headerContainer = mainBody.querySelector(`.page-header`);
const tripCounterContainer = headerContainer.querySelector(`.trip-main`);
const menuContainer = tripCounterContainer.querySelector(`.trip-controls`);
render(tripCounterContainer, addTripCount(), `afterbegin`);
render(menuContainer, addMenu(), `beforeend`);
render(menuContainer, addFiltersBtn(), `beforeend`);
const filterItemContainer = menuContainer.querySelector(`.trip-filters`);
for (let i = 0; i < filterObj.value.length; i++) {
  render(filterItemContainer, addFilterInput(i), `afterbegin`);
}

// main body components
const mainContainer = mainBody.querySelector(`.page-main`);
const tripEventsContainer = mainContainer.querySelector(`.trip-events`);
render(tripEventsContainer, addSortContainer(), `afterbegin`);
render(tripEventsContainer, addFirstTripEvent(), `beforeend`);
const sortInput = tripEventsContainer.querySelector(`.trip-sort__item--day`);

for (let i = 0; i < sortObj.id.length; i++) {
  render(sortInput, addSortInput(i), `afterend`);
}
render(tripEventsContainer, addTripListContainer(), `beforeend`);
const tripDayList = tripEventsContainer.querySelector(`.trip-days`);
for (let i = 0; i < TRIP_COUNT; i++) {
  render(tripDayList, addTripDayList(i, trip[i]), `beforeend`);
}
const tripItem = tripDayList.querySelector(`.trip-events__list`);
for (let i = 0; i < TRIP_COUNT; i++) {
  render(tripItem, addTripItem(trip[i]), `afterbegin`);
}
const tripEditContainer = tripItem.querySelector(`.trip-events__item`);
render(tripEditContainer, addEditTripContainer(trip[0]), `beforeend`);
const tripDetailsContainer = tripEventsContainer.querySelector(`.event--edit`);
render(tripDetailsContainer, addTripDetails(), `beforeend`);
const tripOfferSection = tripDetailsContainer.querySelector(`.event__section--offers`);
render(tripOfferSection, addTripOffers(), `beforeend`);
const tripDestignationSection = tripDetailsContainer.querySelector(`.event__section--destination`);
render(tripDestignationSection, addTripDestignation(), `beforeend`);

const tripEventsHeader = tripEventsContainer.querySelector(`.event__header`);
const tripEventWrapper = tripEventsHeader.querySelector(`.event__type-wrapper`);
const tripEventDestination = tripEventsHeader.querySelector(`.event__field-group--destination`);
const tripEventTiming = tripEventsHeader.querySelector(`.event__field-group--time`);
const tripEventPricing = tripEventsHeader.querySelector(`.event__field-group--price`);
render(tripEventWrapper, addEventTypeIcon(), `afterbegin`);
render(tripEventDestination, addEventDestination(), `afterbegin`);
render(tripEventTiming, addEventTime(), `afterbegin`);
render(tripEventPricing, addEventPrice(), `afterbegin`);
for (let i = 0; i < btnObj.type.length; i++) {
  render(tripEventsHeader, addBtn(i), `beforeend`);
}
const tripTransferList = tripEventWrapper.querySelector(`.event__type-list`);
render(tripTransferList, addTransferList(), `afterbegin`);
const transferItem = tripTransferList.querySelector(`.event__transfer`);
for (let i = 0; i < transferObj.value.length; i++) {
  render(transferItem, addTransferInput(i), `beforeend`);
}
render(tripTransferList, addRegistrationList(), `beforeend`);
const registrationItem = tripTransferList.querySelector(`.event__registration`);
for (let i = 0; i < registrationObj.value.length; i++) {
  render(registrationItem, addRegistrationInput(i), `beforeend`);
}
