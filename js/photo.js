const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const adForm = document.querySelector('.ad-form');
const avatarInput = adForm.querySelector('.ad-form__field input[type=file]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const photoInput = adForm.querySelector('#images');
const photoPreview = adForm.querySelector('.ad-form__photo');

const matches = (name) =>FILE_TYPES.some((item) =>name.endsWith(item));

const creatingImage = (photo) => {
  const image = photoPreview.querySelector('img');
  if(!image) {
    const photoPreviewImage = document.createElement('img');
    photoPreview.appendChild(photoPreviewImage);
    photoPreviewImage.src = URL.createObjectURL(photo);
    photoPreviewImage.height = 70;
    photoPreviewImage.width = 70;
  } else {
    image.src = URL.createObjectURL(photo);
  }
};

avatarInput.addEventListener('change', () => {
  const avatar = avatarInput.files[0];
  const avatarName = avatar.name.toLowerCase();
  if (matches(avatarName)) {
    avatarPreview.src = URL.createObjectURL(avatar);
  } else {
    avatarPreview.src = '';
  }
});

photoInput.addEventListener('change', () => {
  const photo = photoInput.files[0];
  const photoName = photo.name.toLowerCase();
  if (matches(photoName)) {
    creatingImage(photo);
  }
});

const removePhotos = () =>{
  const photo = photoPreview.querySelector('img');
  if(photo){
    photo.remove();
  }
  avatarPreview.src = 'img/muffin-grey.svg';
};

export {removePhotos};
