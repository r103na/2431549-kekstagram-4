import { getPictures } from './modules/create-pictures.js';
import { renderThumbnail } from './modules/render-thumbnail.js';
import { addEventListenerToPicture } from './modules/render-big-picture.js';

const pictures = getPictures();

renderThumbnail(pictures);

addEventListenerToPicture(pictures);
