import { COMMENTS_LOAD_COUNT } from './constant.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureSocialCaption = bigPicture.querySelector('.social__caption');

const bigPictureCommentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCommentsCountBlock = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');

const comment = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');
let shownCommentsCount = COMMENTS_LOAD_COUNT;

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

const commentsLoaderOnclick = () => {
  shownCommentsCount += COMMENTS_LOAD_COUNT;
  renderComments(currentPicture.comments);
};

const fillPictureDetails = (clickedPicture) => {
  currentPicture = clickedPicture;
  shownCommentsCount = COMMENTS_LOAD_COUNT;

  bigPictureCommentsLoader.addEventListener('click', commentsLoaderOnclick);

  bigPictureImg.src = currentPicture.url;
  bigPictureLikesCount.textContent = currentPicture.likes;
  bigPictureCommentsCount.textContent = currentPicture.comments.length;
  bigPictureSocialCaption.textContent = currentPicture.description;

  renderComments(currentPicture.comments);
};

export { fillPictureDetails };
