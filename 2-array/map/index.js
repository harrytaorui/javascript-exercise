export default function numberMapToWord(collection) {
  const result = collection.map(number => String.fromCharCode(number + 96));
  return result;
}
