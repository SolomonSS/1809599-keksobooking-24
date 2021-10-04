// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (one, two, digits = 1) {
  const lower = Math.min(Math.abs(one), Math.abs(two));
  const upper = Math.max(Math.abs(one), Math.abs(two));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
getRandomPositiveFloat(10,18,4);
