console.log("This is script.js file");

//Classes in JavasScript
//Making a class named Person

//[1] What is a constructor function ?
//[2] What is a prototype ?

//[1] , [2] are equivalent to using a class construct.
//Note : Since ES6 version , it is recommended to use class syntax instead of JavaScript prototype-based classes.

class Person {
  //below is our constructor function
  constructor(firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
  }

  printDetails() {
    console.log(`Hi! My details are :
    Name:${this.firstName},
    Name:${this.lastName},
    Name:${this.age},
    Name:${this.position},
    Name:${this.country}
    `);
  }
}

//Make / instantiate object named Tom.
const Tom = new Person("Tom", "Hardy", "67", "Actor", "England");

console.log("The object of the class Person is ", Tom);
