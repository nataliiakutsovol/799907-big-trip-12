export const TRIP_COUNT = 7;

export const offerDescription = [{
  name: `Add luggage`,
  price: 40,
},
{
  name: `Switch to comfort class`,
  price: 70,
},
{
  name: `Add meal`,
  price: 40,
}];

export const filterObj = {
  value: [`past`, `future`, `everything`],
  text: [`Past`, `Future`, `Everything`],
  id: [`filter-past`, `filter-future`, `filter-everything`]
};

export const sortObj = {
  text: [`Event`, `Time`, `Price`],
  id: [`event`, `time`, `price`]
};

export const transferObj = {
  id: [`event-type-taxi-1`, `event-type-bus-1`, `event-type-train-1`, `event-type-ship-1`, `event-type-transport-1`, `event-type-drive-1`, `event-type-flight-1`],
  value: [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`],
  text: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`],
  labelClass: [`event__type-label--taxi`, `event__type-label--bus`, `event__type-label--train`, `event__type-label--ship`, `event__type-label--transport`, `event__type-label--drive`, `event__type-label--flight`]
};

export const registrationObj = {
  id: [`event-type-check-in-1`, `event-type-sightseeing-1`, `event-type-restaurant-1`],
  value: [`check-in`, `sightseeing`, `restaurant`],
  text: [`Check-in`, `Sightseeing`, `Restaurant`],
  labelClass: [`event__type-label--check-in`, `event__type-label--sightseeing`, `event__type-label--restaurant`],
};

export const btnObj = {
  text: [`Save`, `Cancel`],
  type: [`submit`, `reset`],
  btnClass: [`event__save-btn  btn  btn--blue`, `event__reset-btn`]
};

export const BLANK_TRIP = {
  transport: ``,
  city: ``,
  date: ``,
  time: ``,
  price: ``,
};
