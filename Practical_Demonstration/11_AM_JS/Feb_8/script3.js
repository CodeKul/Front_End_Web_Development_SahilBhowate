//apply for loop on arrayOfNumbers such that
//result = [1,2,3,4,5,6,7,8,9,10]

//step 1 :- print the arrays stored inside arrayOfNumbers

let arrayOfNumbers = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

let result = [];

function generateResult(singleArray) {
  for (let j = 0; j < singleArray.length; j++) {
    console.log("The element is ", singleArray[j]);
    result.push(singleArray[j]);
  }
}

for (let index = 0; index < arrayOfNumbers.length; index++) {
  let singleArray = arrayOfNumbers[index];

  generateResult(singleArray);
}

console.log("The result is ", result);
