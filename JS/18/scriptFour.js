//Continue Statement

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of numbersArray) {
  if (element === 6) {
    console.log("We found the number six. Now let us get out of the loop.");

    continue; //continue the loop

    console.log("This output will not be shown");
  } else {
    console.log(element);
  }
}

//[1] The continue statement brought us out of the loop.
//But the remaining cycles or repetitions of the loop continued to execute.
//[2] Statements after the continue statement in that particular block do not execute.
//[3] The continue statement skips one of the cycle of iteration (or loop)

//1
//2
//3
//4
//5
