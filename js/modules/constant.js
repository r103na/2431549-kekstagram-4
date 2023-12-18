const AVATAR_COUNT = 6;
const IMAGE_COUNT = 25;

const LIKE_MAX_COUNT = 1000;
const COMMENT_MAX_COUNT = 20;
const COMMENTS_LOAD_COUNT = 5;

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_MAX_COUNT = 5;

const URL = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ERROR_TEXT = {
  NOT_UNIQUE: 'Хэштеги не должны повторяться',
  NOT_VALID: 'Хэштег должен начинаться с # и состоять из букв или цифр',
  REACHED_MAX_COUNT: 'Максимум 5 хэштегов'
};

const SERVER_ERROR_TEXT = {
  GET_DATA: 'не загрузилося',
  POST_DATA: 'не отправилося',
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

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const FILTER_PICTURES_COUNT = 10;

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const Effects = {
  NONE: {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  CHROME: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  SEPIA: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  MARVIN: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  PHOBOS: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  HEAT: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
};

export {
  AVATAR_COUNT, IMAGE_COUNT, LIKE_MAX_COUNT, COMMENT_MAX_COUNT, NAMES,
  DESCRIPTIONS, MESSAGES, COMMENTS_LOAD_COUNT, HASHTAG_MAX_COUNT, VALID_SYMBOLS,
  ERROR_TEXT, SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE, Effects,
  SERVER_ERROR_TEXT, Method, Route, URL, Filters, FILTER_PICTURES_COUNT
};
