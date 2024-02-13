//ideal way is
// [1]Variable Creation
// [2]Variable Initialization ---[storing a value in the given variable]

//Hoisting is behaving as if we have written the below program
var x; //[1]Variable Creation
console.log("The value of x is ", x);
x = 6; //[2]Variable Initialization ---[storing a value in the given variable]
console.log("The value of x is ", x);

//The output of the program is
// The value of x is  undefined
// The value of x is  6
