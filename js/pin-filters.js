import {debounce} from './utils.js';
import {showOffersOnMap, clearGroup} from './map.js';

const RENDER_DELAY = 500;
const MAX_ADVERTS = 10;
const FILTER_ANY = 'any';

const Price = {
  low: [0,10000],
  middle:[10000,50000],
  high:[50000, Infinity],
  any:[0, Infinity],
};

const mapFilters = document.querySelector('.map__filters');
const typeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');
const featuresFieldset = mapFilters.querySelectorAll('.map__checkbox');
//const featuresCheckbox = featuresFieldset.querySelectorAll('.map__checkbox');

const isFilterNotSet = (filter) => filter.value === FILTER_ANY;

const isSuitableAdvertType = (advert) => isFilterNotSet(typeFilter) || advert.offer.type === typeFilter.value;

const isSuitableAdvertPrice = (advert) => {
  const value = priceFilter.value;
  const minPrice = Price[value][0];
  const maxPrice = Price[value][1];
  return (minPrice <= advert.offer.price && advert.offer.price < maxPrice);
};

const isSuitableAdvertFeatures = (advert) =>{
  const features = [];
  featuresFieldset.forEach((feature)=>{
    if(feature.checked){
      features.push(feature);
    }
  });
  if(features.length){
    if(advert.offer.features){
      return features.every((item) => advert.some((value) => value === item));
    }
    return false;
  }
  return true;
};

const isSuitableAdvertRooms = (advert) => isFilterNotSet(roomsFilter) || advert.offer.rooms === Number(roomsFilter.value);
const isSuitableAdvertGuests = (advert) => isFilterNotSet(guestsFilter) || advert.offer.guests === Number(guestsFilter.value);

const filters = [
  isSuitableAdvertType,
  isSuitableAdvertPrice,
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

const clearAndShowOnMap = (adverts) =>{
  clearGroup();
  showOffersOnMap(adverts);
};

const createFilterListener = (adverts) => debounce(() => clearAndShowOnMap(filterAdverts(adverts)), RENDER_DELAY);

const setFilterListeners = (adverts) => {
  const filterChangeHandler = createFilterListener(adverts);
  typeFilter.addEventListener('change', filterChangeHandler);
  priceFilter.addEventListener('change', filterChangeHandler);
  roomsFilter.addEventListener('change', filterChangeHandler);
  guestsFilter.addEventListener('change', filterChangeHandler);
  featuresFieldset.forEach((checkbox) => checkbox.addEventListener('change', filterChangeHandler));
};

export {filterAdverts, setFilterListeners};
