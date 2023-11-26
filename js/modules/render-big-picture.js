import { fillPictureDetails } from './render-big-picture-details.js';

const bigPicture = document.querySelector('.big-picture');
const removeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const documentOnKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
    document.removeEventListener('keydown', documentOnKeydown);
  }
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  removeButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', documentOnKeydown);
};

const renderBigPicture = (picturesInfo) => {
  const pictures = document.querySelector('.pictures');

  pictures.addEventListener('click', (evt) => {
    const clickedThumbnail = evt.target.closest('[data-id]');

    if (!clickedThumbnail) {
      return;
    }

    evt.preventDefault();
    const currentPicture = picturesInfo.find((item) => item.id === +clickedThumbnail.dataset.id);

    showBigPicture();
    fillPictureDetails(currentPicture);
  });
};

export { renderBigPicture };
