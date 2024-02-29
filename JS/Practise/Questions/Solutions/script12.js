//find() function

//write a program to find the number greater than 3
let arrayOfNumbers = [1, 2, 3, 1, 5, 6];

let requiredNumber = arrayOfNumbers.find(checkCondition);

function checkCondition(valueOfEachNumber) {
  console.log("The valueOfEachNumber is ", valueOfEachNumber);

  return valueOfEachNumber > 3;
}

console.log("The requiredNumber is ", requiredNumber);
