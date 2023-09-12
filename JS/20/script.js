//It is important to write the function expression inside the vriable declared using the const keyword.
//Why ?
//Because the function body should not be mutable (modified)

//How to invoke Function Expression ?

const greeting = function (name, lastName) {
  return `Nice to see you again ${name} ${lastName}`;
};

//invoke function expression
let theMessage = greeting("Sherlock", "Holmes");

console.log(theMessage);
