import { AVATAR_COUNT, MESSAGES, NAMES, LIKE_MAX_COUNT, DESCRIPTIONS, COMMENT_MAX_COUNT, IMAGE_COUNT } from './constant.js';
import { getRandomInteger, getRandomElement } from './utils.js';

const getId = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId++;
    return lastGeneratedId;
  };
};

const getImageId = getId();
const getCommentId = getId();

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createPicture = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  likes: getRandomInteger(0, LIKE_MAX_COUNT),
  description: getRandomElement(DESCRIPTIONS),
  name: getRandomElement(NAMES),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_MAX_COUNT) }, () => createComment())
});

const getPictures = () => Array.from({ length: IMAGE_COUNT }, () => createPicture(getImageId()));


export { getPictures };
