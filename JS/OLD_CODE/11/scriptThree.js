//Primitives passed by value

//What is pass by value ? -- how primitive data types are passed.
//What is pass by reference ? -- how object data types in js are passed.

let a = 5;
let b = "name";
let c = null;

//this is pass by value , because the value stored in a is the primitive data type.
c = a;

a = 10;
console.log("The value of a is ", a);
console.log("The value of c is ", c);
