//Symbols -- They are the features of ES6

//How to create Symbols ?
//Symbol() is the name of the function.
let mySymbol = Symbol("name");
let mySymbolTwo = Symbol("name");

//We cannot use new keyword while creating a symbol data type.
//Because it throws the below error
//riptTwo.js:11 Uncaught TypeError: Symbol is not a constructor
// at new Symbol (<anonymous>)
// let mySymbolThree = new Symbol("name");

console.log("mySymbol is ", mySymbol);
console.log("mySymbolTwo is ", mySymbolTwo);

console.log(
  "The value of mySymbol == mySymbolTwo is ",
  mySymbol == mySymbolTwo
);

console.log(
  "The value of mySymbol === mySymbolTwo is ",
  mySymbol === mySymbolTwo
);
