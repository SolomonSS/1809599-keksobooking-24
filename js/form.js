import {setFormEnabled} from './utils.js';
import {saveOffer} from './fetch.js';

const TypePrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,

  getValueByType: (id) => TypePrice[id.toUpperCase()],
};

const adForm = document.querySelector('.ad-form');
const typeInput = adForm.querySelector('#type');
const priceInput = adForm.querySelector('#price');
const roomsInput = adForm.querySelector('#room_number');
const capacityInput = adForm.querySelector('#capacity');
const timeInInput = adForm.querySelector('#timein');
const timeOutInput = adForm.querySelector('#timeout');
const addressInput = adForm.querySelector('#address');
const formSubmitBtn = adForm.querySelector('.ad-form__submit');

const onTimeChange = (evt) => {
  const newTimeValue = evt.target.value;
  timeInInput.value = newTimeValue;
  timeOutInput.value = newTimeValue;
};

const onRoomsCapacityChange = () => {
  const rooms = Number(roomsInput.value);
  const capacity = Number(capacityInput.value);

  if (rooms === 100) {
    if (capacity !== 0) {
      capacityInput.setCustomValidity('Не для гостей');
    }
  } else if (capacity === 0 || capacity > rooms) {
    capacityInput.setCustomValidity(`Для 1 ${rooms > 1 ? `- ${rooms} гостей` : 'гостя'}`);
  } else {
    capacityInput.setCustomValidity('');
  }
  capacityInput.reportValidity();
};

const setAdFormEnabled = (enabled) => setFormEnabled(adForm, enabled, 'ad-form--disabled');

const setAddress = (location) => {
  addressInput.value = location;
};

typeInput.addEventListener('change', () => {
  const price = TypePrice.getValueByType(typeInput.value);
  priceInput.setAttribute('min', price);
  priceInput.setAttribute('placeholder', price);
  typeInput.reportValidity();
});

roomsInput.addEventListener('change', onRoomsCapacityChange);
capacityInput.addEventListener('change', onRoomsCapacityChange);

timeInInput.addEventListener('change', onTimeChange);
timeOutInput.addEventListener('change', onTimeChange);

formSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  const formData = new FormData(adForm);
  saveOffer(formData);
});

export {setAdFormEnabled, setAddress};


