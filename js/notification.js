import {isEscapeKey} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showNotification = (template) => document.body.appendChild(template.cloneNode(true));

const showSuccess = () => showNotification(successTemplate);
const showError = () => showNotification(errorTemplate);

const removeNotification = (template) => template.classList.add('.hidden');

const removeSuccess = () => removeNotification(errorTemplate);
const removeError = () => removeNotification(successTemplate);

const onClickHandler = (notification) =>{
  document.addEventListener('click', ()=>{
    notification();
  });
};
const onEscHandler = (notification) =>{
  document.addEventListener('keydown', (evt)=>{
    if(isEscapeKey(evt.key)){
      notification();
    }
  });
};

export {showSuccess, showError, removeSuccess, removeError, onEscHandler, onClickHandler};
