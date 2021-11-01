import {setFormEnabled} from './utils.js';
import {createPopup} from './popup.js';

const mapFilterForm = document.querySelector('.map__filters');
const setMapFormEnabled = (enabled) => setFormEnabled(mapFilterForm, enabled, 'ad-form--disabled');
const LAT = 35.65284;
const LNG = 139.83947;

const map = L.map('map-canvas')
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon.png',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    mainMarkerIcon,
  },
);
mainMarker.addTo(map);

const createMarker = (point) => {
  const {lat, lng} = point.location;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(createPopup(point));
};

const showOffersOnMap = (offers) => {
  offers.forEach(createMarker);
};

export {setMapFormEnabled, map, showOffersOnMap, mainMarker};


