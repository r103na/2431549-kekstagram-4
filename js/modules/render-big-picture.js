import { COMMENTS_LOAD_COUNT } from './constant.js';

const bigPicture = document.querySelector('.big-picture');
const removeButton = bigPicture.querySelector('.big-picture__cancel');

const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');

const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCountBlock = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');
const comment = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');
let shownCommentsCount = COMMENTS_LOAD_COUNT;

const body = document.querySelector('body');
let currentPicture;

const renderComment = (commentInfo) => {
  const newComment = comment.cloneNode(true);

  newComment.querySelector('.social__picture').src = commentInfo.avatar;
  newComment.querySelector('.social__picture').alt = commentInfo.name;
  newComment.querySelector('.social__text').textContent = commentInfo.message;

  return newComment;
};

const hideCommentLoadButton = () => {
  bigPictureCommentsLoader.classList.add('hidden');
};

const showCommentLoadButton = () => {
  bigPictureCommentsLoader.classList.remove('hidden');
};

const changeCommentCount = (currentShownCommentsCount, pictureCommentsCount) => {
  const newMessage = `${currentShownCommentsCount} из ${pictureCommentsCount} комментариев`;
  bigPictureCommentsCountBlock.textContent = newMessage;
};

const renderComments = (commentsInfo) => {
  commentList.innerHTML = '';
  showCommentLoadButton();

  const fragment = document.createDocumentFragment();
  const shownComments = [];

  for (const commentInfo of commentsInfo) {
    if (shownComments.length < shownCommentsCount) {
      shownComments.push(commentInfo);
      fragment.append(renderComment(commentInfo));
    }
  }
  if (shownComments.length >= commentsInfo.length) {
    hideCommentLoadButton();
  }
  changeCommentCount(shownComments.length, commentsInfo.length);
  commentList.append(fragment);
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  shownCommentsCount = COMMENTS_LOAD_COUNT;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  shownCommentsCount = COMMENTS_LOAD_COUNT;
};

const documentOnKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const fillPictureDetails = () => {
  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  bigPictureCommentsCount.textContent = currentPicture.comments.length;
  bigPictureSocialCaption.textContent = currentPicture.description;

  renderComments(currentPicture.comments);
};

const commentsLoaderOnclick = () => {
  shownCommentsCount += COMMENTS_LOAD_COUNT;
  renderComments(currentPicture.comments);
};

const renderBigPicture = (picturesInfo) => {
  const pictures = document.querySelector('.pictures');
  bigPictureCommentsLoader.addEventListener('click', commentsLoaderOnclick);

  pictures.addEventListener('click', (evt) => {
    evt.preventDefault();
    const clickedThumbnail = evt.target.closest('[data-id]');

    if (!clickedThumbnail) {
      return;
    }

    currentPicture = picturesInfo.find((item) => item.id === +clickedThumbnail.dataset.id);

    showBigPicture();
    fillPictureDetails();
  });

  removeButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', documentOnKeydown);
};

export { renderBigPicture };
