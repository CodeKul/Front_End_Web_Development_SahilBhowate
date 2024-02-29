//use findIndex() function to find the index of number less than 99

let arrayOfNumbers = [101, 102, 103, 104, 100, 200];

function checkValueOfTheNumber(singleNumber) {
  console.log("The value of each single number is ", singleNumber);

  return singleNumber < 99;
}

let requiredIndex = arrayOfNumbers.findIndex(checkValueOfTheNumber);

console.log("The requiredIndex is ",requiredIndex);