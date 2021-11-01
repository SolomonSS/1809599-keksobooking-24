import {getRandomInt, getRandomFloat} from './utils.js';

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getRandomElement = (list) => list[Number(getRandomInt(0, list.length - 1))];
const shuffleArray = (array) => array.slice().sort(() => Math.random() - 0.5);
const getRandomArray = (sourceData) => shuffleArray(sourceData.slice(0, Number(getRandomInt(0, sourceData.length - 1))));

const createElement = () => {
  const lat = Number(getRandomFloat(LAT_MIN, LAT_MAX, 5));
  const lng = Number(getRandomFloat(LNG_MIN, LNG_MAX, 5));
  return {
    author: {
      avatar: `${'img/avatars/user0'}${getRandomInt(1, 10)}.png`,
    },
    offer: {
      title: getRandomInt(1, 5),
      address: `${lat} ${lng}`,
      price: getRandomInt(500, 1000),
      type: getRandomElement(TYPES),
      rooms: getRandomInt(1, 6),
      guests: getRandomInt(1, 12),
      checkin: getRandomElement(CHECKINS),
      checkout: getRandomElement(CHECKINS),
      features: getRandomArray(FEATURES),
      description: 'Some description',
      photos: PHOTOS.slice(0, Number(getRandomInt(0, PHOTOS.length-1))),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};
export {createElement};
