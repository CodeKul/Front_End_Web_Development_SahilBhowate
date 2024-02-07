//How to make the object literal immutable ?
//immutable --something which cannot be modified
let objVal = {
  colorName: "Red",
};

objVal = Object.freeze(objVal);

objVal.colorName = "Yellow";

console.log("The value of objVal is ", objVal);
