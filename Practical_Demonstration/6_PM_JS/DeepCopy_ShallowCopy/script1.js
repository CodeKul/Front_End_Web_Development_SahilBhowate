let firstArrayOfAlphabets = ["a", "b", "c", "d", "e"];

//shallow copy
//By the below line of code ; what happens is that the reference of
//firstArrayOfAlphabets is passed to the variable secondArrayOfAlphabets
let secondArrayOfAlphabets = firstArrayOfAlphabets;

secondArrayOfAlphabets[1] = "z";

console.log("The value of secondArrayOfAlphabets is ", secondArrayOfAlphabets);

console.log("The value of firstArrayOfAlphabets is ", firstArrayOfAlphabets);
