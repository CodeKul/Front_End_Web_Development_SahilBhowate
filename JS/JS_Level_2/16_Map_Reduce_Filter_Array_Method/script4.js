//write a program to select only those elements in the arrayOfNumbers that are greater than 4.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let requiredArray = [];

for (let index = 0; index < arrayOfNumbers.length; index++) {
  if (arrayOfNumbers[index] > 4) {
    requiredArray.push(arrayOfNumbers[index]);
  }
}

console.log("The requiredArray is ", requiredArray);
