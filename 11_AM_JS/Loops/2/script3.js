//print all the elements of the array less than 6

let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using break statement

for (let index = 0; index < arrayA.length; index++) {
  if (arrayA[index] > 5) {
    break;
  }

  console.log("The array element is ", arrayA[index]);
}

console.log("We just came out of the loop.");
