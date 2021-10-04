//Task 2 Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
// eslint-disable-next-line no-undef,id-length
const _ = require('lodash');
const getRandomFloat = (min, max, precision) => {
  if (min < 0) {
    return new Error('Минимально значение меньше 0');
  }
  return (Math.random() * (max - min) + min).toFixed(precision);
};

//Task 1 Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => getRandomFloat(min, max, 0);


const types = ['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const featuresList = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosList = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const getPhotosList = () => {
  const randomSize = Number(getRandomInt(0, photosList.length));
  const result = [];
  // eslint-disable-next-line id-length
  for (let i = 0; i < randomSize; i++) {
    result.push(photosList[i]);
  }
  return result;
};
const getFeatureItem = () => _.sampleSize(featuresList, Number(getRandomInt(0, featuresList.length - 1)));
const createElement = () => {
  const locLat = getRandomFloat(35.65000, 35.70000, 5);
  const locLng = getRandomFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `${'img/avatars/user0'}${  getRandomInt(1, 10)  }.png`,
    },
    offer: {
      title: getRandomInt(1, 5),
      address: `${locLat} ${locLng}`,
      price: getRandomInt(500, 1000),
      type: types[Number(getRandomInt(0, types.length - 1))],
      rooms: getRandomInt(1, 6),
      guests: getRandomInt(1, 12),
      checkin: checkins[Number(getRandomInt(0, checkins.length - 1))],
      checkout: checkins[Number(getRandomInt(0, checkins.length - 1))],
      features: Array.from({length: Number(getRandomInt(0, featuresList.length - 1))}, getFeatureItem),
      description: 'Some description',
      photos: getPhotosList(),
    },
    location: {
      lat: locLat,
      lng: locLng,
    },
  };
};

const similarElements = Array.from({length: 10}, createElement);
similarElements[0];
