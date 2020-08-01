'use strict';

const addTripCount = (counter) => {
  counter = 0;
  return (
    `<section class="trip-main__trip-info  trip-info">
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${counter}</span>
      </p>
    </section>`
  );
};

const addMenu = () => {
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`
  );
};

const addFilters = (text) => {
  text = `Accept filter`;
  return (
    `<form class="trip-filters" action="#" method="get">
      <button class="visually-hidden" type="submit">${text}</button>
    </form>`
  );
};

// for array

const filterObj = {
  value: [`past`, `future`, `everything`],
  text: [`Past`, `Future`, `Everything`],
  id: [ `filter-past`, `filter-future`, `filter-everything`]
};

const addFilterInput = (i) => {
  return (
    `<div class="trip-filters__filter">
      <input id="${filterObj.id[i]}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterObj.value[i]}" checked>
      <label class="trip-filters__filter-label" for="${filterObj.id[i]}">${filterObj.text[i]}</label>
    </div>`
  ); 
};

const addTripEvent = () => {
  return (
    `<form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
          
        <div class="event__type-wrapper"></div>

        <div class="event__field-group  event__field-group--destination"></div>

        <div class="event__field-group  event__field-group--time"></div>

        <div class="event__field-group  event__field-group--price"></div>
      </header>
    </form>`
  );
};

const addEventTypeIcon = () => {
  return (
    `<label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list"></div>`
  );
};

const addTransferList = () => {
  return (
    `<fieldset class="event__type-group event__transfer">
      <legend class="visually-hidden">Transfer</legend>
    </fieldset>`
  );
};

// for array

const transferObj = {
  id: [`event-type-taxi-1`, `event-type-bus-1`, `event-type-train-1`, `event-type-ship-1`, `event-type-transport-1`, `event-type-drive-1`, `event-type-flight-1`],
  value: [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`],
  text: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`],
  labelClass: [`event__type-label--taxi`, `event__type-label--bus`, `event__type-label--train`, `event__type-label--ship`, `event__type-label--transport`, `event__type-label--drive`, `event__type-label--flight`]
};

const addTransferInput = (i) => {
  return (
    `<div class="event__type-item">
      <input id="${transferObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferObj.value[i]}">
      <label class="event__type-label  ${transferObj.labelClass[i]}" for="${transferObj.id[i]}">${transferObj.text[i]}</label>
    </div>`
  );
};

const addRegistrationList = () => {
  return (
    `<fieldset class="event__type-group event__registration">
      <legend class="visually-hidden">Activity</legend>
    </fieldset>`
  );
};

// for array

const registrationObj = {
  id: [`event-type-check-in-1`, `event-type-sightseeing-1`, `event-type-restaurant-1`],
  value: [`check-in`, `sightseeing`, `restaurant`],
  text: [`Check-in`, `Sightseeing`, `Restaurant`],
  labelClass: [`event__type-label--check-in`, `event__type-label--sightseeing`, `event__type-label--restaurant`]
};

const addRegistrationInput = (i) => {  
  return (
    `<div class="event__type-item">
      <input id="${registrationObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${registrationObj.value[i]}">
      <label class="event__type-label  ${registrationObj.labelClass[i]}" for="${registrationObj.id[i]}">${registrationObj.text[i]}</label>
    </div>`
  );
};

const addEventDestination = () => {
  return (
    `<label class="event__label  event__type-output" for="event-destination-1">
      Bus to
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
      <option value="Saint Petersburg"></option>
    </datalist>`
  );
};

const addEventTime = () => {
  return (
    `<label class="visually-hidden" for="event-start-time-1">
      From
    </label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 00:00">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">
      To
    </label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 00:00">`
  );
};

const addEventPrice = () => {
  return (
    `<label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">`
  );
};

const btnObj = {
  text: [`Save`, `Cancel`],
  type: [`submit`, `reset`],
  btnClass: [`event__save-btn  btn  btn--blue`, `event__reset-btn`]
};

const addBtn = (i) => {
  return (
    `<button class="${btnObj.btnClass[i]}" type="${btnObj.type[i]}">${btnObj.text[i]}</button>`
  );
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainBody = document.querySelector(`.page-body`);

// Header components
const headerContainer = mainBody.querySelector(`.page-header`);
const tripCounterContainer = headerContainer.querySelector(`.trip-main`);
const menuContainer = tripCounterContainer.querySelector(`.trip-controls`)
render(tripCounterContainer, addTripCount(), `afterbegin`);
render(menuContainer, addMenu(), `beforeend`);
render(menuContainer, addFilters(), `beforeend`);
const filterItemContainer = menuContainer.querySelector(`.trip-filters`);
for(let i = 0; i < filterObj.value.length; i++) {
  render(filterItemContainer, addFilterInput(i), `afterbegin`);
};

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
for(let i = 0; i < btnObj.type.length; i++) {
  render(tripEventsHeader, addBtn(i), `beforeend`);
};
const tripTransferList = tripEventWrapper.querySelector(`.event__type-list`);
render(tripTransferList, addTransferList(), `afterbegin`);
const transferItem = tripTransferList.querySelector(`.event__transfer`);
for(let i = 0; i < transferObj.value.length; i++) {
  render(transferItem, addTransferInput(i), `beforeend`);
};
render(tripTransferList, addRegistrationList(), `beforeend`);
const registrationItem = tripTransferList.querySelector(`.event__registration`);
for(let i = 0; i < registrationObj.value.length; i++) {
  render(registrationItem, addRegistrationInput(i), `beforeend`);
};