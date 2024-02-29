//find the element in the arrayOfNumbers which is greater than 8

let arrayOfNumbers = [1, 5, 7, 8, 1, 10];

let requiredElement = arrayOfNumbers.findIndex(checkTheCondition);

function checkTheCondition(singleNumber) {
  return singleNumber > 8;
}

console.log("The requiredElement is ", requiredElement);
