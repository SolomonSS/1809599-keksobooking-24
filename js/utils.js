const setFormEnabled = (form, enabled, disabledClass) => {
  if (enabled) {
    form.classList.remove(disabledClass);
  } else {
    form.classList.add(disabledClass);
  }
  form.setAttribute(enabled, enabled);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return () => {
    if(timeoutId){
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(callback, timeoutDelay);
  };
}

export {setFormEnabled, isEscapeKey, debounce};
