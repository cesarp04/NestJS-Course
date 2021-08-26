const myName = 'Cesar';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 3);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const cesar = new Person(15, 'cesar');
cesar.getSummary();
