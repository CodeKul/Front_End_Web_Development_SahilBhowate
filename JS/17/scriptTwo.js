//Print each element from the string array ?

let stringArray = ["Hi", "There", "How", "Are", "You", "?"];

let wholeSentence = "";

for (let singleWord of stringArray) {
  wholeSentence = wholeSentence + singleWord;
}

console.log("The wholeSentence is ", wholeSentence);
