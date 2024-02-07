//Replace c with z using for loop
//Replace f with x using for loop

let arrayOfAlphabets = ["a", "b", "c", "d", "e", "f"];

for (let index in arrayOfAlphabets) {
  if (arrayOfAlphabets[index] === "f") {
    arrayOfAlphabets[index] = "z";
  } 
  else if (arrayOfAlphabets[index] === "c") {
    arrayOfAlphabets[index] = "x";
  }
}

console.log("The value of arrayOfAlphabets is ", arrayOfAlphabets);
