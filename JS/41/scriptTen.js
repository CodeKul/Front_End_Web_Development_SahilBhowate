//Group metacharacter ()

const pattern = /(a|b|c)xz/;
const inputStringOne = "ab";
const inputStringTwo = "xz";
const inputStringThree = "abxz";
const inputStringFour = "axz";
const inputStringFive = "cabxz";

console.log(pattern.test(inputStringFive));
