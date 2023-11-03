//Prototypes and constructors
let domainExtension = new Object();

//In the above statement ; "Object()" is a special function known as "constructor"

//Question : -- If we need a method called printDetails() inside the Person constructor ;
//and we need the printDetails() method to behave differently for various different objects ?

//How to create a constructor function
function Person(firstName, lastName, age, position, country) {
  console.log("The value of this keyword is ", this);

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.position = position;
  this.country = country;
}

//defining the method outside the constructor
Person.prototype.printDetails = function () {
  console.log(`Hi! My details are:
    Name:${this.firstName},
    LastName:${this.lastName},
    Age:${this.age},
    Position:${this.position},
    Country:${this.country}
    `);
};

const hardy = new Person("Tom", "Hardy", 46, "Actor", "England");

hardy.printDetails();

console.log("The parent most object in js is ", Object.prototype);
//Object Literal
//instance
//initialize