//sum is higher order function.
//Because it is receiving another function as a argument.
function sum(a, b, receivedPrintFunction) {
  let sum = a + b;

  console.log("The value of receivedPrintFunction is ", receivedPrintFunction);

  receivedPrintFunction(sum); //calling printSum
}

//printSum is callback function.
//Because it is a function sent as argument
function printSum(sumValue) {
  console.log("The value of sum is ", sumValue);
}

//sum is higher order function
sum(2, 3, printSum);
