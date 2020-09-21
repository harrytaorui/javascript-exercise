function chooseMultiplesOfThree(collection) {
  const result = collection.filter(value => value % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  const result = collection.filter((value, index, self) => index === self.indexOf(value));
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
