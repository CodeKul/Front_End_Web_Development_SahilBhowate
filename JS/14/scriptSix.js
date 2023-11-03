//How to convert a string to a number in js ?
//How to convert a number to string in js ?
//The above two processess are also known as casting

let age = "25";
let convertAge = Number(age);

let year = 2022;

let yearBorn = year - convertAge;

console.log(yearBorn);

//parseFloat() , parseInt() --- these two functions also do the same thing as the function Number().

let numberOne = "3.3";
let numberOneConverted = parseFloat(numberOne);
console.log(numberOneConverted);
console.log(typeof numberOneConverted);

let numberTwo = "3.3";
let numberTwoConverted = Number(numberTwo);
console.log(numberTwoConverted);
console.log(typeof numberTwoConverted);

let numberThreeConverted = parseInt(numberTwo);
console.log(numberThreeConverted);
console.log(typeof numberThreeConverted);
