let studentObj = {}; //empty object

console.log("studentObj is ", studentObj);

studentObj.name = "Ron";

//How to add a new property to a js object. And the property name is having space.
studentObj["Student RollNo"] = 31;

console.log("studentObj is ", studentObj);

let rollNumberVal = studentObj["Student RollNo"];

console.log("The rollNumberVal is ", rollNumberVal);
