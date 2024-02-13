//getter Methods -- always return us something and it has no parameters
//starts with the keyword "get"
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //defining getter method
  get fullName() {
    return `${this.firstName},${this.lastName}`;
  }
}

const actor = new Person("Dilip", "Kumar");

//calling the getter method
const actorName = actor.fullName;

console.log(actorName);
