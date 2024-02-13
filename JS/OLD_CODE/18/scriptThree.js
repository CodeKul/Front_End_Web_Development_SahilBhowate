//How to exit a loop using break statement ?
//Search for the element 6 , and then break the loop.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of numbersArray) {
  if (element === 6) {
    console.log("We found the number six. Now let us get out of the loop.");
    break;
  } else {
    console.log(element);
  }
}
