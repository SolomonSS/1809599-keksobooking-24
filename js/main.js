import './form.js';
import {setMapFormEnabled, mainMarker, map, showOffersOnMap} from './map.js';
import {setAdFormEnabled} from './form.js';
import {getData,sendData} from './fetch.js';
import {} from './popup.js';

const address = document.querySelector('#address');
const adFormSubmit = document.querySelector('.ad-form__submit');

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};

//обработчик ниже не работает
map.on(('load'), () =>{
  setPageEnabled(true);
  getData(alert);
});

mainMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});

adFormSubmit.addEventListener('submit', ()=>{
  sendData(showOffersOnMap, alert);
});
