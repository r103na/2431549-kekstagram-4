import { HASHTAG_MAX_COUNT, VALID_SYMBOLS, ERROR_TEXT, SubmitButtonText, FILE_TYPES } from './constant.js';
import { resetScale } from './scale.js';
import { reset } from './effect.js';


const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');

const imageOverlay = uploadForm.querySelector('.img-upload__overlay');
const buttonCloseOverlay = uploadForm.querySelector('#upload-cancel');

const hashtagsField = uploadForm.querySelector('.text__hashtags');
const commentsField = uploadForm.querySelector('.text__description');

const imagePreview = document.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

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
  3,
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
  resetScale();
  reset();

  document.addEventListener('keydown', documentOnKeydown);
  buttonCloseOverlay.addEventListener('click', hideImageModal);
};

const changeEffectPreviewImage = (newImage) => {
  effectsPreview.forEach((effectPreview) => {
    effectPreview.style.backgroundImage = `url('${newImage}')`;
  });
};

const showImage = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();

  const isValidType = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (file && isValidType) {
    const imageUrl = URL.createObjectURL(file);
    imagePreview.src = imageUrl;
    changeEffectPreviewImage(imageUrl);
  }
};

const uploadOnChange = (evt) => {
  showImage(evt);
  showImageModal();
};

uploadFile.addEventListener('change', uploadOnChange);

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

const blockSubmitButton = () => {
  buttonCloseOverlay.disabled = true;
  buttonCloseOverlay.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  buttonCloseOverlay.disabled = false;
  buttonCloseOverlay.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();
      await callback(new FormData(uploadForm));
      unblockSubmitButton();
    }
  });
};

export { setOnFormSubmit, hideImageModal };
