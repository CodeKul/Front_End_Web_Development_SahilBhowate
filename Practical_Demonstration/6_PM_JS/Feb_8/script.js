let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 1, 10, 11, 2, 4, 4, 2];

let count = 0;

for (let index = 0; index < arrayOfNumbers.length; index++) {
  console.log("The array element is ", arrayOfNumbers[index]);

  if (arrayOfNumbers[index] === 2) {
    count = count + 1;
  }
}

console.log("The value of count is ", count);
