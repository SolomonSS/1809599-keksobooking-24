const setFormEnabled = (form, enabled, disabledClass) => {
  if (enabled) {
    form.classList.remove(disabledClass);
  } else {
    form.classList.add(disabledClass);
  }
  form.setAttribute(enabled, enabled);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {setFormEnabled, isEscapeKey};
