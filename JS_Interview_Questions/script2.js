let inputArr = [1, 2, 3, 4, 6];

let clonedArr = makeCloneOfTheArray(inputArr);

function makeCloneOfTheArray(inputValue) {
  let clonedResult = structuredClone(inputValue);

  return clonedResult;
}

clonedArr[0] = 29;

console.log("Value of clonedArr and inputArr is ", clonedArr, inputArr);

//shallow clone / shallow copy
//deep clone / deep copy
