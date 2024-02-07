//here true stands for Light Mode
//And false stands for dark mode
//Light mode should only be possible ; if and only if both
//the switches have been selected as "Light Mode".

var switchOneVal = false;
var switchTwoVal = false;

var requiredMode = switchOneVal || switchTwoVal ? "Light Mode" : "Dark Mode";

console.log("The value of requiredMode is ", requiredMode);
