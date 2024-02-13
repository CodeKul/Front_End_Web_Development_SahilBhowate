try {
  const x = 10;
  console.log("We are inside the try block");
  //this is not possible because variables declared using the const keyword cannot be modified. So , the statement x=11 is going to throw an error
  //   x = 11;

  console.log("Are we inside the try block ?");
} catch (error) {
  console.log("The error object caught in the catch block is ", error);
} finally {
  console.log("The finally block is going to be executed anyways.");
}
