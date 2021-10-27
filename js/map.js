import {setFormEnabled} from './utils.js';
import * as L from 'leaflet';

const mapFilterForm = document.querySelector('.map__filters');

const map = L.map('map__canvas')
  .on('load', () => {
  })
  .setView({
    lat: 35.39101,
    lng: 139.50221,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const setMapFormEnabled = (enabled) => setFormEnabled(mapFilterForm, enabled, 'ad-form--disabled');

export {setMapFormEnabled};

