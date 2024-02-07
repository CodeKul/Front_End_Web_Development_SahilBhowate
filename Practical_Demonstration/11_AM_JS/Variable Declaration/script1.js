// var , let , const

//comparing the let , var ,const declaration through their scopes

// variables declared using var keyword do not have block scope. They are accessible outside the block also.

//variables declared using let keyword have block scope

//variables declared using const keyword have block scope

{
    var a = 2;
}

console.log("The value of a is ", a);

{
    let b = 4;
}

console.log("The value of b is ", b);

{
    const c = 7;
}

console.log("The value of c is ", c);

