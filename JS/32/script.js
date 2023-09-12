//Below question could be solved using filter() method.
//let arr = [1,2,3,4,5,6,7];
//We need an array called outputArray where the element '5' does not exists.
//Delete the element '5' from the array arr.
//So , we need outputArray = [1,2,3,4,6,7]

//traditional solution
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let outputArray = [];

// for (let singleElement of arr) {
//   if (singleElement !== 5) {
//     outputArray.push(singleElement);
//   }
// }

// console.log("The outputArray is ", outputArray);

//-------------------------------------------------------------------------------------------

//solution through filter method
// let arr = [1, 2, 3, 4, 5, 6, 7];

// let outputArray = arr.filter(filterProcess);

// function filterProcess(singleElement) {
//   console.log(
//     "The singleElement inside filterProcess function is ",
//     singleElement
//   );
//   return singleElement !== 5;
// }

// console.log("The outputArray is ", outputArray);

//------------------------------------------------------------------------------------------
//solution through filter method (alternative syntax)
let arr = [1, 2, 3, 4, 5, 6, 7];

let outputArray = arr.filter((singleElement) => {
  console.log(
    "The singleElement inside filterProcess function is ",
    singleElement
  );

  return singleElement !== 5;
});

console.log("The outputArray is ", outputArray);
