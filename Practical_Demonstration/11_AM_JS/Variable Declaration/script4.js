//variables declared using const keyword have function scope.

function greeting() {
    const a = 5;
    console.log("Good Morning Everyone");
}

greeting(); //calling the function

console.log("The value of a is ", a);