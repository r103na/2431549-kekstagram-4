import { renderThumbnail } from './modules/render-thumbnail.js';
import { setOnFormSubmit, hideImageModal } from './modules/add-form.js';
import { showErrorMessage, showSuccessMessage } from './modules/message.js';
import { getData, sendData } from './modules/api.js';
import { showFilterButtons } from './modules/filter.js';
import { debounce } from './modules/utils.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideImageModal();
    showSuccessMessage();
  } catch (error) {
    hideImageModal();
    showErrorMessage();
  }
});

getData().then((pictures) => {
  const debouncedRenderThumbnail = debounce(renderThumbnail);
  renderThumbnail(pictures);
  showFilterButtons(pictures, debouncedRenderThumbnail);
});

