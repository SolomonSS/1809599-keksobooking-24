// import {showOffersOnMap} from './map.js';

/*fetch(
  'https://24.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => response.json())
  .then((offers) => {
    showOffersOnMap(offers);
  });*/

import {onErrorMessage, onSuccessMessage} from './popup.js';

const getData = (onSuccess, onError) => fetch(
  'https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((offers) => {
    onSuccess(offers);
  }).catch((err) => {
    onError(err);
  });

/*const getData = (onError) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      showOffersOnMap(offers);
    }).catch((err) => {
      onError(err);
    });
};*/
//Не уверен, что этот метод работает корректно
const sendData = (body) => fetch('https://24.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (response.ok) {
      onSuccessMessage();
    } else {
      onErrorMessage();
    }
  })
  .catch((err) => {
    throw new Error(err);
  });

export {getData, sendData};
