import {createElement} from './mocks.js';

const similarOffers = Array.from({length: 10}, createElement);
const cardOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarListFragment = document.createDocumentFragment();

const getType = (advt) => {
  const typeOf = advt.offer.type;
  if (typeOf === 'flat') {
    return 'Квартира';
  }
  if (typeOf === 'bungalow') {
    return 'Бунгало';
  }
  if (typeOf === 'house') {
    return 'Дом';
  }
  if (typeOf === 'palace') {
    return 'Дворец';
  }
  if (typeOf === 'hotel') {
    return 'Отель';
  }
};

similarOffers.forEach((card1) => {
  const offerItem = cardOfferTemplate.cloneNode(true);
  offerItem.querySelector('.popup__title').textContent = card1.offer.title;
  offerItem.querySelector('.popup__text--address').textContent = card1.offer.address;
  offerItem.querySelector('.popup__text--price').textContent = `${card1.offer.price} ₽/ночь`;
  offerItem.querySelector('.popup__type').textContent = getType(card1);
  offerItem.querySelector('.popup__text--capacity').textContent = `${card1.offer.rooms} комнаты для ${card1.offer.guests} гостей`;
  offerItem.querySelector('.popup__text--time').textContent = `Заезд после ${card1.offer.checkin}, выезд до ${card1.offer.checkout}`;
  offerItem.querySelector('.popup__features').textContent = card1.offer.features;
  offerItem.querySelector('.popup__description').textContent = card1.offer.description;
  offerItem.querySelector('.popup__photos').src = card1.offer.photos;
  offerItem.querySelector('.popup__avatar').src = card1.author.avatar;
  similarListFragment.appendChild(offerItem);
});


export {similarListFragment};

//Предусмотрите ситуацию, когда данных для заполнения не хватает. Например, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
// Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.
