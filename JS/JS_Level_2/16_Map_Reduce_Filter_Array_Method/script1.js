//write a program to multiply each number in the arrayOfNumbers by 2

let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let multipliedArrayOfNumbers = [];

for (let index = 0; index < arrayOfNumbers.length; index++) {
  let product = arrayOfNumbers[index] * 2;

  multipliedArrayOfNumbers.push(product);
}

console.log("The multipliedArrayOfNumbers is ", multipliedArrayOfNumbers);
