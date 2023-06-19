//How to create a js object using the new keyword.
//A reference of the object was stored in the variable carOneObj
let carOneObj = {
  name: "Ford",
  model: "Mustang",
  color: "blue-white",
};

//The reference that was stored in the variable carOneObj ; is now transfferred to the
//variable carTwoObj.
//This means that both "carOneObj" and "carTwoObj" now point to the same object.
let carTwoObj = carOneObj;

//modifying the "name" property of the object ; through the reference that was stored in carTwoObj variable.

carTwoObj.name = "TATA";

console.log("The value of carOneObj is", carOneObj);
console.log("The value of carTwoObj is ", carTwoObj);
