//map function
//write a program to multiply each number by 2
//We need an array as follows [4,6,8,10,12,14]
let arrayOfNumbers = [2, 3, 4, 5, 6, 7];

let multipliedArray = arrayOfNumbers.map(multiplyFunction);

function multiplyFunction(valueOfSingleNumber) {
  return valueOfSingleNumber * 2;
}

console.log("The multipliedArray is ", multipliedArray);
console.log("The arrayOfNumbers is ", arrayOfNumbers);
