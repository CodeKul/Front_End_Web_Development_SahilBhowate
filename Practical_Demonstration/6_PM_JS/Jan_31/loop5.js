//write a program to reverse the given string

let stringValue = "Home";

let lastIndex = stringValue.length - 1;

let reverseString = "";

//print each character of stringValue
for (let index = lastIndex; index >= 0; index--) {
  console.log(stringValue[index]);
  reverseString = reverseString + stringValue[index];
}

console.log("The reverseString is ",reverseString);