let myColor = ["Red", "Green", "White", "Black"];

let result = "";

let lastIndex = myColor.length - 1;

for (let index = 0; index < myColor.length; index++) {
  if (index != lastIndex) {
    result = result + myColor[index] + ",";
  } else {
    result = result + myColor[index];
  }
}

console.log("The result is ", result);
