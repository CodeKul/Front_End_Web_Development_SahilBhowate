let addressObject = {
    colonyName:"Blue Heaven",
    "pin Code":"444605",
    city:"Pune",
    landMark:"Kothrud Bus Stop"
}

//for in statement for object literals
for(let propertyName in addressObject){
    console.log("The propertyName is ",propertyName);
console.log("The property values are ",addressObject[propertyName]);
}
