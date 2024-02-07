//How to make the object immutable
//The meaning of immutable is -- it should not be modified
//freeze method can only be applied on object literals

let colorObj = {
  colorName: "Red",
};

colorObj = Object.freeze(colorObj);

colorObj.colorName = "Yellow";

console.log("The value of colorObj is ", colorObj);
