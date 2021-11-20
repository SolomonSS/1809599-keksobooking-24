const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const MUFFIN_PIC = 'img/muffin-grey.svg';

const adForm = document.querySelector('.ad-form');
const avatarInput = adForm.querySelector('.ad-form__field input[type=file]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const photoInput = adForm.querySelector('#images');
const photoPreview = adForm.querySelector('.ad-form__photo');

const renderImage = (photo) => {
  const image = photoPreview.querySelector('img');
  if (!image) {
    const photoPreviewImage = document.createElement('img');
    photoPreviewImage.style.width = '100%';
    photoPreviewImage.src = URL.createObjectURL(photo);
    photoPreview.appendChild(photoPreviewImage);
  } else {
    image.src = URL.createObjectURL(photo);
  }
};

const removePhotos = () => {
  const photo = photoPreview.querySelector('img');
  if (photo) {
    photo.remove();
  }
  avatarPreview.src = MUFFIN_PIC;
};

const isImageFile = (file) => FILE_TYPES.some((fileType) => file.name.toLowerCase().endsWith(fileType));

avatarInput.addEventListener('change', () => {
  const avatar = avatarInput.files[0];
  if (isImageFile(avatar)) {
    avatarPreview.src = URL.createObjectURL(avatar);
  } else {
    avatarPreview.src = '';
  }
});

photoInput.addEventListener('change', () => {
  const photo = photoInput.files[0];
  if (isImageFile(photo)) {
    renderImage(photo);
  }
});

export {removePhotos};
