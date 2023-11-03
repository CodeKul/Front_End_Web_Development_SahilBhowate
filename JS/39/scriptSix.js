//function's "this" reference. The word "reference" means where the 'this' keyword is pointing.
function message() {
  console.log(this === window); //true
}

message(); //Output: true
window.message(); //Output: true
