export const TRIP_COUNT = 20;

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

export const eventTransferType = [{
  name: `taxi`,
  label: `Taxi to `,
},
{
  name: `bus`,
  label: `Bus to `,
},
{
  name: `train`,
  label: `Train to `,
},
{
  name: `ship`,
  label: `Ship to `,
},
{
  name: `transport`,
  label: `Transport to `,
},
{
  name: `drive`,
  label: `Drive to `,
},
{
  name: `flight`,
  label: `Flight to `,
}];

export const eventRegistrationType = [{
  name: `check-in`,
  label: `Check-in `,
},
{
  name: `sightseeing`,
  label: `Sightseeing to `,
},
{
  name: `restaurant`,
  label: `Restaurant in `,
}];

export const cities = [`Rome`, `New York`, `Milan`, `Paris`, `Berlin`];

export const btnObj = {
  text: [`Save`, `Cancel`],
  type: [`submit`, `reset`],
  btnClass: [`event__save-btn  btn  btn--blue`, `event__reset-btn`]
};

export const FilterType = {
  PAST: `past`,
  FUTURE: `future`,
  EVERYTHING: `everything`
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
