//usage of the metacharacter ^
// ^ represents the totally opposite condition.
// [^abc] means any character except a or b or c
// It means do not allow the following a, b, c, or any combination/permutation of abc
const patternOne = /[^abc]/;

const inputStringOne = "sddsdscba";

console.log(patternOne.test(inputStringOne));

//It means any non-digit character
//It means do not allow the digits from 0 to 9
const patternTwo = /[^0-9]/;

const inputStringTwo = "cdss4fdfd";

console.log(patternTwo.test(inputStringTwo));

//It means the inputString should start with the character a
const patternThree = /^a/;

const inputStringThree = "dlkw";

console.log(patternThree.test(inputStringThree));

//It means the inputString should start with the character ab
const patternFour = /^ab/;

const inputStringFour = "abfdfdklk323";

console.log(patternFour.test(inputStringFour));
