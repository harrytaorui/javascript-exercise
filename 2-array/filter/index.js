function chooseMultiplesOfThree(collection) {
  const result = [];
  collection.forEach(number => {
    if (number % 3 === 0) {
      result.push(number);
    }
  });
  return result;
}

function chooseNoRepeatNumber(collection) {
  const result = collection.filter((value, index, self) => index === self.indexOf(value));
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
