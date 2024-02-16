let inputString =
  "October arrived, spreading a damp chill over the grounds and into the castle.Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students.Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward.Ginny Weasley, who had been looking pale, was bullied into taking some by Percy.The steam pouring from under her vivid hair gave the impression that her whole head was on fire.";

inputString = inputString.toLowerCase();

console.log("The inputString is ", inputString);

let sentenceArray = inputString.split(".");

let outputSentence = "";

function capitalizeSingleWord(singleSentence) {
  let stringWithNoFirstCharacter = singleSentence.slice(1);

  let firstCharacterOfSentence = singleSentence.charAt(0).toUpperCase();

  let output = firstCharacterOfSentence + stringWithNoFirstCharacter;

  return output;
}

for (let index = 0; index < sentenceArray.length; index++) {
  let singleSentence = sentenceArray[index];

  let requiredSentence = capitalizeSingleWord(singleSentence);

  outputSentence = outputSentence + requiredSentence + ".";
}

console.log("The outputSentence is ",outputSentence);