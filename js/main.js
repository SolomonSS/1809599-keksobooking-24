import './form.js';
import {setMapFormEnabled, mainMarker, map, showOffersOnMap} from './map.js';
import {setAdFormEnabled} from './form.js';
import {getData, sendData} from './fetch.js';


const address = document.querySelector('#address');
const adFormSubmit = document.querySelector('.ad-form__submit');

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};

setPageEnabled(true);
getData(showOffersOnMap,alert);
//обработчик ниже не работает
map.on(('load'), () => {
  setPageEnabled(true);
  getData(showOffersOnMap,alert);
});

mainMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});

adFormSubmit.addEventListener('submit', (evt) => {
  const formData = new FormData(evt.target);
  sendData(formData);
});
