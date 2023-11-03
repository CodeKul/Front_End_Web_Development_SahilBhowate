//using the variable before its creation
console.log("The value of variable a is ", a); //currently a is in temporal dead zone
//Uncaught ReferenceError: Cannot access 'a' before initialization

let a; //variable creation line

//It is not throwing the error such as
// ReferenceError: a is not defined
//It means that ; the interpreter knows about the existence of the variable a.

//Note:-- The temporal dead zone for the variable a is from line number 1 to line number 4
//In TDZ ; the variable existence is known by the interpreter ; but still it cannot be accessed or used.

//The interpreter knows about the existence of the variable a ; before the line of variable creation ; --- so the conclusion is that the variables declared with let keyword are hoisted.
