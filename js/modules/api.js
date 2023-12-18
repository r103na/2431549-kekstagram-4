import { URL, Method, SERVER_ERROR_TEXT, Route } from './constant.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, SERVER_ERROR_TEXT.GET_DATA);

const sendData = (body) => {
  load(Route.SEND_DATA, SERVER_ERROR_TEXT.POST_DATA, Method.POST, body);
};

export { getData, sendData };
