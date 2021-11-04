const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const TypeName = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',

  getElementById: (id) => TypeName[id.toUpperCase()],
};
const setContent = (element, content) => {
  if (content) {
    element.textContent = content;
  } else {
    element.classList.add('hidden');
  }
};

const createPopup = (advert) => {
  const popup = cardOfferTemplate.cloneNode(true);
  setContent(popup.querySelector('.popup__title'), advert.offer.title);
  setContent(popup.querySelector('.popup__text--address'), advert.offer.address);
  setContent(popup.querySelector('.popup__text--price'), `${advert.offer.price} ₽/ночь`);
  setContent(popup.querySelector('.popup__type'), TypeName.getElementById(advert.offer.type));
  setContent(popup.querySelector('.popup__text--capacity'), `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`);
  setContent(popup.querySelector('.popup__text--time'), `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`);
  setContent(popup.querySelector('.popup__features'), advert.offer.features);
  setContent(popup.querySelector('.popup__description'), advert.offer.description);
  //Не понимаю как лучше реализовать добавления массива фотографий
  advert.offer.photos.map((photo) =>  popup.querySelector('.popup__photos').innerHTML += `<img src=${photo} class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  popup.querySelector('.popup__avatar').src = advert.author.avatar;
  return popup;
};

const onSuccessMessage = () =>{
  const message = successPopupTemplate.cloneNode(true);
  body.appendChild(message);
};

const onErrorMessage = () =>{
  const message = errorPopupTemplate.cloneNode(true);
  body.appendChild(message);
};


export {createPopup, onSuccessMessage, onErrorMessage};

