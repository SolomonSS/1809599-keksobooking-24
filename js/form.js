const typeInput = document.querySelector('#type');
const price = document.querySelector('#price');
const roomsInput = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

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


roomsInput.addEventListener('change', () => {
  if (Number(roomsInput.value) === 100) {
    capacity.setCustomValidity('Не для гостей');
  } else if (Number(roomsInput.value) < Number(capacity.value)) {
    capacity.setCustomValidity('Количество гостей превышает вместимость');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
  timeIn.reportValidity();
});

const unactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.setAttribute('disabled', 'disabled');
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.setAttribute('disabled', 'disabled');
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.removeAttribute('disabled');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.removeAttribute('disabled');
};
unactivatePage();
activatePage();
