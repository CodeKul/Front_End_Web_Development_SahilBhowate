//variables declared using the const keyword have the function scope -- means they are not accessible outside the function body.

function greeting() {
    const a = 99;
    console.log("Good Evening Everyone.");
    console.log("The value of a inside the greeting function is ",a);
  }
  
  //function call statement
  greeting();
  
  console.log("The value of a outside the greeting function is ",a);