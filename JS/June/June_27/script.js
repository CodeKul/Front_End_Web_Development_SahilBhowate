console.log("call and apply methods.");

//call()
//apply()

//function is also an object in js.
//function object has two properties where call and apply methods are stored.

//How to use Call And Apply methods for invking the function indirectly.

const computerParts = {
  name: "Computer Parts",
  description: "What we need to assemble a gaming computer ?",
};

const mobilePhone = {
  name: "Mobile Phone",
  description: "What we need to build a smartphone?",
};

function assemble() {
  console.log(arguments);
  console.log("'this' is:", this);
}

//Invoking the function assemble using 'call' method.
assemble.call(computerParts, "Motherboard", "CPU", "RAM", "OS");

//Conclusion :-- The value of 'this' keyword inside the normal function declared using 'function' keyword is "Global window Object". To set the value of the 'this' keyword
//inside the function body according to out convinience ; we invoke the function through
//call() method or through apply() method.
