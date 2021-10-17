import {createElement} from './mocks.js';
import {createPopup} from './popup.js';

const similarElements = Array.from({length: 10}, createElement);
//createPopup(similarElements[0]);
for (let i =0;i<similarElements.length; i++){
  createPopup(similarElements[i]);
}
