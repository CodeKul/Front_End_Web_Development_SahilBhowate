let firstArrayOfAlphabets = ["a", "b", "c", "d", "e"];

//making the deep copy
//deep copy
//In this case firstArrayOfAlphabets is not pointing at secondArrayOfAlphabets
let secondArrayOfAlphabets = structuredClone(firstArrayOfAlphabets); 

secondArrayOfAlphabets[1] = "z";

console.log("secondArrayOfAlphabets is ", secondArrayOfAlphabets);

console.log("firstArrayOfAlphabets is ", firstArrayOfAlphabets);
