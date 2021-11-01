import {createElement} from './mocks.js';
import './form.js';
import './map.js';
import {setMapFormEnabled, map, showOffersOnMap, mainMarker} from './map.js';
import {setAdFormEnabled} from './form.js';

const address = document.querySelector('#address');
const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};
const similarElements = Array.from({length: 10}, createElement);
showOffersOnMap(similarElements);

map.on('load', () => {
  setPageEnabled(true);
});

mainMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});
