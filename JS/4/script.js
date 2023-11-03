console.log("script .js file");
//Before ES6 ; we used var keyword to declare a variable.

//From the ES6 version ; let and const keywords were introduced to declare a variable.

//What is the meaning of "scope" ?
//Two kinds of scope in js
//global-scope
//function-scope
function printCountryName() {
  var countryName = "England";
}

//The variable countryName has function scope.
console.log("The name of the country is ", countryName);
