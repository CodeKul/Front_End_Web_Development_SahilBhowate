//Arrow function with no parameters.
let receiveMessage = () => "No Parameters in this function";

//Arrow function with parameters.
let addFun = (a) => a + 100;

//invoking the arrow function addFun
let result = addFun(10);

console.log(result);

//invoking the arrow function receiveMessage
let storeResult = receiveMessage();
console.log(storeResult);
