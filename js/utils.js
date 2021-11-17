import {advertsList} from './pin-filters.js';

const setFormEnabled = (form, enabled, disabledClass) => {
  if (enabled) {
    form.classList.remove(disabledClass);
  } else {
    form.classList.add(disabledClass);
  }
  form.setAttribute(enabled, enabled);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return () => {
    if(timeoutId){
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(callback, timeoutDelay);
  };
};

const saveAdvets = (adverts) =>{
  adverts.forEach((advert)=>{
    advertsList.push(advert);
  });
};

export {setFormEnabled, debounce, saveAdvets};
