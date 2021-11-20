const setFormEnabled = (form, enabled, disabledClass) => {
  if (enabled) {
    form.classList.remove(disabledClass);
  } else {
    form.classList.add(disabledClass);
  }
  form.enabled = enabled;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(callback, timeoutDelay);
  };
};

export {setFormEnabled, debounce};
