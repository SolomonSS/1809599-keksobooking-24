import {debounce} from './utils.js';
import {clearGroup, MAX_ADVERTS, showOffersOnMap} from './map.js';
import {onRoomsCapacityChange} from './form.js';

const RENDER_DELAY = 500;
const FILTER_ANY = 'any';

const Price = {
  low: [0, 10000],
  middle: [10000, 50000],
  high: [50000, Infinity],
};

const advertsList = [];

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFieldset = mapFilters.querySelectorAll('.map__checkbox');

const isAnyFilter = (filter) => filter.value === FILTER_ANY;

const isSuitableAdvertType = (advert) => isAnyFilter(typeFilter) || advert.offer.type === typeFilter.value;

const selectedPrice = (advert) => {
  const value = priceFilter.value;
  if (!isAnyFilter(priceFilter)) {
    const [minPrice, maxPrice] = Price[value];
    return (minPrice <= advert.offer.price && advert.offer.price < maxPrice);
  }
  return true;
};

const isSuitableAdvertFeatures = (advert) => {
  const features = [];
  featuresFieldset.forEach((feature) => {
    if (feature.checked) {
      features.push(feature.value);
    }
  });
  if (features.length) {
    return advert.offer.features
      ? features.every((feature) => advert.offer.features.some((value) => value === feature))
      : false;
  }
  return true;
};

const isSuitableAdvertRooms = (advert) => isAnyFilter(roomsFilter) || advert.offer.rooms === Number(roomsFilter.value);
const isSuitableAdvertGuests = (advert) => isAnyFilter(guestsFilter) || advert.offer.guests === Number(guestsFilter.value);

const filters = [
  isSuitableAdvertType,
  selectedPrice,
  isSuitableAdvertRooms,
  isSuitableAdvertGuests,
  isSuitableAdvertFeatures,
];

const isSuitableAdvert = (advert) => filters.every((filter) => filter(advert));

const filterAdverts = (adverts) => {
  const filteredAdverts = [];
  for (let i = 0; i < adverts.length && filteredAdverts.length < MAX_ADVERTS; i++) {
    const advert = adverts[i];
    if (isSuitableAdvert(advert)) {
      filteredAdverts.push(advert);
    }
  }
  return filteredAdverts;
};

const clearAndShowOnMap = (adverts) => {
  clearGroup();
  showOffersOnMap(adverts);
};

const createFilterListener = (adverts) => debounce(() => clearAndShowOnMap(filterAdverts(adverts)), RENDER_DELAY);

const setFilterListeners = (adverts) => {
  const onFilterChange = createFilterListener(adverts);
  typeFilter.addEventListener('change', onFilterChange);
  priceFilter.addEventListener('change', onFilterChange);
  roomsFilter.addEventListener('change', onFilterChange);
  guestsFilter.addEventListener('change', onFilterChange);
  featuresFieldset.forEach((checkbox) => checkbox.addEventListener('change', onFilterChange));
};

const onAdvertsLoad = ((adverts) => {
  adverts.forEach((advert) => advertsList.push(advert));
  showOffersOnMap(adverts);
  setFilterListeners(adverts);
  onRoomsCapacityChange();
});

export {onAdvertsLoad, advertsList};
