//You can initialize [put the value in the variable] ; before we create the same variable.
//This behaviour is known as "hoisting"

user = "Tony"; //variable initialization [put the value in the variable]

var user; //variable creation / declaration

console.log(user); //this line is error free because of the behaviour called "hoisting"

//The conclusion is that ; the creation of javascript variables takes place
//at the top of the scope.
