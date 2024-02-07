//write a program to find the sum of numbers stored in the array

let arrayOfNumbers = [1, 2, 3, 5, 8];

let sumResult = 0;

for (let index = 0; index < arrayOfNumbers.length; index++) {
  console.log(arrayOfNumbers[index]);

  sumResult = sumResult + arrayOfNumbers[index];
}

console.log("The sumResult is ", sumResult);

//cycle 1 -- 0 + 1
//cycle 2 -- 0 + 1 + 2
//cycle 3 -- 0 + 1 + 2 + 3
//cycle 4 -- 0 + 1 + 2 + 3 + 5
//cycle 5 -- 0 + 1 + 2 + 3 + 5 + 8
