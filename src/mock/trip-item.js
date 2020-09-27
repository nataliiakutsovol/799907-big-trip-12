import {getRandomInteger} from "../utils/common.js";
import {eventTransferType, eventRegistrationType, offerDescription, eventDestinations} from "../const.js";

const generateType = () => {
  const descriptions = [...eventTransferType, ...eventRegistrationType];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateCity = () => {
  const descriptions = [`Rome`, `New York`, `Milan`, `Paris`, `Berlin`];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generatePrice = () => {
  const descriptions = [40, 100, 150, 200, 180];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateTimeRange = () => {

  const currentDate = new Date();
  currentDate.setHours(getRandomInteger(0, 24), 59, 59, 999);

  return new Date(currentDate);
};

const generateDate = () => {

  const maxDaysGap = 7;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  const currentDate = new Date();
  currentDate.setHours(getRandomInteger(0, 24), 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateOffers = () => {

  const randomIndex = getRandomInteger(0, offerDescription.length - 1);

  return offerDescription[randomIndex];
};

const generateDestination = () => {
  const randomIndex = getRandomInteger(1, eventDestinations.length - 1);

  return eventDestinations[randomIndex];
};

export const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const MAX_OFFERS = getRandomInteger(0, 3);

export const generateTrip = () => {
  const offerArr = new Array(MAX_OFFERS).fill().map(generateOffers);
  return {
    id: generateId(),
    type: generateType(),
    city: generateCity(),
    date: generateDate(),
    timeStart: generateTimeRange(),
    timeEnd: generateTimeRange(),
    price: generatePrice(),
    offers: offerArr,
    destination: generateDestination(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
