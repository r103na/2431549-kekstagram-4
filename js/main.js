import { renderThumbnail } from './modules/render-thumbnail.js';
import { renderBigPicture } from './modules/render-big-picture.js';
import './modules/add-form.js';
import './modules/scale.js';
import { getData } from './modules/api.js';

getData().then((pictures) => {
  renderThumbnail(pictures);
  renderBigPicture(pictures);
});

