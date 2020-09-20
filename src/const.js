export const TRIP_COUNT = 17;

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

export const filterValue = [`past`, `future`, `everything`];

export const sortId = [`event`, `time`, `price`];

export const transferValue = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`];

export const registrationText = [`Check-in`, `Sightseeing`, `Restaurant`];

export const cities = [`Rome`, `New York`, `Milan`, `Paris`, `Berlin`];

export const btnObj = {
  text: [`Save`, `Cancel`],
  type: [`submit`, `reset`],
  btnClass: [`event__save-btn  btn  btn--blue`, `event__reset-btn`]
};

export const SortType = {
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`
};

export const UserAction = {
  UPDATE_TRIP: `UPDATE_TRIP`,
  ADD_TRIP: `ADD_TRIP`,
  DELETE_TRIP: `DELETE_TRIP`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`
};
