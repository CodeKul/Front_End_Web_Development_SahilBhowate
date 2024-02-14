//Below is the example of anonymous function
//whenever you do not write any name after the function keyword ;
//then that function would be considered as anonymous function.
let getData = function () {
  console.log("The name is Tushar.");
};

getData();

//setTimeout contains one anonymous function
setTimeout(function () {
  console.log("This is the body of anonymous function.");
}, 5000);
