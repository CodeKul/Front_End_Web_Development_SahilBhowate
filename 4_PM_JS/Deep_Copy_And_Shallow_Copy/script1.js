let firstArrayOfAlphabets = ["a", "b", "c", "d", "e"];

//passing the reference of firstArrayOfAlphabets to the secondArrayOfAlphabets
let secondArrayOfAlphabets = firstArrayOfAlphabets; //shallow copy

secondArrayOfAlphabets[1] = "z";

console.log("secondArrayOfAlphabets is ", secondArrayOfAlphabets);

console.log("firstArrayOfAlphabets is ", firstArrayOfAlphabets);
