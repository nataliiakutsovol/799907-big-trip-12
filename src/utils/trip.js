export const filterPast = (date) => {
  const currentDate = new Date;
  return moment(date).isBefore(currentDate)
}

export const filterFuture = (date) => {
  const currentDate = new Date;
  return moment(date).isAfter(currentDate)
}

export const filterEverything = (date) => {
  const currentDate = new Date;
  return moment(date).isSame(currentDate)
}

export const sortTripByEvent = () => {

};

export const sortTripByTime = () => {

};

export const sortTripByPrice = () => {
  // const price = Array.from(this._boardTrips.map((trip) => trip.price).sort())
  // console.log(price)
};
