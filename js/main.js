import './form.js';
import {initMap, setMapFormEnabled} from './map.js';
import {setAdFormEnabled, setAddress} from './form.js';
import {fetchOffers} from './fetch.js';
import {fetchAdverts} from './pin-filters.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};

initMap(
  () => {
    setPageEnabled(true);
    fetchOffers(fetchAdverts);
  },
  setAddress);

