console.log("The value of x is ", x); //using the variable before its creation

x = 6; //variable initialization

console.log("The value of x is ", x); //using the variable before its creation

var x; //variable x has been created / declared

//The output of the program is
// The value of x is  undefined
// The value of x is  6

//Because of hoisting there is no error.
//What kind of error it is not throwing ?
//--Javascript interpreter is not telling that the variable x does not exist
//It is not throwing the below error
////ReferenceError: x is not defined
