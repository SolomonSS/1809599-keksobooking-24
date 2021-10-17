const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

const TypeName = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',

  getById: (id) => this[id.toUpperCase()],
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
  setContent(popup.querySelector('.popup__type'), TypeName.getById(advert.offer.type));
  setContent(popup.querySelector('.popup__text--capacity'), `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`);
  setContent(popup.querySelector('.popup__text--time'), `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`);
  setContent(popup.querySelector('.popup__features'), advert.offer.features);
  setContent(popup.querySelector('.popup__description'), advert.offer.description);
  popup.querySelector('.popup__photos').src = advert.offer.photos;
  popup.querySelector('.popup__avatar').src = advert.author.avatar;

  return popup;
};


export {createPopup};

