//object literal
let objOne = { name: "Rohit", rollNo: 31 };

//deep copy
let objTwo = structuredClone(objOne);

console.log("The value of objTwo is ", objTwo);

objTwo.rollNo = 22;

console.log("The value of objOne and objTwo is ", objOne, objTwo);
