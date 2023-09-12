let objValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.entries(objValue));

let keyValuePairArray = Object.entries(objValue);

for (let singleKeyValuePairArray of keyValuePairArray) {
  //   console.log("singleKeyValuePairArray is ", singleKeyValuePairArray);

  console.log("Keyname is ", singleKeyValuePairArray[0]);

  console.log(
    "Corresponding value of the property is ",
    singleKeyValuePairArray[1]
  );
}
