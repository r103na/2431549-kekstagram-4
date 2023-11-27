import { getPictures } from './modules/create-pictures.js';
import { renderThumbnail } from './modules/render-thumbnail.js';
import { renderBigPicture } from './modules/render-big-picture.js';
import './modules/add-form.js';

const pictures = getPictures();

renderThumbnail(pictures);
renderBigPicture(pictures);
