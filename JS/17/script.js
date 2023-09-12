//Iterable objects of javascript are as follows.
//Map
//Strings
//Sets
//Arrays

//for of statement

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

for (let element of numbersArray) {
  console.log("The single element is ", element);

  total = total + element;
}

console.log("The value of total is ", total);
