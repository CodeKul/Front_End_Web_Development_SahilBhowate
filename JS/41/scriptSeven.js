// ? - Question Mark metacharacter
//matches zero or one occurence of the pattern left to it

const pattern = /ma?n/;
const inputStringOne = "mn";
const inputStringTwo = "man";
const inputStringThree = "maan";
const inputStringFour = "main";
const inputStringFive = "woman";

console.log(pattern.test(inputStringFive));
