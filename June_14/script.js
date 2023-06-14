//What is multi-dimensional array ?
//It is a collection of arrays.

console.log("This is script.js file.");

//Multidimensional Arrays
let myRoutine = [
  ["Work", 7.6], //["RoutineName",NumberOfHours]
  ["Eat", 3],
  ["Commute", 1],
  ["Family Time", 4.4],
  ["Watch Movies", 1],
  ["Sleep", 7],
];

console.log("The multi-dimensional array is ", myRoutine);
let routine = myRoutine[5];
let sleepHours = routine[1]; //7

console.log("The sleepHours are ", sleepHours);
console.log(
  "The value of sleepHours through myRoutine[5][1] is ",
  myRoutine[5][1]
);
