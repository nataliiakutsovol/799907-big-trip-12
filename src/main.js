const TRIP_COUNTER = 0;

const addTripCount = () => {
    return (
        `<section class="trip-main__trip-info  trip-info">
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">` + TRIP_COUNTER + `</span>
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

const addFilters = () => {
    return (
        `<form class="trip-filters" action="#" method="get">
        <div class="trip-filters__filter">
          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
          <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
        </div>

        <div class="trip-filters__filter">
          <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
          <label class="trip-filters__filter-label" for="filter-future">Future</label>
        </div>

        <div class="trip-filters__filter">
          <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
          <label class="trip-filters__filter-label" for="filter-past">Past</label>
        </div>

        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>`
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

addEventTypeIcon = () => {
    return(
        `<label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list"></div>`
    );
};

addTransferList = () => {
    return (
        `<fieldset class="event__type-group">
        <legend class="visually-hidden">Transfer</legend>

        <div class="event__type-item">
          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" checked>
          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
          <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
        </div>
      </fieldset>`
    );
};

addRegistrationList = () => {
    return (
        `<fieldset class="event__type-group">
        <legend class="visually-hidden">Activity</legend>

        <div class="event__type-item">
          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
        </div>
      </fieldset>`
    );
};

addEventDestination =() => {
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

addEventTime = () => {
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

addEventPrice = () => {
    return (
        `<label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">`
    );
};

addSaveBtn = (btnText) => {
    btnText = `Save`
    return (
        `<button class="event__save-btn  btn  btn--blue" type="submit">`+ btnText + `</button>`
    )
};

addCancelBtn = (btnText) => {
    btnText = `Cancel`
    return (
        `<button class="event__reset-btn" type="reset">`+ btnText + `</button>`
    )
}

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const mainBody = document.querySelector(`.page-body`);

//Header components
const headerContainer = mainBody.querySelector(`.page-header`);
const tripCounterContainer = headerContainer.querySelector(`.trip-main`);
const menuContainer = tripCounterContainer.querySelector(`.trip-controls`)
render(tripCounterContainer, addTripCount(), `afterbegin`);
render(menuContainer, addMenu(), `beforeend`);
render(menuContainer, addFilters(), `beforeend`);

//main body components
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
render(tripEventsHeader, addSaveBtn(), `beforeend`);
render(tripEventsHeader, addCancelBtn(), `beforeend`);
const tripTransferList = tripEventWrapper.querySelector(`.event__type-list`);
render(tripTransferList, addTransferList(), `afterbegin`);
render(tripTransferList, addRegistrationList(), `beforeend`);
