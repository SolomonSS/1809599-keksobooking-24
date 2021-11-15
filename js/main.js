import {initMap, setMapFormEnabled} from './map.js';
import {setAdFormEnabled, setAddress} from './form.js';
import {fetchOffers} from './fetch.js';
import {fetchAdverts} from './pin-filters.js';
import './photo.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};
setPageEnabled(false);

initMap(
  () => {
    fetchOffers(fetchAdverts);
    if (fetchOffers(fetchAdverts)) {
      setPageEnabled(true);
    }
  },
  setAddress);

