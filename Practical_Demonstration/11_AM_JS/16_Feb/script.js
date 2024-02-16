// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
// Click me to see the solution.

let inputString = "js string exercises";
let outputString = "";

for (let index = 0; index < inputString.length; index++) {
  let singleCharacter = inputString[index];

  if (index === 0) {
    singleCharacter = singleCharacter.toUpperCase();
  }

  outputString = outputString + singleCharacter;

  console.log("The singleCharacter is ", singleCharacter);
}

console.log("The outputString is ", outputString);

let inputStringTwo = "js string exercises";

let stringWithNoFirstCharacter = inputStringTwo.slice(1);

let firstCharacterOfString = inputStringTwo.charAt(0).toUpperCase();

let output = firstCharacterOfString + stringWithNoFirstCharacter;

console.log("output", output);
