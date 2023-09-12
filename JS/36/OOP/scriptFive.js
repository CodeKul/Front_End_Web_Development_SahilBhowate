//Prototypes and constructors
let domainExtension = new Object();

//In the above statement ; "Object()" is a special function known as "constructor"

//How to create a constructor function
function Person(firstName, lastName, age, position, country) {
  console.log("The value of this keyword is ", this);

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.position = position;
  this.country = country;
  this.printDetails = 
}

//always call the costructor function using the new keyword.
const Rakesh = new Person("Rakesh", "Sharma", "34", "Developer", "India");
const Sumit = new Person("Sumit", "Kumar", "34", "Astronaut", "India");

console.log("Rakesh Person object is ", Rakesh);
console.log("Sumit Person object is ", Sumit);

Rakesh.printDetails();
Sumit.printDetails();
