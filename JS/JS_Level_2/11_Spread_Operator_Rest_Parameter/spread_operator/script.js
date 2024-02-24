let firstArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
let secondArrayOfNumbers = [9, 10];

let result = [];

// for (let index = 0; index < firstArrayOfNumbers.length; index++) {
//   result.push(firstArrayOfNumbers[index]);
// }

// for (let index = 0; index < secondArrayOfNumbers.length; index++) {
//   result.push(secondArrayOfNumbers[index]);
// }

result = [...firstArrayOfNumbers, ...secondArrayOfNumbers];

console.log("The result is ", result);
