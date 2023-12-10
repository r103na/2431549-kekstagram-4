const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const hideErrorMessage = () => {
  const errorContainer = document.querySelector('.error');
  if (errorContainer) {
    errorContainer.remove();
  }
};

const hideErrorOnMouseClick = (evt) => {
  const errorContainer = document.querySelector('.error__inner');
  if (evt.target !== errorContainer) {
    hideErrorMessage();
  }
};

const showErrorMessage = () => {
  const message = errorMessage.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onEscapeError);
  document.addEventListener('click', hideErrorOnMouseClick);
  document.body.append(message);
};

const hideSuccessMessage = () => {
  document.removeEventListener('keydown', onEscapeSuccess);
  const successContainer = document.querySelector('.success');
  if (successContainer) {
    successContainer.remove();
  }
};

const successMouseClick = (evt) => {
  const successContainer = document.querySelector('.success__inner');
  if (evt.target !== successContainer) {
    hideSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const message = successMessage.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click', successMouseClick);
  document.body.append(message);
};

function onEscapeSuccess(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
    document.removeEventListener('keydown', onEscapeError);
  }
}

function onEscapeError(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
}

export { showErrorMessage, showSuccessMessage };
