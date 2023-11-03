//Creating Symbol
let x = Symbol("Name");

console.log(typeof x);

//How to acccess Symbol Description ?
console.log(x.description);

//Add Symbol as an Object Key

let id = Symbol("id");

let person = {
  name: "Rakesh",

  //Adding Symbol as a key
  //To add the symbol as a key ; make use of 'square brackets'
  [id]: 123,
};

console.log("The person object is ", person);
