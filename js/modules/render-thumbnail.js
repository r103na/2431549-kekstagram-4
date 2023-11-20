const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');


const getThumbnailFromTemplate = (pictureInfo) => {
  const picture = thumbnailTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = pictureInfo.url;
  picture.querySelector('.picture__img').alt = pictureInfo.description;
  picture.querySelector('.picture__comments').textContent = pictureInfo.comments.length;
  picture.querySelector('.picture__likes').textContent = pictureInfo.likes;
  picture.dataset.id = pictureInfo.id;

  return picture;
};

const renderThumbnail = (picturesInfo) => {
  const fragment = document.createDocumentFragment();

  for (const pictureInfo of picturesInfo) {
    const newThumbnail = getThumbnailFromTemplate(pictureInfo);
    fragment.append(newThumbnail);
  }

  thumbnailsContainer.appendChild(fragment);
};

export { renderThumbnail };
