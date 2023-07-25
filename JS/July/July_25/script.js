console.log("This is script.js file");

class Person {
  #privateID;

  constructor(firstName, lastName, dob, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.country = country;

    this.#privateID = 438483409430;
  }
}

//Making the object of class Person
const dilipKumar = new Person("Dilip", "Kumar", "29/10/1920", "India");

console.log("The dilipKumar object is ", dilipKumar);

//The property is not accessbile outside the class body.
// console.log(dilipKumar.#privateID);
