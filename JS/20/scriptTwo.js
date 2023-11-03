//How to invoke a function in javascript ?
// 1) Invoking a function as a method
// 2) Invoking a function as a function //this [2] way was covered
// 3) Invoking a function as a constructor
// 4) Invoking a function using call() and apply( methods)

// 1) Invoking a function as a method

//What is a method in js ?
//It is a function body stored under particular propertyName in the object literal.

//What is the difference betwwen method and function in js ?
//Function body outside the object literal is function.
//Function body inside the object ; assigned to a particular property is known as method.

const personDetails = {
  firstName: "Tom",
  lastName: "Hardy",
  fullName: function () {
    console.log(
      "The value of this keyword inside personDetails object is ",
      this
    );
    return this.firstName + "" + this.lastName;
  },
};

// 1) Invoking a function as a method
let fullNameValue = personDetails.fullName();

console.log(fullNameValue);

console.log("The value of this keyword in the global scope is ", this);
