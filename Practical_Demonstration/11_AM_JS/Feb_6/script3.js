// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

//Step 1 : find the frequency of the element
//Step 2 : find the highest frequency among all the collected frequencies

//You have array of numbers.
//Find the highest number in that array.
//Example let numberArray = [4,6,7,8,9,22,11,15,10]

let arrayOfElements = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let frequencyArray = [];

function frequencyCalculator(keyElement, arrayOfElements) {
  let frequency = 0;

  for (let element of arrayOfElements) {
    if (keyElement === element) {
      frequency = frequency + 1;
    }
  }

  return frequency;
}

for (let singleElement of arrayOfElements) {
  let frequencyObject = {};

  let frequencyValue = frequencyCalculator(singleElement, arrayOfElements);

  frequencyObject.elementValue = singleElement;
  frequencyObject.frequencyValue = frequencyValue;

  frequencyArray.push(frequencyObject);
}

console.log("The frequencyArray is ", frequencyArray);
