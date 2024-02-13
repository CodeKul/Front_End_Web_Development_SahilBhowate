//How are strings different from Symbols
let mySymbol = Symbol("name");

//How to convert a symbol to string using the toString method ?
let convertSym = mySymbol.toString();
alert(convertSym);

//How to check the data type of the variable in javascript ?
console.log("typeof(convertSym)", typeof convertSym);
console.log("typeof(mySymbol)", typeof mySymbol);

//symbol is a primitive datatype --- introduced in ES6