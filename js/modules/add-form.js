import { HASHTAG_MAX_COUNT, VALID_SYMBOLS, ERROR_TEXT } from './constant.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');

const imageOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseOverlay = uploadForm.querySelector('#upload-cancel');

const hashtagsField = uploadForm.querySelector('.text__hashtags');
const commentsField = uploadForm.querySelector('.text__description');

/* const imagePreview = document.querySelector('.img-upload__preview img'); */

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const getSplitHashtags = (tags) => tags.trim().split(' ').filter((tag) => tag.trim().length);

const isHashtagValid = (value) => getSplitHashtags(value).every((tag) => VALID_SYMBOLS.test(tag));

const hasReachedHashtagLimit = (value) => getSplitHashtags(value).length <= HASHTAG_MAX_COUNT;

const areHashtagsUnique = (value) => {
  const lowerCaseTags = getSplitHashtags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

pristine.addValidator(
  hashtagsField,
  isHashtagValid,
  ERROR_TEXT.NOT_VALID,
  2,
  true
);

pristine.addValidator(
  hashtagsField,
  hasReachedHashtagLimit,
  ERROR_TEXT.REACHED_MAX_COUNT,
  2,
  true
);

pristine.addValidator(
  hashtagsField,
  areHashtagsUnique,
  ERROR_TEXT.NOT_UNIQUE,
  1,
  true
);

const hideImageModal = () => {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadForm.reset();
  pristine.reset();
  buttonCloseOverlay.removeEventListener('click', hideImageModal);
};

const documentOnKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideImageModal();
    document.removeEventListener('keydown', documentOnKeydown);
  }
};

const showImageModal = () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', documentOnKeydown);
  buttonCloseOverlay.addEventListener('click', hideImageModal);
};

uploadFile.addEventListener('input', showImageModal);
/* uploadFile.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (file) {
    const imageUrl = URL.createObjectURL(file);
    imagePreview.src = imageUrl;
  }
}); */

uploadForm.addEventListener('submit', () => { });

commentsField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

hashtagsField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});
