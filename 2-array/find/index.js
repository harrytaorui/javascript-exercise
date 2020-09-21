export default function find00OldPerson(collection) {
  const result = collection.find(person => person.age <= 20 && person.age >= 10);
  return result.name;
}
