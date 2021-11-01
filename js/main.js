import {createElement} from './mocks.js';
import {createPopup} from './popup.js';
import './form.js';
import './map.js';
import {setMapFormEnabled} from './map.js';
import {setAdFormEnabled} from './form.js';

const setPageEnabled = (enabled) => {
  setAdFormEnabled(enabled);
  setMapFormEnabled(enabled);
};
setPageEnabled();
const offersMap = document.querySelector('.map__canvas');
const similarElements = Array.from({length: 10}, createElement);
offersMap.appendChild(createPopup(similarElements[0]));
