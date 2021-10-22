import {createElement} from './mocks.js';
import {createPopup} from './popup.js';
import './form.js';
const offersMap = document.querySelector('.map__canvas');

const similarElements = Array.from({length: 10}, createElement);
similarElements.forEach((element) => offersMap.appendChild(createPopup(element)));
