//private methods
class Person {
  //defining the private method.
  #privateMethod() {
    return "This information is private";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const newUser = new Person();

console.log("The newUser object is ", newUser);

//calling the private method through the medium of normal method getPrivateMessage()
console.log(newUser.getPrivateMessage());
