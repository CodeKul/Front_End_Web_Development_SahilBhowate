function greeting() {
  console.log("Good Evening Everyone !!");

  console.log("The value of this keyword inside greeting function is ", this);
}

greeting();

//Conclusion :-- The value of 'this' keyword inside the normal function declared using 'function' keyword is "Global window Object". To set the value of the 'this' keyword
//inside the function body according to out convinience ; we invoke the function through
//call() method or through apply() method.
