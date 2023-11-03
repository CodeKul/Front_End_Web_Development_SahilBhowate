//Logical Operators -- Logical AND Operator in JS
let x = 5;
let y = 4;

//kya x  ; 6 se chota hai ? ha
//kya y  ; 1 se bada hai ? ha

//I need both above conditions to be true to take the next step in my program.
//Requirement :-- A set of conditions hai. Aur uss set main se sabhi conditions true hui toh
//mujhe program ki next line execute karni hai.
//--This is possible using the logical && operator.

//x<6   --true
//y>1   --true

//(x<6 && y>1)

if (x < 6 && y > 1) {
  console.log("You entered the if block");
} else {
  console.log("You entered the else block");
}

//kya x ; 6 se chota hai ? -- ha
//kya y ; 1 se chota hai ? -- nahi

//(x<6 && y<1)

if (x < 6 && y < 1) {
  console.log("You entered the if block");
} else {
  console.log("You entered the else block");
}

//Note :-- Refer the truth table for logical AND gate
