let arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let singleElement of arrayOfNumbers) {
  console.log("You have entered the loop.");
  sum = sum + singleElement;
}

console.log("The sum is ", sum);

//6 cycles
//1st cycle --- sum = 0 + 1
//2nd cycle --- sum = 0 + 1 + 2
//3rd cycle --- sum = 0 + 1 + 2 + 3
//4th cycle --- sum = 0 + 1 + 2 + 3 + 4
//5th cycle --- sum = 0 + 1 + 2 + 3 + 4 + 5
//6th cycle --- sum = 0 + 1 + 2 + 3 + 4 + 5 + 6
