import './form.js';
import {initMap, setMapFormEnabled, showOffersOnMap} from './map.js';
import {setAdFormEnabled, setAddress} from './form.js';
import {fetchOffers} from './fetch.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};

initMap(
  () => {
    setPageEnabled(true);
    fetchOffers(showOffersOnMap);
  },
  setAddress);

