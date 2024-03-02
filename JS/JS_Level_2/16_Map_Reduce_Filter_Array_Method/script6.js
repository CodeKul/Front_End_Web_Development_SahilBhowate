//write a program to select only those elements in the arrayOfNumbers that are greater than 4.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let filteredArrayOfNumbers = arrayOfNumbers.filter(
  (singleNumber) => singleNumber > 4
);

console.log("The filteredArrayOfNumbers is ", filteredArrayOfNumbers);
