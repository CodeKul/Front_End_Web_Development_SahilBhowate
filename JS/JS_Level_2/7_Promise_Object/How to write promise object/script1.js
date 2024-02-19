//step 1 //creating a promise object
// let promiseObj = new Promise();

//step 2
// let promiseObj = new Promise(function(){

// });

//step 3 -- resolve and reject are 2 built in functions to
//receive the resulting state of the promise.
//2 states are there --
// [1]pending
// [2]settlement --> reject , full fill
//resolve is a function for receiving the message of promise fulfillment
//reject is a function for receiving the message of promise rejection

// let promiseObj = new Promise(function(resolve,reject){

// });

//step 4
// let promiseObj = new Promise(function (resolve, reject) {
//   let x = 9;

//   if (x > 9) {
//     resolve("Good x is greater than 9");
//   } else if (x <= 9) {
//     reject("Okay x is less than or equal to 9");
//   }
// });

//step 5
function CheckThePromise() {
  let promiseObj = new Promise(function (resolve, reject) {
    let x = 9;

    if (x > 9) {
      resolve("Good x is greater than 9");
    } else if (x <= 9) {
      reject("Okay x is less than or equal to 9");
    }
  });
}

//step 6 promise settlement
// function CheckThePromise() {
//   let promiseObj = new Promise(function (resolve, reject) {
//     let x = 8;

//     if (x > 9) {
//       resolve("Good x is greater than 9");
//     } else if (x <= 9) {
//       reject("Okay x is less than or equal to 9");
//     }
//   });

//   //promise settlement
//   promiseObj.then(promisefullFilled, promiseRejected);
// }

//step 7
function CheckThePromise() {
  let promiseObj = new Promise(function (resolve, reject) {
    let x = 8;

    if (x > 9) {
      resolve("Good x is greater than 9");
    } else if (x <= 9) {
      reject(new Error("Okay x is less than or equal to 9"));
    }
  });

  //promise settlement--promise fullfillment
  promiseObj.then(promisefullFilled);

  //promise rejection
  promiseObj.catch(promiseRejected);
}

//promise object settlement
function promisefullFilled(fullfillMessage) {
  console.log(fullfillMessage);
}

//promise object settlement
function promiseRejected(rejectionMessage) {
  console.log(rejectionMessage);
}
