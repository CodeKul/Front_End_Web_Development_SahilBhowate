// [2] else-if statements
// also known as else-if ladder
let age = 67;

if (age <= 14) {
  console.log("You are in the children group.");
} else if (age >= 15 && age <= 24) {
  console.log("You are in the youth group.");
} else if (age >= 25 && age <= 64) {
  console.log("You are in the adults group.");
} else {
  console.log("You are in Senior group.");
}
