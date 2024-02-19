///////////////////////////////////////////////////////////////
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

let iceCreamConeIngrdients = {
  cream: 0,
  cone: 0,
};

//asynchronous operation to make the ice-cream
function makeIceCream() {
  let promiseObj = new Promise(function (resolve, reject) {
    let currentCreamQuantity = iceCreamConeIngrdients.cream;

    let currentConeQuantity = iceCreamConeIngrdients.cone;

    if (currentCreamQuantity > 0 && currentConeQuantity > 0) {
      resolve("The ice-cream is ready");
    } else if (currentCreamQuantity <= 0 && currentConeQuantity <= 0) {
      reject(new Error("The ingreditents are finished."));
    }
  });

  console.log("The promiseObj is ", promiseObj);

  return promiseObj;
}

//event listener function
function orderIceCreamCone() {
  console.log("The order for ice cream cone has been recieved");

  let iceCreamPromiseObject = makeIceCream();

  //https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/
  //or you can use then block and catch block
  iceCreamPromiseObject.then(iceCreamReady, iceCreamNotReady);
}

function iceCreamReady(readyMessage) {
  console.log(readyMessage);
}

function iceCreamNotReady(iceCreamNotReadyMessage) {
  console.error(iceCreamNotReadyMessage);
}
