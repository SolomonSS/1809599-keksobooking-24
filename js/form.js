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

const unActive = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.setAttribute('disabled','disabled');
  mapFilters.classList.add('ad-form--disabled');
  mapFilters.setAttribute('disabled','disabled');
};

const active = () =>{
  adForm.classList.remove('ad-form--disabled');
  adForm.removeAttribute('disabled');
  mapFilters.classList.remove('ad-form--disabled');
  mapFilters.removeAttribute('disabled');
};
unActive();
active();


/*
    На месте карты отображается серый прямоугольник.
    Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
    Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
    Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled. */
