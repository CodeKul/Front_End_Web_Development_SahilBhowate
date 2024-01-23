let arrayOfAlphabets = ["a", "b", "c", "d"];

//structuredClone()
let secondArrayOfAlphabets = structuredClone(arrayOfAlphabets); //deep copy

secondArrayOfAlphabets[1] = "z";

console.log("The value of secondArrayOfAlphabets is ", secondArrayOfAlphabets);

console.log("The value of arrayOfAlphabets is ", arrayOfAlphabets);