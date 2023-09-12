//Creating the promise object using the "new" keyword and the "Promise" constructor.
const myNewPromise = new Promise((resolve, reject) => {
  let randomNumber = Math.random() * 10;

  console.log(
    "The randomNumber inside the myNewPromise object is ",
    randomNumber
  );

  //Below condition is checked to resolve the promise.
  if (randomNumber <= 6) {
    resolve("Hello, My promise was a success!");
  }

  reject("My Promise failed");
});

console.log("Line of code before the promise settlement block.");

//How to resolve/settle the javascript promise object ?
myNewPromise
  .then((fullfillmentResponse) => {
    console.log(
      "The response for fullfillment state of the promise object is ",
      fullfillmentResponse
    );
  })
  .catch((rejectionResponse) => {
    console.log(
      "The response for rejection state of the promise object is ",
      rejectionResponse
    );
  });

console.log("Line of code after the promise settlement block.");
