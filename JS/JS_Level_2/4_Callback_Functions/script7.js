//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function simpleHigherOrder(receivedCallback) {
  // receivedCallback();
  setTimeout(receivedCallback, 5000);
}

function simpleCallback() {
  console.log("This was executed after a delay of 5 seconds.");
}

simpleHigherOrder(simpleCallback); //function call
