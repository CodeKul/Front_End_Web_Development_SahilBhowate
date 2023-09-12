//Javascript closure
//Below two functions are nested functions.
function outerFun() {
  let x = 10;

  function innerFun() {
    let y = 20;
    console.log(x + y);
  }

  return innerFun;
}

let firstOuter = outerFun(); //first invocation of outerFun
let secondOuter = outerFun(); //second invocation of outerFun

console.log("The value of firstOuter is ", firstOuter);

console.log("The value of secondOuter is ", secondOuter);

console.log("typeof(firstOuter) is ", typeof firstOuter);

console.log("typeof(secondOuter) is ", typeof secondOuter);

firstOuter(); //first invocation of innerFun
firstOuter(); //second invocation of innerFun

//To see the Closure element in our console window ; we use the below statement.
console.dir(firstOuter);

//Conclusion :-- As soon as we reach the return statement of the outerFun() function ;
//the lifespan of the variable 'x' in outerFun() function is finished.

//We have inner function nested inside the outer function.
//Closure is an element which is accessible to inner function.
//What is the speciality of closure ? --- It is an element which preserves the values of the variables declared in the outer function's scope. The speciality is that , these values are preserved even if the execution of outer function has been finished and the life span of its scope variables have been finished.

//Note :-- As seen in the output of console.dir(firstOuter);
//The inner function has access to 3 scope chains
//[1]Access to variables declared in its own scope
//[2]Access to the outer function variables (this is because of closures)
//[3]Access to any variables declared in the global scope.
