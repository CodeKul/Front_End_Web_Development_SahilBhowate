// The symbol '=>' is known as the arrow operator.
//Traditional Function
function addFun(a) {
  return a + 100;
}

//Arrow Function
let addFun = (a) => a + 100;

///the above arrow function in more detail would look as shown below.
//let addFun = (a) => {
// return a + 100;
// }

//Understanding arrow function's syntax
//[1] Parameters are on the left hand side of the arrow operator

//[2] If there is a single parameter like in the above example ; then we do not necessarily need to enclose that parameter in parentheses.
//Example :-- let addFun = a => a + 100;

//[3] If there are more than one parameters in the arrow function ; then we compulsorily
//need to give the parentheses for the parameters in the function body.

//[4] If there are no parameters to the arrow function then we need to give the empty parentheses in the function body.
//Example :-- let receiveMessage = () => "No Parameters in this function";

//[5] In the arrow function ; if there is a single statement and that statement itself is a
//return statement ; then at that time there is no need to write the "return keyword". And also there is no need to give the opening "curly bracket {" and "closing curly bracket }" to the function body.

//[6] The function body in the arrow functions starts from the right hand side of the arrow operator.

