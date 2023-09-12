//function using the strict mode
"use strict";
function newMessage() {
  console.log("The value of this keyword is ", this);

  console.log(this === undefined);
}

newMessage();
