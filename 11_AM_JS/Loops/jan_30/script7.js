let inputNumber = 7;

// 1 , 2 , 3 ,4 ,5 ,6,7

let factorialProduct = 1;

for (let singleElement = 1; singleElement <= inputNumber; singleElement++) {
  console.log("The element of the factorial is ", singleElement);

  factorialProduct = factorialProduct * singleElement;
}

console.log("The factorialProduct is ",factorialProduct);
