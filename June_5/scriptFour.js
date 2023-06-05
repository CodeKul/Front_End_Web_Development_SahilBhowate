function second() {
  let x = 1; //declare and initialize variable x to 1

  {
    let x = 3; //this is a different variable. Because of the block scope
    console.log("The value of x is ", x); //x is 3
  }

  console.log("The value of x is ", x); //x is 1
}

//calling the function
second();
