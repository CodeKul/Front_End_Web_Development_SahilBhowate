//spread operator is used to make the deep copy of the array
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = [...arrayOfNumbers];

result[0] = "z";

console.log("The result is ", result);
console.log("The arrayOfNumbers is ", arrayOfNumbers);
