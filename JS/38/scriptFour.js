//defining and accessing a static property and a static method in a class

class User {
  constructor(name) {
    this.naam = name;
  }

  static staticProperty = "Some Info";

  static staticMethod() {
    console.log(this.name);
  }
}

let newUser = new User("Suresh");

console.log("The object newUser is ", newUser);

//call a static method using the className
User.staticMethod();
// newUser.staticMethod(); //not allowed

console.log(User.staticProperty);
console.log(newUser.staticProperty); //not allowed
