let arrOne = [1, 3, 4, 5, 6, 7];

//shallow copy
// let arrTwo = arrOne;

//making deep copy of arrOne using spread operator
let arrTwo = [...arrOne];

//making deep copy of arrOne using structuredClone method.
// let arrTwo = structuredClone(arrOne);

arrTwo[0] = 1000;

console.log("The value of arrOne and arrTwo is ", arrOne, arrTwo);
