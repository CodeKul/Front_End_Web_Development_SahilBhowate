// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
// Click me to see the solution.

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

let inputString = "Robin Singh from USA.";

let string_parameterize = (inputStringValue) => {
  console.log("The inputStringValue is ", inputStringValue);

  let lowerCaseString = inputStringValue.toLowerCase();

  console.log("The lowerCaseString is ", lowerCaseString);

  let inputStringArray = lowerCaseString.split(" ");

  console.log("The inputStringArray is ", inputStringArray);

  let outputString = "";

  let lastElementIndex = inputStringArray.length - 1;

  for (let index = 0; index < inputStringArray.length; index++) {
    if (index !== lastElementIndex) {
      outputString = outputString + inputStringArray[index] + "-";
    } else if (index === lastElementIndex) {
      outputString = outputString + inputStringArray[index];
    }
  }

  console.log("The outputString is ", outputString);
};

string_parameterize(inputString);

//  ['robin', 'singh', 'from', 'usa.']
//robin-
//robin-singh-
//robin-singh-from-
//robin-singh-from-usa.-
