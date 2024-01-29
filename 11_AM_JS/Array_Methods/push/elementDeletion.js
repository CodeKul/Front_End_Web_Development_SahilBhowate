//delete c and d using for loop

let arrayOfAlphabets = ["a", "b", "c", "d", "e", "f"];

let requiredResult = [];

for (let index = 0; index < arrayOfAlphabets.length; index++) {
  if (index !== 2 && index !== 3) {
    requiredResult.push(arrayOfAlphabets[index]);
  }
}

console.log("The value of requiredResult is ", requiredResult);
