export const getUtcTime = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Додаємо 1, оскільки місяці в JS починаються з 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

  // Отримати рік, місяць та день у форматі YYYY-MM-DD
  const datePart = `${year}-${month}-${day}`;

  // Отримати годину, хвилину та секунду у форматі HH:MM:SS.sss
  const timePart = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  // З'єднуємо дату та час
  const dateTimeString = `${datePart}T${timePart}Z`;

  return dateTimeString;
};

export const parseUtcTime = time => {
  //yyyy-mm-ddThh:mm:ss.sssZ
  const dateParts = time.split('T');
  const [year, month, day] = dateParts[0].split('-');
  const [hours, minutes, seconds] = dateParts[1].split('.')[0].split(':');

  return {year, month, day, hours, minutes, seconds}
};

