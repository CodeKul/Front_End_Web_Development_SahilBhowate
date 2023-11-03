class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //defining getter method
  get fullName() {
    return `${this.firstName},${this.lastName}`;
  }

  //defining setter method
  set fullName(name) {
    const parts = name.split(",");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

//making a object
const dilipKumar = new Person();
console.log("The dilipKumar object is ", dilipKumar);

//Calling the setter method
dilipKumar.fullName = "Dilip,Kumar";

console.log("The dilipKumar object is ", dilipKumar);
