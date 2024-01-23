//conditionOne is a is greater or equal to 10
//conditionTwo is a is less than or equal to 20

var a=11;

var conditionOne = a >= 10 ? true : false;

var conditionTwo = a <= 20 ? true : false;

var finalResult =
  conditionOne && conditionTwo
    ? "Required conditions are satisfied"
    : "condition are not satisfied";

console.log("The value of finalResult&&b is ", finalResult);
