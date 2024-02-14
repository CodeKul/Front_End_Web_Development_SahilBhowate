//Arrow functions allow you to have an implicit return:
//values are returned without having to use the return keyword.

//It works when there is a one-line statement in the function body

const getData = () => "test";

let dataOutput = getData();

console.log("The dataOutput is ", dataOutput);
