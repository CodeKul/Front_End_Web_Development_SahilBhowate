//strict moder inside a function
function myMessage() {
  "use strict";

  console.log(this === undefined);

  console.log("The value of this keyword is ", this);

  function innerMessage() {
    console.log(this === undefined);
  }

  innerMessage();
}

myMessage();
