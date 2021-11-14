import {resetAll} from './form.js';

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
  if (evt.key ==='Escape') {
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

export {showSuccess, showError};
