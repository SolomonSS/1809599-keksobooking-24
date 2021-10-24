const typeInput = document.querySelector('#type');
const price = document.querySelector('#price');
const roomsInput = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


const TypePrice = {
  FLAT: '1000',
  BUNGALOW: '0',
  HOUSE: '5000',
  PALACE: '1000',
  HOTEL: '3000',

  getValueByType: (id) => TypePrice[id.toUpperCase()],
};

const setPriceAttribute = () => {
  price.setAttribute('min', TypePrice.getValueByType(typeInput.value));
  price.setAttribute('placeholder', TypePrice.getValueByType(typeInput.value));
};


typeInput.addEventListener('change', () => {
  setPriceAttribute();
  typeInput.reportValidity();
});


roomsInput.addEventListener('change', () => {
  const value = Number(roomsInput.value);
  if (value === 1) {
    capacity.setCustomValidity(`Максимально число гостей - ${capacity[0].value}`);
  }
  if (value === 2) {
    capacity.setCustomValidity(`Максимально число гостей - ${capacity[0].value} ${capacity[1].value}`);
  }
  if (value === 3) {
    capacity.setCustomValidity(`Максимально число гостей - ${capacity[0].value} ${capacity[1].value} ${capacity[2].value}`);
  }
  if (value === 100) {
    capacity.setCustomValidity('Не для гостей');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
});

const timeSet = () => {
  for (let i = 0; i < timeIn.length; i++) {
    if (timeIn[i].selected) {
      timeOut[i].setAttribute('selected', 'true');
    } else{
      timeOut[i].removeAttribute('selected');
    }
  }
};

timeIn.addEventListener('change', () => {
  timeSet();
  timeIn.reportValidity();
});
