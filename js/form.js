import {setFormEnabled} from './utils.js';

const typeInput = document.querySelector('#type');
const price = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');


const TypePrice = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOTEL: 3000,
  HOUSE: 5000,
  PALACE: 10000,

  getValueByType: (id) => TypePrice[id.toUpperCase()],
};

typeInput.addEventListener('change', () => {
  price.setAttribute('min', TypePrice.getValueByType(typeInput.value));
  price.setAttribute('placeholder', TypePrice.getValueByType(typeInput.value));
  typeInput.reportValidity();
});

roomNumber.addEventListener('change', () => {
  if ((Number(roomNumber.value) === 100) && (Number(capacity.value) === 0)) {
    capacity.setCustomValidity('');
  } else if (Number(roomNumber.value) === 100) {
    capacity.setCustomValidity('Не для гостей');
  } else if (Number(roomNumber.value) !== 100 && Number(capacity.value) === 0) {
    capacity.setCustomValidity('Неверное количество гостей');
  } else if (Number(roomNumber.value) < Number(capacity.value)) {
    capacity.setCustomValidity('Количество гостей превышает вместимость');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const setAdFormEnabled = (enabled) => setFormEnabled(adForm, enabled, 'ad-form--disabled');

export {setAdFormEnabled};


