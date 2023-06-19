//Operator Precedence
//Meaning of "Order Of Evaluation"
//"Order Of Evaluation" of "=" operator is Right to Left
let a = 3 + 4;

let b = 5 + 2 * 3;

let c = (5 + 2) * 3;

console.log("The value of b is ", b);

console.log("The value of c is ", c);

//Evaluating the expression 5 + 2 * 3 by not taking the help of precedence table
// 5+2 = 7
// 7 * 3 = 21 --- incorrect answer

//Evaluating the expression 5 + 2 * 3 with the help of precedence table
// 2*3 = 6
// 6+5 = 11 --- correct answer

// How to change the order of operator precedence ?
// Note :- Parenthesis has the higher precedence than the rest of the operators in the table.
// Give the brackets at appropriate places.
// (5+2) * 3 = 7 * 3 = 21
