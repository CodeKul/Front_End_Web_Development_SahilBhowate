// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

////////////////////////////////////////////////////////////////
function capitalize_Words(inputSentence) {
  let wordsArray = inputSentence.split(" ");
  let outputSentence = "";

  console.log("The wordsArray is ", wordsArray);

  for (let index = 0; index < wordsArray.length; index++) {
    let singleWord = wordsArray[index];
    let requiredWord = capitalizeSingleWord(singleWord);

    console.log("The requiredWord is ", requiredWord);

    outputSentence = outputSentence + " " + requiredWord;
  }

  outputSentence = outputSentence.trim();

  console.log("The outputSentence is ", outputSentence);
}

function capitalizeSingleWord(singleWord) {
  let stringWithNoFirstCharacter = singleWord.slice(1);

  let firstCharacterOfString = singleWord.charAt(0).toUpperCase();

  let output = firstCharacterOfString + stringWithNoFirstCharacter;

  return output;
}

let input =
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.";

capitalize_Words(input);

