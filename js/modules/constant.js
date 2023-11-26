const AVATAR_COUNT = 6;
const IMAGE_COUNT = 25;

const LIKE_MAX_COUNT = 1000;
const COMMENT_MAX_COUNT = 20;
const COMMENTS_LOAD_COUNT = 5;

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;

const ERROR_TEXT = {
  NOT_UNIQUE: 'Хэштеги не должны повторяться',
  NOT_VALID: 'Хэштег должен начинаться с # и состоять из букв или цифр',
  REACHED_MAX_COUNT: 'Максимум 5 хэштегов'
};

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


export {
  AVATAR_COUNT, IMAGE_COUNT, LIKE_MAX_COUNT, COMMENT_MAX_COUNT, NAMES,
  DESCRIPTIONS, MESSAGES, COMMENTS_LOAD_COUNT, HASHTAG_MAX_COUNT, VALID_SYMBOLS,
  ERROR_TEXT
};
