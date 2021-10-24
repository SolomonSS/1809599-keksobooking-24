const typeInput = document.querySelector('#type');
const price = document.querySelector('#price');
const roomsInput = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


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
    capacity.value = 0;
    capacity.setCustomValidity('Не для гостей');
  } else {
    capacity.value = roomsInput.value;
    capacity.setCustomValidity(`Максимально число гостей - ${capacity.value}`);
  }
  capacity.reportValidity();
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
  timeIn.reportValidity();
});
