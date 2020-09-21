export default function countTypesNumber(source) {
  let count = 0;
  Object.values(source).forEach(value => {
    count += +value;
  });
  return count;
}
