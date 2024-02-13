//Difference between "Method" and "functions"
//Method is a function body assigned to any of the property of an object.

//Below are the 3 characteristics of objects
//[1] identity
//[2] State
//[3] Behaviour

let andy = {
  name: "Andy",
  occupation: "developer",
  salary: 8000,
  age: 33,
  bonuses: function (extraBonuses) {
    console.log("Value of this keyword inside andy object is ", this);
    this.salary = this.salary + extraBonuses;
  },
  //   bonuses: (extraBonuses) => {
  //     console.log("Value of this keyword inside andy object is ", this);
  //   },
};

andy.bonuses(1000);

console.log("object andy after modification is ", andy);

//Note : "this" keyword stores the reference (that is address) of the object ; only when the
//method is consisting a normal function body. If the method consists of arrow function then
//the this keyword would not store the reference (that is address) of the object. Instead,
//it would point to the global window object. That in case of arrow functions ; the this keyword would store the global window object.
