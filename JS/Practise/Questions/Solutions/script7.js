// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'

//Write a program to find the greatest number in the array.
let arrayOfNumbers = [7, 8, 4, 77, 5, 2, 1];

function largestElement(arr) {
  return Math.max(...arr);
}

let requiredElement = largestElement(arrayOfNumbers);

console.log("The requiredElement is ", requiredElement);
