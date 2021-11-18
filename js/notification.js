import {resetAll} from './form.js';

const ESCAPE_KEY = 'Escape';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');


const showNotification = (template) => document.body.appendChild(template.cloneNode(true));

const removeNotification = () => {
  const success = document.querySelector('.success');
  const error = document.querySelector('.error');
  if (success) {
    success.remove();
  } else {
    error.remove();
  }
};

const onDocumentClick = () => {
  removeNotification();
  document.removeEventListener('click', onDocumentClick);
};

const onDocumentEscKeydown = (evt) => {
  if (evt.key ===ESCAPE_KEY) {
    removeNotification();
    document.removeEventListener('keydown', onDocumentEscKeydown);
  }
};

const showSuccess = () => {
  showNotification(successTemplate);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
  resetAll();
};
const showError = () => {
  showNotification(errorTemplate);
  document.addEventListener('click', onDocumentClick);
  document.querySelector('.error__button').addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

const showErrorOnLoad = () => {
  const error = errorTemplate;
  error.querySelector('.error__message').textContent = 'Ошибка загрузки';
  showNotification(error);
  document.addEventListener('click', onDocumentClick);
  document.querySelector('.error__button').addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentEscKeydown);
};

export {showSuccess, showError, showErrorOnLoad};
