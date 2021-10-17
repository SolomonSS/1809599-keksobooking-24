import {createElement} from './mocks.js';
import {similarListFragment} from './popup.js';

const similarElements = Array.from({length: 10}, createElement);
similarElements[0];

const offers = document.querySelector('#map-canvas');
offers.appendChild(similarListFragment);
