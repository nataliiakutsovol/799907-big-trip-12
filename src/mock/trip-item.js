import {getRandomInteger} from "../utils.js";
import {offerDescription} from "../const.js";

const generateIcons = () => {
  const descriptions = [`drive`, `sightseeing`, `flight`, `ship`, `bus`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateTransport = () => {
  const descriptions = [`Drive to `, `Sightseeing in `, `Flight to `, `Ship to `, `Bus to `];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateCity = () => {
  const descriptions = [`Rome`, `New York`, `Milan`, `Paris`, `Berlin`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generatePrice = () => {
  const descriptions = [`40`, `100`, `150`, `200`, `180`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateTimeRange = () => {

  const maxDaysGap = 7;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate).toLocaleString(`en-US`, {hour: `numeric`, minute: `numeric`});
};

const generateDate = () => {

  const maxDaysGap = 7;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateOffers = () => {

  const randomIndex = getRandomInteger(0, offerDescription.length - 1);

  return offerDescription[randomIndex];
};

const MAX_OFFERS = getRandomInteger(0, 3);

export const generateTrip = () => {
  const offerArr = new Array(MAX_OFFERS).fill().map(generateOffers);
  return {
    icons: generateIcons(),
    transport: generateTransport(),
    city: generateCity(),
    date: generateDate(),
    time: generateTimeRange(),
    price: generatePrice(),
    offers: offerArr,
  };
};
