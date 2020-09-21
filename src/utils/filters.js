import {FilterType} from "./../const";
import moment from "moment";

const isFilterPast = (date) => {
  const currentDate = new Date();
  return moment(date).isBefore(currentDate);
};

const isFilterFuture = (date) => {
  const currentDate = new Date();
  return moment(date).isAfter(currentDate);
};

const isFilterEverything = (date) => {
  const currentDate = new Date();
  return moment(date).isAfter(currentDate) || moment(date).isBefore(currentDate);
};

export const filter = {
  [FilterType.PAST]: (trips) => trips.filter((trip) => isFilterPast(trip.date)),
  [FilterType.FUTURE]: (trips) => trips.filter((trip) => isFilterFuture(trip.date)),
  [FilterType.EVERYTHING]: (trips) => trips.filter((trip) => isFilterEverything(trip.date)),
};

export const sortTripByEvent = () => {

};

export const sortTripByTime = () => {

};

export const sortTripByPrice = () => {
  // const price = Array.from(this._boardTrips.map((trip) => trip.price).sort())
  // console.log(price)
};
