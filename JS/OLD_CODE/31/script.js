//Find whether the element "7" exists in the array named arr
//let arr=[2,4,5,6,7,8,9];

let arr = [2, 4, 5, 6, 7, 8, 9];

//primaryKey is the variable containing the element ; that is to be found.
const primaryKey = 6;

let result = arr.find(discoverTheElement);

function discoverTheElement(singleElement) {
  console.log("Each of the singleElement is ", singleElement);

  return singleElement === primaryKey;
}

console.log("The result is ", result);

if (result) {
  console.log("The element was found in the array.");
} else {
  console.log("The element was not found in the array.");
}

//Note : -- If the search is successfull ; then a element is stored in the result.
//If the search is not successfull ; then "undefined" is stored in the result.
