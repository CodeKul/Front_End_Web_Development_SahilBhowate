const mobilePhone = {
  name: "Mobile Phone",
  description: "What we need to build a smartphone?",
};

function assemble() {
  console.log(arguments);
  console.log("'this' is:", this);
}

//Invoking the function assemble using 'apply' method.
assemble.apply(mobilePhone, ["Display", "Battery", "Microphone", "Speaker"]);

//Conclusion :-- The value of 'this' keyword inside the normal function declared using 'function' keyword is "Global window Object". To set the value of the 'this' keyword
//inside the function body according to out convinience ; we invoke the function through
//call() method or through apply() method.
