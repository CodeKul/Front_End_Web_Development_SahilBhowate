console.log("This is example of for/in looping statement.");

let addressObj = {
  cityName: "Pune",
  areaName: "Kothrud",
  //   pinCode: "440137",
  stateName: "Maharashtra",
};

//Print the value of pinCode property stored in above object ?

let pinCodeVal = null;

for (propertyName in addressObj) {
  if (propertyName === "pinCode") {
    pinCodeVal = addressObj[propertyName];
  }
}

if (pinCodeVal === null) {
  console.log("The pinCode property does not exist in addressObj object");
} else if (pinCodeVal !== null) {
  console.log("The value of pinCode property is ", pinCodeVal);
}
