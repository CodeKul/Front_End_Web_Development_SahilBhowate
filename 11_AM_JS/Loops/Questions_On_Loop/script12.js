// Write a JavaScript function to get the first 'n' elements of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

let arrayOfNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//first 2 elements means index range is from 0 to < 2
//2,3

//first 3 elements means index range is from 0 to < 3
//2 ,3, 4

//first 4 elements means index range is from 0 to < 4
//2 , 3 , 4 , 5

function sendFirstNElementsOfArray(n) {
  let result = [];

  for (let index = 0; index < n; index++) {
    console.log(arrayOfNumbers[index]);
    result.push(arrayOfNumbers[index]);
  }

  return result;
}

let firstNElements = sendFirstNElementsOfArray(4);

console.log("The firstNElements are ", firstNElements);
