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
    if (!isNaN(parseInt(char, 10))) {
      numberString += char;
    }
  }
  return parseInt(numberString, 10);
};

const stripHours = (hour) => hour.split(':').map(Number);

const checkTime = (startTime, endTime, meetingTime, meetingDuration) => {
  let isMeetingOut = true;

  const [startHour, startMinute] = stripHours(startTime);
  const [endHour, endMinute] = stripHours(endTime);
  const [meetingHour, meetingMinute] = stripHours(meetingTime);

  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  const meetingStartMinutes = meetingHour * 60 + meetingMinute;

  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  isMeetingOut = meetingStartMinutes >= startMinutes && meetingEndMinutes <= endMinutes;

  return isMeetingOut;
};

isStringLengthValid('проверяемая строка', 20);
isPalindrome('роза АЗОР');
getNumber('2023 1.5');
checkTime();
