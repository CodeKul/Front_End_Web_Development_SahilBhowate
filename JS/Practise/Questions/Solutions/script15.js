let arrayOfNumbers = [10, 1, 2, 3, 8, 9, 2, 3, 14, 15];
//We need an array which contains elements greater than 8
//[10,9,14,15]

let filteredArray = arrayOfNumbers.filter(checkCondition);

function checkCondition(singleNumber) {
  console.log("The singleNumber is ", singleNumber);
  return singleNumber > 8;
}

console.log("The filteredArray is ", filteredArray);
