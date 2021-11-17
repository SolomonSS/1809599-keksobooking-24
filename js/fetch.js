import {showErrorOnLoad} from './notification.js';

const API_URL = 'https://24.javascript.pages.academy/keksobooking';

const fetchOffers = (onSuccess) =>
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(onSuccess)
    .catch(showErrorOnLoad);

const saveOffer = (offer, onSuccess, onError) =>
  fetch(API_URL,
    {
      method: 'POST',
      body: offer,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch((err) => {
      throw new Error(err);
    });

export {fetchOffers, saveOffer};
