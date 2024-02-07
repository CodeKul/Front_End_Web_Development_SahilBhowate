//print the elements in the array only upto the alphabet c
//Solution 1 : using break statement
//Solution 2 : without using break statement

let arrayOfAlphabets = ["a", "b", "c", "d", "e"];

//lastIndex = Total Elements in array - 1

//without using break
for (let index = 0; index < arrayOfAlphabets.length; index++) {
  console.log("You have entered the for loop.");

  if (arrayOfAlphabets[index] === "d" || arrayOfAlphabets[index] === "e") {
    break;
  } else {
    console.log(
      "The value of the element using for loop is ",
      arrayOfAlphabets[index]
    );
  }
}

console.log("Statement after the for loop.");
