export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


export const sortTripByEvent = () => {

};

export const sortTripByTime = () => {

};

export const sortTripByPrice = () => {
  // const price = Array.from(this._boardTrips.map((trip) => trip.price).sort())
  // console.log(price)
};
