// Write a JavaScript program to compute the sum and product of an array of integers.

let arrayOfIntegers = [-5, -4, 1, 2, 3];

let sum = 0;
let product = 1;

for (let index = 0; index < arrayOfIntegers.length; index++) {
  sum = sum + arrayOfIntegers[index];
  product = product * arrayOfIntegers[index];
}

console.log("The value of sum is ", sum);
console.log("The product of sum is ", product);

