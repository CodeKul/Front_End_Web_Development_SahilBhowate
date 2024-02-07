//variables declared using var keyword have function scope.

function greeting() {
    var a = 5;
    console.log("Good Morning Everyone");
}

greeting(); //calling the function

console.log("The value of a is ", a);