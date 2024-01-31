// Write a JavaScript function to get the last 'n' elements of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

let arrayOfNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//last 2 elements means index range is from 12 to 11  diiference 1
//the elements are 13 ,14

//last 3 elements means index range is from 12 to 10 diiference 2
//the elements are 12 , 13, 14

//last 4 elements means index range is from 12 to 9 difference 3
//the elements are 11 ,12,13,14

//observation is
//the difference between initial index and last index
//is equal to
//number of elements to be returned - 1

// l - i = n - 1
// l-n+1 = i;
// i = l-n+1

function getLastNElementsOfArray(n) {
  let result = [];

  let lastIndex = arrayOfNumbers.length - 1;

  let initialIndex = lastIndex - n + 1;

  for (let index = lastIndex; index >= initialIndex; index--) {
    // console.log(arrayOfNumbers[index]);
    result.push(arrayOfNumbers[index]);
  }

  return result;
}

let lastNElementsInReverse = getLastNElementsOfArray(5);

console.log("The lastNElementsInReverse are ", lastNElementsInReverse);

lastIndexOfArray=lastNElementsInReverse.length-1;

let requiredResult=[];

for(let index=lastIndexOfArray;index>=0;index--){

    requiredResult.push(lastNElementsInReverse[index]);

}

console.log("The requiredResult is ",requiredResult);