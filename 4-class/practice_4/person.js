class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }

  // eslint-disable-next-line camelcase
  static basic_introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

export default Person;
