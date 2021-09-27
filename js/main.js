//Task 2 Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
const getRandomFloat = (min, max, precision) => {
  if (min >= max) {
    throw new Error('Минимальное значение больше максимального');
  }
  return Number((Math.random() * (max - min) + min).toFixed(precision));
};

//Task 1 Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInt = (min, max) => getRandomFloat(min, max, 0);

getRandomFloat(1.1, 1.12, 2);
getRandomInt(3, 4);


