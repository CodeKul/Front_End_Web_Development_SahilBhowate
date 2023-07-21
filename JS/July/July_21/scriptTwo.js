//OOP --- Inheritance

//What we need  :-- Parent Class
//JavaScript Inheritance
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  startRunning(speed) {
    this.speed = speed;

    return `The ${this.name} runs with speed of ${this.speed}km per hour`;
  }

  stopRunning() {
    this.speed = 0;
    console.log(`The ${this.name} stopped running and now is still`);
  }
}

let animal = new Animal("Animal"); //object creation

console.log("The animal object is ", animal);

//class Child extends Parent
//name property belongs to the Animal class.
class Dog extends Animal {
  bark() {
    return `The ${this.name} barks!`;
  }
}

let Bruno = new Dog("Bruno"); //object creation

console.log("The dog object is ", Bruno);

// The Dog runs with speed of 10km per hour
console.log(Bruno.startRunning(10));

console.log(Bruno.bark()); //The Dog barks!

//Child points to the parent according to the conventions of UML diagrams

//Object.prototype <---- Animal.prototype

//Animal.prototype  --- Animal class was created.

//Dog.prototype ----->  Animal.prototype  -----> Object.prototype

//Modification of Dog.prototype means the class named "Dog" was created.
//The above one is the example of prototype chain.

//The Object "Bruno" was made from "Dog" class
//The object "animal" was made from "Animal" class

//Note :-- Dog class extended Animal Class
