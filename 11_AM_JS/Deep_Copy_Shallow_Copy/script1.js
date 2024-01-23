let arrayOfAlphabets = ["a", "b", "c", "d"];

let secondArrayOfAlphabets = arrayOfAlphabets; //shallow copy

secondArrayOfAlphabets[1] = "z";

console.log("The value of secondArrayOfAlphabets is ", secondArrayOfAlphabets);

console.log("The value of arrayOfAlphabets is ", arrayOfAlphabets);