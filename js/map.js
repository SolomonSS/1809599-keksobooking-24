import {setFormEnabled} from './utils.js';
import {createPopup} from './popup.js';

const LAT = 35.65284;
const LNG = 139.83947;
const MAX_ADVERTS = 10;
const MAIN_ICON_SIZES = [52, 52];
const MAIN_ICON_ANCHOR_SIZES = [26, 52];
const MAIN_ICON_URL = 'leaflet/images/marker-icon.png';
const ICON_SIZES = [40, 40];
const ICON_ANCHOR_SIZES = [20, 40];
const ICON_URL = 'img/pin.svg';
const ZOOM = 12;

const mapFilterForm = document.querySelector('.map__filters');

const map = L.map('map-canvas');
const markGroup = L.layerGroup().addTo(map);
const clearGroup = () => markGroup.clearLayers();

const mainMarkerIcon = L.icon({
  iconUrl: MAIN_ICON_URL,
  iconSize: MAIN_ICON_SIZES,
  iconAnchor: MAIN_ICON_ANCHOR_SIZES,
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

const resetMarker = () => mainMarker.setLatLng([LAT, LNG]);

const markerIcon = L.icon({
  iconUrl: ICON_URL,
  iconSize: ICON_SIZES,
  iconAnchor: ICON_ANCHOR_SIZES,
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
    .addTo(markGroup)
    .bindPopup(createPopup(point));
};

const initMap = (onMapLoad, onMainPinMove) => {
  map.on('load', onMapLoad);
  map.setView({
    lat: LAT,
    lng: LNG,
  }, ZOOM);
  mainMarker.on('drag', (evt) => onMainPinMove(evt.target.getLatLng()));
};

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainMarker.addTo(map);

const showOffersOnMap = (offers) => {
  for (let i = 0; i < offers.length && i < MAX_ADVERTS; i++) {
    createMarker(offers[i]);
  }
};

export {
  setMapFormEnabled,
  map,
  showOffersOnMap,
  mainMarker,
  initMap,
  createMarker,
  clearGroup,
  MAX_ADVERTS,
  resetMarker
};


