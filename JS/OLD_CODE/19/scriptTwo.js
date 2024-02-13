//[1] One way to write a function body in js is to use the function keyword.

//The syntax is as follows
// function name(parameter1,parameter2,parameter3..........){
//function body
// }

//Example
//here x,y are known as function parameters.
function total(x, y) {
  return x + y;
}

//calling the function total
//here 3, 8 are known as function arguments.
let sumOfTwoNumbers = total(3, 8);

let sum = total("4", "9");

console.log("The value of sumOfTwoNumbers is ", sumOfTwoNumbers);

console.log("The value of sum is ", sum);

//function without a parameter list
function simpleFunction() {
  //return statement indicates the termination/end of the function
  return "No Parameters";
}

//calling the function
let value = simpleFunction();

console.log("The value is ", value);
