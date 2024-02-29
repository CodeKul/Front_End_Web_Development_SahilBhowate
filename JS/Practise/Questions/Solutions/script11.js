// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

//initiate count = 0
//apply loop on the string
//if the vowel is found in the iteration ; then increment count
//if(singleElement === "a" || )

// Example string : 'The quick brown fox'

let countOfVowels = 0;

let inputString = "The quick brown fox";

for (let index = 0; index < inputString.length; index++) {
  if (
    inputString[index] === "a" ||
    inputString[index] === "e" ||
    inputString[index] === "i" ||
    inputString[index] === "o" ||
    inputString[index] === "u"
  ) {
    countOfVowels++;
  }
}

console.log("The countOfVowels is ", countOfVowels);
