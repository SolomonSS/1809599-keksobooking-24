import {setFormEnabled} from './utils.js';
import {saveOffer} from './fetch.js';
import {showError, showSuccess} from './notification.js';
import {clearGroup, resetMarker, showOffersOnMap} from './map.js';
import {advertsList} from './pin-filters.js';
import {removePhotos} from './photo.js';

const TypePrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const getPrice = (id) =>TypePrice[id.toUpperCase()];

const MAX_ROOMS = 100;
const NULL_ROOMS = 0;
const FRACTION_DIGITS = 5;

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const roomsInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');
const addressInput = adForm.querySelector('#address');
const formSubmitBtn = adForm.querySelector('.ad-form__submit');
const formResetBtn = adForm.querySelector('.ad-form__reset');
const titleInput = adForm.querySelector('#title');

const onTimeChange = (evt) => {
  const newTimeValue = evt.target.value;
  timeInInput.value = newTimeValue;
  timeOutInput.value = newTimeValue;
};

const onRoomsCapacityChange = () => {
  const rooms = Number(roomsInput.value);
  const capacity = Number(capacityInput.value);
  if (rooms === MAX_ROOMS) {
    if (capacity !== NULL_ROOMS) {
      capacityInput.setCustomValidity('Не для гостей');
    }
  } else if (capacity === NULL_ROOMS || capacity > rooms) {
    capacityInput.setCustomValidity(`Для 1 ${rooms > 1 ? `- ${rooms} гостей` : 'гостя'}`);
  } else {
    capacityInput.setCustomValidity('');
  }
  capacityInput.reportValidity();
};

const setAdFormEnabled = (enabled) => setFormEnabled(adForm, enabled, 'ad-form--disabled');

const setAddress = (location) => {
  addressInput.value = `${location.lat.toFixed(FRACTION_DIGITS)}, ${location.lng.toFixed(FRACTION_DIGITS)}`;
};

addressInput.readOnly = 'readonly';

typeInput.addEventListener('change', () => {
  const price = getPrice(typeInput.value);
  priceInput.min = price;
  priceInput.placeholder = price;
  typeInput.reportValidity();
});

roomsInput.addEventListener('change', onRoomsCapacityChange);
capacityInput.addEventListener('change', onRoomsCapacityChange);
timeInInput.addEventListener('change', onTimeChange);
timeOutInput.addEventListener('change', onTimeChange);

const resetAll = () => {
  adForm.reset();
  priceInput.placeholder = 1000;
  mapFilters.reset();
  resetMarker();
  clearGroup();
  removePhotos();
  showOffersOnMap(advertsList);
};

const checkValid = () =>{
  const inputs = [titleInput, capacityInput, roomsInput, priceInput];
  inputs.forEach((input)=>{
    if(!input.checkValidity()){
      input.style.border = '2px solid red';
    } else {
      input.style.border = '1px solid #d9d9d3';
    }
  });
};

formSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (adForm.checkValidity()) {
    const formData = new FormData(adForm);
    saveOffer(formData, showSuccess, showError);
  } else {
    checkValid();
  }
});

formResetBtn.addEventListener('click', () => {
  resetAll();
});

export {setAdFormEnabled, setAddress, adForm, resetAll, onRoomsCapacityChange};


