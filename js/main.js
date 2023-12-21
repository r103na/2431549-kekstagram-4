import { renderThumbnail } from './modules/render-thumbnail.js';
import { onFormSubmit } from './modules/add-form.js';
import { getData } from './modules/api.js';
import { showFilterButtons } from './modules/filter.js';
import { debounce } from './modules/utils.js';

getData().then((pictures) => {
  const debouncedRenderThumbnail = debounce(renderThumbnail);
  renderThumbnail(pictures);
  showFilterButtons(pictures, debouncedRenderThumbnail);
});

onFormSubmit();

