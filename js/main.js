//Task 1 Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max){
  if(min>=max){
    return -1;
  }
  return Math.floor(Math.random()*(max-min+1) + min);
}
getRandomInt(3, 4);

//Task 2 Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandom(min, max, digitsQuantity){
  if (min>=max){
    return -1;
  }
  const digitsMultiplier = Math.pow(10, digitsQuantity);
  return Math.round((Math.random() * (max - min) + min) * digitsMultiplier) / digitsMultiplier;
}
getRandom(1.1, 1.12,2);
