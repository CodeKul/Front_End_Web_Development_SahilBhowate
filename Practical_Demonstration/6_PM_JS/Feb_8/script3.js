//a and b are function parameters
function sum(a, b, receivePrintTheSumFunction) {
  let additionOfTwoNumbers = a + b

  console.log("The value of receivePrintTheSumFunction is ",receivePrintTheSumFunction);

  receivePrintTheSumFunction(additionOfTwoNumbers);
}

//printTheSum is callback function
//Because it is sent as parameter to the sum() function
function printTheSum(additionOfTwoNumbers) {
  console.log("The additionOfTwoNumbers is ", additionOfTwoNumbers);
}

//sum is higher order function
//Because it accepts another function's body as an argument
sum(2, 5, printTheSum); //2,5 are function arguments
