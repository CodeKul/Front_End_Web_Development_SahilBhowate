let objOne = {
  name: "Dinesh",
  rollNo: 21,
};

let objTwo = objOne; //shallow copy

objTwo.name = "Ramesh";

console.log("The value of objOne and objTwo is ", objOne, objTwo);
