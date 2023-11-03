//Below question could be solved using the spread operator in js.
//We have an array called arr = [1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77];
//We need to copy each and every element of the array arr into the array called
//"outputArray".
//That is , we need outputArray = [1,2,3,4,5,6,7,8,9,10,11,22,33,44,55,66,77];

console.log("This is scriptTwo.js file");

//traditional solution
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77];

// let outputArray = [];

// //for of statement to push each element of arr into the array outputArray
// for (let singleElement of arr) {
//   outputArray.push(singleElement);
// }

// console.log("The outputArray is ", outputArray);

//solution using spread operator
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77];

let outputArray = [...arr];

console.log("The value of outputArray is ", outputArray);
