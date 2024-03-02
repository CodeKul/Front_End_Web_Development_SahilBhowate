//write a program to multiply each number in the arrayOfNumbers by 2
let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let multipliedArrayOfNumbers = arrayOfNumbers.map(arrayMultiplier);

function arrayMultiplier(singleNumber) {
  console.log("The singleNumber is ", singleNumber);
  return singleNumber * 2;
}

console.log("The multipliedArrayOfNumbers is ", multipliedArrayOfNumbers);
