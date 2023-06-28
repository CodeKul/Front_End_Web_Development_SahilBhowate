//How to provide default function parameters ?
//function fnName(param1 = defaultValue1 , param2 = defaultValue2 ......,paramN = defaultValue3)
// {
// ......
// }

let a = 5;
let b = 7;
let c = 8;

function findMax(x, z = 1) {
  if (x > z) {
    return x;
  } else {
    //return z since z is bigger - [as we enetered the else block]
    return z;
  }
}

//the second argument wont go as undefined because we have declared the default parameter in the function body.
let finalResult = findMax(a);

console.log("The finalResult is ", finalResult);
