//What is deep copy and what is shallow copy ?
//objects  , arrays are non-primitive data types
//number , boolean value , string , symbol
let objOne = { x: 1, y: 2, z: 3 };

//The below statement means that the reference (or address) of objOne is getting stored in
//objTwo. So , any changes made in the name of objTwo would be reflected in the object objOne.
//Non-Primitive data types have a shallow copy.
let objTwo = objOne;

objTwo.x = 55;

console.log("The value of objOne is ", objOne);
console.log("The value of objTwo is ", objOne);

//How to make a deep copy of non-primitive data type in javascript ?
//We make use of structuredClone method.
objTwo = structuredClone(objOne);
objTwo.x = 45;

console.log("The value of objOne is ", objOne);
console.log("The value of objTwo after deep copy is ", objTwo);

let a = 7;
//primitive data types already have separate copies (or deep copy)
let b = a;
b = 3;
console.log("The value of a and b is ", a, b);
