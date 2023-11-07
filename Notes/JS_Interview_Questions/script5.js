// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
let myColor = ["Red", "Green", "White", "Black"];

let myColorText = myColor.toString();

let myColorTextWithPlusSign = myColorText.replaceAll(",", "+");

console.log("The value of myColorText is ", myColorText);

console.log(
  "The value of myColorTextWithPlusSign is ",
  myColorTextWithPlusSign
);
