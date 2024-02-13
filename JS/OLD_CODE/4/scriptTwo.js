var a = 5; //variable a has a global scope

globalThis.b = 5; //variable b's scope has been set globally.

//redeclaration and re-initialization of the variable using var keyword is allowed.
//But in case of let , const redeclaration and re-initialization of the variable is not allowed.
var c = 9;
var c = 19;

console.log("The value of c is ", c);
