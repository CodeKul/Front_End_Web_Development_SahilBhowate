//What is a regular expression ?
//It is a pattern.

let inputString = "fsdhfdshfkdsjfhjdsfhjdsfhsdjfjskdjskdjsabc2323232323";

//identify whether there is a occurence of the symbol "#" in the inputString.

let outputOfSearch = false;

for (let singleCharacter of inputString) {
  if (singleCharacter === "#") {
    outputOfSearch = true;
    break;
  }
}

if (outputOfSearch === true) {
  console.log("The # symbol was found in the inputString.");
} else if (outputOfSearch === false) {
  console.log("The # symbol was not found in the inputString.");
}
