const getRandomInteger = function (min, max) {
  if ((min > max) || (min === max)) {
    return 'Неверное значение! Диапазон может быть только положительный!'
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger();

const getRandomCoordinate = function (min, max, length) {
  if ((min > max) || (min === max)) {
    return 'Неверное значение! Диапазон может быть только положительный!'
  }
  const random = Math.random() * (max - min + 1) + min;
  const coordinate = random.toFixed(length);
  return Number(coordinate);
}

getRandomCoordinate();
