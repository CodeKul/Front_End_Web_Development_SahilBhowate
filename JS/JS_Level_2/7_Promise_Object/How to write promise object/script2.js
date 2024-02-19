let x = 11;

function CheckThePromise() {
  x = x - 1;

  console.log("The current value of x is ", x);

  let promiseObj = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (x > 0) {
        resolve("Good x is greater than 0");
      } else if (x <= 0) {
        reject("Okay x is less than or equal to 0");
      }
    }, 5000);
  });

  //promise settlement
  promiseObj.then(promisefullFilled, promiseRejected);
}

//promise object settlement
function promisefullFilled(fullfillMessage) {
  console.log(fullfillMessage);
}

//promise object settlement
function promiseRejected(rejectionMessage) {
  console.log(rejectionMessage);
}

console.log("This is the last line of the program.");


