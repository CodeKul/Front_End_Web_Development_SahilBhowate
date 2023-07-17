//write a function to find the sum of 20 numbers
//receving the arguments using the rest parameter
function calculateSum(...args) {
  console.log("The value of args inside calculateSum function is ", args);
}

calculateSum(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
);

//Note : Using rest parameter we pass a collection of values to any given function.
//And that collection is received as an array in the function body.
//So , we are packing the elements into the array using rest parameter.

//Note : Using the spread operator  , we "spread" the elements that are already packed in the array.
