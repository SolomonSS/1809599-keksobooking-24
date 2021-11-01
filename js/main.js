import {createElement} from './mocks.js';
import './form.js';
import './map.js';
import {setMapFormEnabled, map, createMarker, mainMarker} from './map.js';
import {setAdFormEnabled} from './form.js';

const address = document.querySelector('#address');
const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};
const similarElements = Array.from({length: 10}, createElement);
similarElements.forEach((element) => createMarker(element));

map.on('load', () => {
  setPageEnabled(true);
});

mainMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng();
});
