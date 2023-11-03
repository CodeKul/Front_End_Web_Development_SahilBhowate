console.log("The program for promise object.");
//The promise object has the following states
//[1] Pending
//[2] Settled/Resolved ---> Two possibilities --- Fulfilled , Rejected

function randomNumberGenerator() {
  console.log("The randomNumberGenerator function has been called");

  let randomNumber = Math.random();

  console.log("The randomNumber is ", randomNumber * 10);
}
