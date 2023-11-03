//getAsynchronousResponse is a asynchronous function.
function getAsynchronousResponse(callbackFunction) {
  //"callbackFunction" is a "callback function" ; which is executed after 2000 milliseconds.
  //The body of printTheMessage function is in "callbackFunction"
  setTimeout(callbackFunction, 5000);
}

function printTheMessage() {
  console.log("The console was printed");
}

//here printTheMessage is a callback function
getAsynchronousResponse(printTheMessage); //function calling statement

console.log("The last console of the program.");

//Note :-- setTimeout function brings a delay in the execution of code.
//It helps to bring the asynchronous behaviour.

//Aisa function jo dusre function ko as a argument / parameter accept karta hai ;
//uss function ko kehte hai higher order function.
//So , iska matlab hua ki getAsynchronousResponse , setTimeout are higher order functions.
//And printTheMessage is callback function -- kyuki "printTheMessage" was sent as a parameter/argument
