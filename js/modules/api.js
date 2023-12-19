import { URL, Method, SERVER_ERROR_TEXT, Route } from './constant.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, SERVER_ERROR_TEXT.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, SERVER_ERROR_TEXT.SEND_DATA, Method.POST, body);

export { getData, sendData };
