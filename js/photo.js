const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarInput = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoInput = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');

const creatingImage = (photo) => {
  const image = photoPreview.querySelector('img');
  if(!image) {
    const photoPreviewImage = document.createElement('img');
    photoPreview.appendChild(photoPreviewImage);
    photoPreviewImage.src = URL.createObjectURL(photo);
  } else {
    image.src = URL.createObjectURL(photo);
  }
  image.height = 70;
  image.width = 70;
};

avatarInput.addEventListener('change', () => {
  const avatar = avatarInput.files[0];
  const avatarName = avatar.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => avatarName.endsWith(it));
  if (matches) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});

photoInput.addEventListener('change', () => {
  const photo = photoInput.files[0];
  const photoName = photo.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => photoName.endsWith(it));
  if (matches) {
    creatingImage(photo);
  }
});
