const AVATAR_COUNT = 6;
const IMAGE_COUNT = 25;

const LIKE_MAX_COUNT = 1000;
const COMMENT_MAX_COUNT = 10;

const NAMES = [
  'Николай',
  'Олег',
  'Алиса',
  'Антон',
  'Галина',
  'Матвей',
  'Ника',
  'Диана',
  'Марина'
];

const DESCRIPTIONS = [
  'Анапа 2010',
  'Чемпионат Мира 2018',
  'Я с мамой',
  'Мой кот',
  'На даче'
];

const MESSAGES = [
  'Супер',
  'ок',
  'привет',
  'норм',
  'топчик',
  '?',
  'промокод сбермаркет скидка 500р на покупку от 1500: RPZ2NT7L687FJ'
];


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElement = (array) => array[getRandomInteger(0, array.length - 1)];

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

getPictures();
