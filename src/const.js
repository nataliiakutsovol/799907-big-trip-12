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
  isEventDetails: false,
},
{
  name: `bus`,
  label: `Bus to `,
  isEventDetails: true,
},
{
  name: `train`,
  label: `Train to `,
  isEventDetails: false,
},
{
  name: `ship`,
  label: `Ship to `,
  isEventDetails: false,
},
{
  name: `transport`,
  label: `Transport to `,
  isEventDetails: true,
},
{
  name: `drive`,
  label: `Drive to `,
  isEventDetails: true,
},
{
  name: `flight`,
  label: `Flight to `,
  isEventDetails: false,
}];

export const eventRegistrationType = [{
  name: `check-in`,
  label: `Check-in `,
  isEventDetails: true,
},
{
  name: `sightseeing`,
  label: `Sightseeing to `,
  isEventDetails: false,
},
{
  name: `restaurant`,
  label: `Restaurant in `,
  isEventDetails: true,
}];

export const eventDestinations = [{
  text: `destination1`,
  photos: [`1`, `2`, `3`, `4`, `5`]
},
{
  text: `destination2`,
  photos: [`3`, `4`, `5`, `2`, `1`]
},
{
  text: `destination3`,
  photos: [`1`, `2`, `3`, `4`, `5`]
},
{
  text: `destination4`,
  photos: [`4`, `5`, `3`, `2`, `1`]
}];

export const cities = [`Rome`, `New York`, `Milan`, `Paris`, `Berlin`];

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
