// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

let inputString = "025468";

let requiredStringArr = [];

//this for loop would give us the index positions of all the even numbers
for (let index = 0; index < inputString.length; index++) {
  let lastIndex = inputString.length - 1;
  let currentNumberVal = null;
  let nextNumberVal = null;

  currentNumberVal = parseInt(inputString[index]);

  if (index !== lastIndex) {
    nextNumberVal = parseInt(inputString[index + 1]);
  }

  if (currentNumberVal !== null && nextNumberVal !== null) {
    if (currentNumberVal % 2 === 0 && nextNumberVal % 2 === 0) {
      requiredStringArr.push(String(currentNumberVal));
      requiredStringArr.push("-");
      requiredStringArr.push(String(nextNumberVal));
    }
  }
}

console.log("The requiredStringArr is ", requiredStringArr);
