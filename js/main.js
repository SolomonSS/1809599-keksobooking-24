import {initMap, setMapFormEnabled} from './map.js';
import {setAdFormEnabled, setAddress} from './form.js';
import {fetchOffers} from './fetch.js';
import {onAdvertsLoad} from './pin-filters.js';
import './photo.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};
setPageEnabled(false);

initMap(
  () => {
    fetchOffers((adverts) => {
      setPageEnabled(true);
      onAdvertsLoad(adverts);
    });
  },
  setAddress);

