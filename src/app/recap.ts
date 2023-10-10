const username: string = 'Brandon';
const sum = (a: number, b: number) => {
  return a + b;
};
sum(1, 2);

// class Person {
//   private age: number;
//   firstName: string;
//   constructor(age: number, firstName: string) {
//     this.age = age;
//     this.firstName = firstName;
//   }
// }

class Person {
  constructor(private age: number, public firstName: string) {}
}

const firstPerson = new Person(18, 'Brandon');
