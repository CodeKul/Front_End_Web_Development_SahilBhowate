//1 * 7
//1 * 7 * 6
//1 * 7 * 6 * 5
//1 * 7 * 6 * 5 * 4
//1 * 7 * 6 * 5 * 4 * 3
//1 * 7 * 6 * 5 * 4 * 3 * 2
//1 * 7 * 6 * 5 * 4 * 3 * 2 * 1

// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1

function factorialCalculator(inputNumber) {
  let factorialValue = 1;

  for (let initialValue = inputNumber; initialValue >= 1; initialValue--) {
    console.log("The initialValue is ", initialValue);

    factorialValue = factorialValue * initialValue;
  }

  return factorialValue;
}

let factorialProduct = factorialCalculator(7);

console.log("The factorialProduct is ", factorialProduct);
