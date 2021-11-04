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
import {showOffersOnMap} from './map.js';

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
const sendData = (onError) => fetch('https://24.javascript.pages.academy/keksobooking',
  {
    method: 'POST',
    body: new FormData('.notice'),
  })
  .then((response) => {
    if (response.ok) {
      onSuccessMessage();
    } else {
      onErrorMessage();
    }
  })
  .catch((err) => {
    onError(err);
  });

export {getData, sendData};
