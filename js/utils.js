const getRandomFloat = (min, max, precision) => {
  if (min < 0) {
    return new Error('Минимально значение меньше 0');
  }
  return (Math.random() * (max - min) + min).toFixed(precision);
};

const getRandomInt = (min, max) => getRandomFloat(min, max, 0);

export {getRandomInt,getRandomFloat};
