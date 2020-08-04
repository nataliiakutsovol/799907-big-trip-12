import {addMenu} from './view/menu.js';
import {addTripCount} from './view/counter.js';
import {filterObj, addFilterInput} from './view/filter-item.js';
import {addFiltersBtn} from './view/filter-button.js';
import {addTripEvent} from './view/trip-event-container.js';
import {addEventTypeIcon} from './view/event-type-icon.js';
import {addEventDestination} from './view/event-destination.js';
import {addEventTime} from './view/event-time.js';
import {addEventPrice} from './view/event-price.js';
import {addTransferList} from './view/transfer-list.js';
import {transferObj, addTransferInput} from './view/transfer-item.js';
import {addRegistrationList} from './view/registration-list.js';
import {registrationObj, addRegistrationInput} from './view/registration-item.js';
import {btnObj, addBtn} from './view/buttons.js';

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
render(tripEventsContainer, addTripEvent(), `beforeend`);
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
