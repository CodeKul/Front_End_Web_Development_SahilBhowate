//Static properties and methods
//Aisi methods (function body) jo hum class ko assign karenge ; par prototype ko assign nahi
//karenge. Aisi methods ko "static Methods" kehte hai

class User {
  constructor(name) {
    this.naam = name;
  }

  //static methods do not modify the prototype
  static staticMethod() {
    console.log(this.name);
  }
}

//making a object of the class User
let newUser = new User("Rakesh");

console.log("The newUser object is ", newUser);

//Calling static method using the class name
User.staticMethod();
