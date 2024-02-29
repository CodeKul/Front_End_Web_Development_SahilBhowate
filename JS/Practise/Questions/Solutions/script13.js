//findIndex() function

//write a program to find the index of the number greater than 3
let arrayOfNumbers = [1, 2, 3, 1, 5, 6];

let requiredIndex = arrayOfNumbers.findIndex(checkCondition);

function checkCondition(valueOfEachNumber) {
  return valueOfEachNumber > 3;
}

console.log("The required index is ", requiredIndex);
