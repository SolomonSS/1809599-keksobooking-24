import sampleSize from 'lodash';
import {getRandomInt, getRandomFloat} from './random.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const getPhotos = () => {
  const randomSize = Number(getRandomInt(0, PHOTOS.length-1));
  const result = [];
  for (let i = 0; i < randomSize; i++) {
    result.push(PHOTOS[i]);
  }
  return result;
};
const getFeatureItem = () => sampleSize(FEATURES, Number(getRandomInt(0, FEATURES.length - 1)));
const getRandomElement = (list) => list[Number(getRandomInt(0, list.length - 1))];
const LATMIN = 35.65000;
const LATMAX = 35.70000;
const LNGMIN = 139.70000;
const LNGMAX = 139.80000;

const createElement = () => {
  const LAT = getRandomFloat(LATMIN, LATMAX, 5);
  const LNG = getRandomFloat(LNGMIN, LNGMAX, 5);
  return {
    author: {
      avatar: `${'img/avatars/user0'}${getRandomInt(1, 10)}.png`,
    },
    offer: {
      title: getRandomInt(1, 5),
      address: `${LAT} ${LNG}`,
      price: getRandomInt(500, 1000),
      type: getRandomElement(TYPES),
      rooms: getRandomInt(1, 6),
      guests: getRandomInt(1, 12),
      checkin: getRandomElement(CHECKINS),
      checkout: getRandomElement(CHECKINS),
      features: Array.from({length: getRandomElement(FEATURES)}, getFeatureItem),
      description: 'Some description',
      photos: getPhotos(),
    },
    location: {
      lat: LAT,
      lng: LNG,
    },
  };
};
export {createElement};
