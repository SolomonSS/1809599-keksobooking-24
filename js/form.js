import {setFormEnabled} from './utils.js';
import {saveOffer} from './fetch.js';
import {showError, showSuccess} from './notification.js';
import {clearGroup, resetMarker, showOffersOnMap} from './map.js';
import {advertsList} from './pin-filters.js';

const TypePrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const getPrice = (id) =>TypePrice[id.toUpperCase()];

const maxRooms = 100;
const nullRooms = 0;
const fractionDigits = 5;

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
  if (rooms === maxRooms) {
    if (capacity !== nullRooms) {
      capacityInput.setCustomValidity('Не для гостей');
    }
  } else if (capacity === nullRooms || capacity > rooms) {
    capacityInput.setCustomValidity(`Для 1 ${rooms > 1 ? `- ${rooms} гостей` : 'гостя'}`);
  } else {
    capacityInput.setCustomValidity('');
  }
  capacityInput.reportValidity();
};

const setAdFormEnabled = (enabled) => setFormEnabled(adForm, enabled, 'ad-form--disabled');

const setAddress = (location) => {
  addressInput.value = `${location.lat.toFixed(fractionDigits)}, ${location.lng.toFixed(fractionDigits)}`;
};

addressInput.readOnly = 'readonly';
addressInput.value = '35.65284, 139.83947';

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
  addressInput.value = '35.65284, 139.83947';
  showOffersOnMap(advertsList);
};

const checkValid = () =>{
  const inputs = [titleInput, capacityInput, roomsInput, priceInput];
  inputs.forEach((input)=>{
    if(!input.checkValidity()){
      input.style.border = '2px solid red';
    } else {
      input.style.border = '0';
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


