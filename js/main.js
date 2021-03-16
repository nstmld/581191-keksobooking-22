const getRandomInteger = function (min, max) {
  if ((min > max) || (min === max)) {
    return 'Неверное значение! Диапазон может быть только положительный!'
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomCoordinate = function (min, max, length) {
  if ((min > max) || (min === max)) {
    return 'Неверное значение! Диапазон может быть только положительный!'
  }
  const random = Math.random() * (max - min + 1) + min;
  const coordinate = random.toFixed(length);
  return Number(coordinate);
}

const author = {
  avatar: 'img/avatars/user/0' + getRandomInteger(0, 8) + '.png',
};

author;

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const TYPE_LIST = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const location = {
  x: getRandomCoordinate(35.65000, 35.70000, 5),
  y: getRandomCoordinate(139.70000, 139.80000, 5),
};

const createFeaturesList = () => {
  const randomArrLength = getRandomInteger(0, FEATURES_LIST.length);
  const randomStartElement = getRandomInteger(0, FEATURES_LIST.length);
  const resultArr = FEATURES_LIST.splice(randomStartElement,randomArrLength);

  return resultArr;
};

const createPhotosLinks = () => new Array(getRandomInteger(0,3)).fill('http://o0.github.io/assets/images/tokyo/hotel').map((value, index) => value += `${index + 1}.jpg`);

const createOffer = () => {
  const randomCheckinTime = getRandomInteger(0, CHECK_TIME.length - 1);
  const randomCheckoutTime = getRandomInteger(0, CHECK_TIME.length - 1);
  const randomType = getRandomInteger(0, TYPE_LIST.length - 1);

  return {
    title: 'Временный заголовок',
    address: location.x + ',' + location.y,
    price: getRandomInteger(0, 10000),
    type: TYPE_LIST[randomType],
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 20),
    checkin: CHECK_TIME[randomCheckinTime],
    checkout: CHECK_TIME[randomCheckoutTime],
    features: createFeaturesList(),
    description: 'Случайное описание помещения',
    photos: createPhotosLinks(),
  };
}

createOffer();
