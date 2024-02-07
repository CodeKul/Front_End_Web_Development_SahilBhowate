let stringValue = "level";

let lastIndex = stringValue.length - 1;

let reverseString = "";

for (let index = lastIndex; index >= 0; index--) {
  console.log(stringValue[index]);
  reverseString = reverseString + stringValue[index];
}

//emoh
console.log("The reveresed string is ", reverseString);

if(reverseString===stringValue){
    console.log("The string is a palindrome string");
}else{
    console.log("The string is not a palindrome string");

}