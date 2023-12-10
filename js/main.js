import { renderThumbnail } from './modules/render-thumbnail.js';
import { renderBigPicture } from './modules/render-big-picture.js';
import { setOnFormSubmit, hideImageModal } from './modules/add-form.js';
import { showErrorMessage, showSuccessMessage } from './modules/message.js';
import { getData, sendData } from './modules/api.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideImageModal();
    showSuccessMessage();
  } catch (error) {
    showErrorMessage();
  }
});

getData().then((pictures) => {
  renderThumbnail(pictures);
  renderBigPicture(pictures);
});

