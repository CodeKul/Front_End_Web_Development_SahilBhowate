//variables declared using the var keyword do not the have block scope

//variables declared using the let keyword have block scope

//variables declared using the const keyword have block scope

{
  var a = 3;
}

console.log("The value of a is ", a);

{
  let b = 7;
  console.log("The value of b is ", b);
}

{
  const c = 0;
}

console.log("The value of c is ", c);