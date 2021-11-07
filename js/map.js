import {setFormEnabled} from './utils.js';
import {createPopup} from './popup.js';

const LAT = 35.65284;
const LNG = 139.83947;

const mapFilterForm = document.querySelector('.map__filters');

const map = L.map('map-canvas');

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

const markerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const setMapFormEnabled = (enabled) => setFormEnabled(mapFilterForm, enabled, 'ad-form--disabled');

const createMarker = (point) => {
  const {lat, lng} = point.location;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: markerIcon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(createPopup(point));
};

const showOffersOnMap = (offers) => offers.forEach(createMarker);

const initMap = (onMapLoad, onMainPinMove) => {
  map.on('load', onMapLoad);
  map.setView({
    lat: LAT,
    lng: LNG,
  }, 12);
  mainMarker.on('moveend', (evt) => onMainPinMove(evt.target.getLatLng()));
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainMarker.addTo(map);

export {setMapFormEnabled, map, showOffersOnMap, mainMarker, initMap};


