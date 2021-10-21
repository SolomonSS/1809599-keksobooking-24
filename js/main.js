import {createElement} from './mocks.js';
import {createPopup} from './popup.js';

const similarElements = Array.from({length: 10}, createElement);
similarElements.forEach((element) => createPopup(element));
