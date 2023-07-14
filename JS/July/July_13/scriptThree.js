//[1]We have an array ; arr = [1,2,3,4,5,6,7]
//Create a new array named arrTwo ; such that
//arr array ka har ek element '1' se incremented hona chahiye.
//That is ; output should be arrTwo = [2,3,4,5,6,7,8]

//traditional solution using for of loop statement
// let arrTwo = [];
// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (let singleElement of arr) {
//   console.log(singleElement);
//   let requiredElement = singleElement + 1;
//   arrTwo.push(requiredElement);
// }

// console.log("The resultant array is ", arrTwo);

//solution using map method in js

//arr is the input array
// let arr = [1, 2, 3, 4, 5, 6, 7];

// const result = arr.map(outputProvider);

// function outputProvider(singleElement) {
//   console.log("The singleElement inside outputProvider is ", singleElement);

//   return singleElement + 1;
// }

// console.log("The result is ", result);

//solution using map method but alternative syntax
//arr is the input array
let arr = [1, 2, 3, 4, 5, 6, 7];

const result = arr.map((singleElement) => {
  console.log("The singleElement inside outputProvider is ", singleElement);

  return singleElement + 1;
});

console.log("The result is ", result);
