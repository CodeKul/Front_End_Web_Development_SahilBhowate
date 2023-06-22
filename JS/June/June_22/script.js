console.log("This is example of for/in looping statement.");

let addressObj = {
  cityName: "Pune",
  areaName: "Kothrud",
  pinCode: "440137",
  stateName: "Maharashtra",
};

//syntax of for/in statement
// for(propertyName in object){
// statement
// }

for (propertyName in addressObj) {
  console.log("The property name is ", propertyName);
}

for (propertyName in addressObj) {
  console.log("The property value is ", addressObj[propertyName]);
}
