let objOne = {
  name: "Dinesh",
  rollNo: 21,
};

let objTwo = structuredClone(objOne); //deep copy

objTwo.name = "Ramesh";

console.log("The value of objOne and objTwo is ", objOne, objTwo);
