//There are two ways to import a function in js file.
//importing default exports
//importing named exports

//There are two ways to export a function , variable from a .js file
//[1]named exports
//[2]default exports

//importing default exports
import findTheSum from "./calculateSum.js";

//the below import is not recognized ; because it is the second default export in calculateSum.js file
import findTheSumOfThreeNumbers from "./calculateSum.js";

//importing named exports
import { multiply, multiplyThreeNumbers } from "./multiplyNumbers.js";

console.log("The value of findTheSum inside script.js is ", findTheSum);

findTheSum(2, 3);

console.log("The value of multiply inside script.js file is ", multiply);

multiply(2, 5);

multiplyThreeNumbers(2, 2, 2);

//the below function call is not recognized ; because it is the second default export in calculateSum.js file
findTheSumOfThreeNumbers(2, 3, 4);
