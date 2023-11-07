// CASE 1 : -- The assumption is the number of elements inside arrVal is less than or
//equal to the value of variable "numberOfElements".
//Note : -- If there are 'n' elements in the array ; then the index of that array would
//vary from 0 to n-1

function first(arrVal, numberOfElements) {
  console.log(
    "The arrVal , numberOfElements inside the first function is ",
    arrVal,
    numberOfElements
  );

  let resultArr = [];

  for (let index = 0; index < numberOfElements; index++) {
    console.log("The value of the index is ", index);
    resultArr.push(arrVal[index]);
  }

  return resultArr;
}

let requiredElements = first([1, 2, 4], 5);

console.log("The requiredElements are ", requiredElements);
