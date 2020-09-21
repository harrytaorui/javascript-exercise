export default function collectCarNumberCount(collection) {
  let count = 0;
  collection.forEach(car => {
    if (car.startsWith('粤A')) {
      count += 1;
    }
  });
  return count;
}
