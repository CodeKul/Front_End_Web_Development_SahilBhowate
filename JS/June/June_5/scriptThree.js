//let vs var variable declaration

//function body of the function named "first"
function first() {
  var x = 1; //declare and initialize variable x to 1

  {
    var x = 2; //assign the value 2 to the variable x

    console.log("The value of x is ", x); //x is 2
  }

  console.log("The value of x is ", x); //x is 2
}

first(); //calling the function first
