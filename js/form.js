import {setFormEnabled} from './utils.js';
import {saveOffer} from './fetch.js';
import {showError, showSuccess} from './notification.js';
import {clearGroup, resetMarker, showOffersOnMap} from './map.js';
import {advertsList} from './pin-filters.js';
import {removePhotos} from './photo.js';

const MAX_ROOMS = 100;
const NOT_FOR_GUESTS = 0;
const FRACTION_DIGITS = 5;

const TypePrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,
};

const BorderStyle = {
  VALID: '1px solid #d9d9d3',
  INVALID: '2px solid red',
};

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

const inputs = [titleInput, capacityInput, roomsInput, priceInput];

const getPrice = (id) => TypePrice[id.toUpperCase()];

const showInputError = (input) => input.style.border = BorderStyle.INVALID;

const resetInputError = (input) => input.style.border = BorderStyle.VALID;

const setInputValidity = (input, valid) => {
  if (!valid) {
    showInputError(input);
  } else {
    resetInputError(input);
  }
};

const onTimeChange = (evt) => {
  const newTimeValue = evt.target.value;
  timeInInput.value = newTimeValue;
  timeOutInput.value = newTimeValue;
};

const onRoomsCapacityChange = () => {
  const rooms = Number(roomsInput.value);
  const capacity = Number(capacityInput.value);
  if (rooms === MAX_ROOMS) {
    if (capacity !== NOT_FOR_GUESTS) {
      capacityInput.setCustomValidity('Не для гостей');
    }
  } else if (capacity === NOT_FOR_GUESTS || capacity > rooms) {
    capacityInput.setCustomValidity(`Для 1 ${rooms > 1 ? `- ${rooms} гостей` : 'гостя'}`);
  } else {
    capacityInput.setCustomValidity('');
  }
  capacityInput.reportValidity();
  setInputValidity(capacityInput, capacityInput.checkValidity());
};

const setAdFormEnabled = (enabled) => setFormEnabled(adForm, enabled, 'ad-form--disabled');

const setAddress = (location) =>
  addressInput.value = `${location.lat.toFixed(FRACTION_DIGITS)}, ${location.lng.toFixed(FRACTION_DIGITS)}`;

const onInputChange = (evt) => setInputValidity(evt.target, evt.target.checkValidity());

const checkValidity = () => inputs.forEach((input) => setInputValidity(input, input.checkValidity()));
const resetValidity = () => inputs.forEach((input) => setInputValidity(input, true));

const resetAll = () => {
  adForm.reset();
  resetValidity();
  priceInput.placeholder = TypePrice.FLAT;
  mapFilters.reset();
  resetMarker();
  clearGroup();
  removePhotos();
  showOffersOnMap(advertsList);
};

addressInput.readOnly = 'readonly';

typeInput.addEventListener('change', () => {
  const price = getPrice(typeInput.value);
  priceInput.min = price;
  priceInput.placeholder = price;
});

inputs.forEach((input) => input.addEventListener('change', onInputChange));

roomsInput.addEventListener('change', onRoomsCapacityChange);
capacityInput.addEventListener('change', onRoomsCapacityChange);
timeInInput.addEventListener('change', onTimeChange);
timeOutInput.addEventListener('change', onTimeChange);

formSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (adForm.checkValidity()) {
    saveOffer(new FormData(adForm),
      () => {
        resetAll();
        showSuccess();
      },
      showError);
  } else {
    checkValidity();
  }
});

formResetBtn.addEventListener('click', () => resetAll());

export {setAdFormEnabled, setAddress, adForm, resetAll, onRoomsCapacityChange};


