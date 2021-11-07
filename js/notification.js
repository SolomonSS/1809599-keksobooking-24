import {isEscapeKey} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = document.querySelector('.error__button');
const error = document.querySelector('.error');
const success = document.querySelector('.success');

const showNotification = (template) => document.body.appendChild(template.cloneNode(true));

const removeNotification = (element) => document.querySelector(element).remove();

const removeClickListener = (func) => document.removeEventListener('click', func);
const removeEscListener = (func) => document.removeEventListener('keydown', func);

const onDocumentClick = () => {
  if(success) {
    removeNotification(success);
  } else {
    removeNotification(error);
  }
  removeEscListener(onDocumentClick);
  removeClickListener(onDocumentClick);
};

const showSuccess = () => {
  showNotification(successTemplate);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', (evt)=>{
    if(isEscapeKey(evt.key)){
      onDocumentClick();
    }
  });
};
const showError = () => {
  showNotification(errorTemplate);
  errorButton.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', (evt)=>{
    if(isEscapeKey(evt.key)){
      onDocumentClick();
    }
  });
};
/*1. Я уже писал, что нотификацию надо удалять, а не скрывать
2. Добавлять слушатели надо сразу после показа нотификации
3. Должны быть разные слушатели на разные типы событий (но они могут переиспользовать код закрытия нотификации)
4. Слушатель нажатия на кнопку (по хорошему) сейчас не должен работать, т.к. ты добавляешь его на элемент в шаблоне, а не в показанной нотификации

const onDocumentClick = (evt) => { … };
document.addEventListener(‘click’, onDocumentClick);
document.removeEventListener(‘click’, onDocumentClick);
*/

export {showSuccess, showError};
