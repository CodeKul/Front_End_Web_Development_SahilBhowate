//Replace c and f with z using for loop

let arrayOfAlphabets = ["a", "b", "c", "d", "e", "f"];

for (let index in arrayOfAlphabets) {
  if (arrayOfAlphabets[index] === "c" || arrayOfAlphabets[index] === "f") {
    arrayOfAlphabets[index] = "z";
  }
}

console.log("The value of arrayOfAlphabets is ", arrayOfAlphabets);
