//[2] Second way to declare a function in js is "Function Expression"
//The function expressions are also kown as anonymous functions.

// let variableName = function (x, y) {
// statements...
// return x + y;
// };

//template literal string

//function expressions are not hoisted
// let greetingValue = greeting("JK", "Rowling");
// console.log("The greetingValue is ", greetingValue);

//Example
//Note:-- It is recommended to use the const keyword while writing the function expression.
//So that , you dont modify the function body accidently.
let greeting = function (name, lastName) {
  return `${name} ${lastName}`;
};

//normal function declarations are hoisted
total(4, 6);

//normal function declaration
function total(x, y) {
  console.log("The total is ", x + y);
}

//Conclusion :-- The function defined as the expression cannot be called before it is defined.
