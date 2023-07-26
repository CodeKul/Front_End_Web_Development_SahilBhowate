// The Metacharacters for the regular expressions are [] . ^ + ? { } ( ) \ |

// [] - Square brackets
const pattern = /[abc]/;
const inputString = "bdksldsld";

//The result is true if at least one or more than one character of the pattern
//is existing in the inputString.
console.log(pattern.test(inputString));

const patternTwo = /[a - e]/; // this is same as [abcde]
const patternThree = /[1-4]/; //this is same as [1234]

const inputStringTwo = "exyz";
const inputStringThree = "9";

console.log(patternTwo.test(inputStringTwo));
console.log(patternThree.test(inputStringThree));
