//Spread operator
//If you have one "A" array of 200 elements and another array "B" of 100 elements.
//Create one array "C" having the elements of array "A" and the elements of array "B" ?
// This is possible through spread operator.

let A = [1, 2, 3, 46];
let B = [1, 7, 6, 5, 4, 6, 7, 8, 9, 2];

let C = [...A];

C = [...A, ...B];

console.log("The value of C is ", C);
