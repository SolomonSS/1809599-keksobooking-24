const ESCAPE_KEY = 'Escape';
const ADVERTS_LOAD_ERROR = 'Ошибка загрузки объявлений';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const removeNotification = () => {
  const success = document.querySelector('.success');
  if (success) {
    success.remove();
  } else {
    const error = document.querySelector('.error');
    error.remove();
  }
};

const onDocumentClick = () => {
  removeNotification();
  document.removeEventListener('click', onDocumentClick);
};

const onDocumentEscKeydown = (evt) => {
  if (evt.key === ESCAPE_KEY) {
    removeNotification();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  }
};

const showNotification = (template) => {
  const notification = template.cloneNode(true);
  document.body.appendChild(notification);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
  return notification;
};

const showSuccess = () => showNotification(successTemplate);

const showError = (errorMessage = null) => {
  const errorNotification = showNotification(errorTemplate);
  if (errorMessage) {
    errorNotification.querySelector('.error__message').textContent = ADVERTS_LOAD_ERROR;
  }
  document.querySelector('.error__button').addEventListener('click', onDocumentClick);
};

export {showSuccess, showError};
