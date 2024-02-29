let inputString = "Web Development Tutorial";

let inputStringArray = inputString.split(" ");

let wordLengthArray = [];

console.log("The inputStringArray is ", inputStringArray);

for (let index = 0; index < inputStringArray.length; index++) {
  let wordLength = inputStringArray[index].length;

  wordLengthArray.push(wordLength);
}

console.log("The wordLengthArray is ", wordLengthArray);

function largestElement(arr) {
  return Math.max(...arr);
}

let requiredLargestElement = largestElement(wordLengthArray);

function checkGreatestLengthWord(singleMeasurementOfLength) {
  console.log("singleMeasurementOfLength is ", singleMeasurementOfLength);

  return requiredLargestElement === singleMeasurementOfLength;
}

let requiredIndex = wordLengthArray.findIndex(checkGreatestLengthWord);

console.log("The requiredIndex is ",requiredIndex);