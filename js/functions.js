const isStringLengthValid = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const formattedStr = str.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const getNumber = (str) => {
  let numberString = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(char)) {
      numberString += char;
    }
  }
  return parseInt(numberString, 10);
};
