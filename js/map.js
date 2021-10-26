import {setFormEnabled} from './utils.js';

const mapFilterForm = document.querySelector('.map__filters');

const setMapFormEnabled = (enabled) => setFormEnabled(mapFilterForm, enabled, 'ad-form--disabled');
export {setMapFormEnabled};

