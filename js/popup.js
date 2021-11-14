const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');

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

const renderFeatures = (features, popup) => {
  const popupFeatures = popup.querySelectorAll('.popup__feature');
  if (features) {
    features.forEach((element) => {
      popupFeatures.forEach((feature) => {
        if (feature.className.includes(element)) {
          feature.classList.remove('hidden');
        }
      });
    });
  } else {
    popup.offer.features.classList.add('hidden');
  }
};

const renderPhotos = (photos, element) =>{
  if(photos){
    (photos.offer.photos || []).map((photo) => element.querySelector('.popup__photos').innerHTML += `<img src=${photo} class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
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
  setContent(popup.querySelector('.popup__description'), advert.offer.description);
  renderFeatures(advert.offer.features || [], popup);
  renderPhotos(advert, popup);
  popup.querySelector('.popup__avatar').src = advert.author.avatar;
  return popup;
};

export {createPopup};

