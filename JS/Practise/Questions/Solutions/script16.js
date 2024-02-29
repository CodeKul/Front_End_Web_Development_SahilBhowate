//write a function to delete 8 from arrayOfNumbers
//output --- [10,1,2,3,9,2,3,14,15]
let arrayOfNumbers = [10, 1, 2, 3, 8, 9, 2, 3, 14, 15];

let requiredArray = arrayOfNumbers.filter(deleteElement);

function deleteElement(singleNumber) {
  return singleNumber !== 8;
}

console.log("The requiredArray is ",requiredArray);