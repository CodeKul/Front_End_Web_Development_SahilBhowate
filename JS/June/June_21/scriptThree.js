//Object.keys()
//Make use of the for/of looping statement to print the values of all the properties of the object. ?

let ObjValue = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.keys(ObjValue));

let objectKeysArray = Object.keys(ObjValue);

for (let singlePropertyName of objectKeysArray) {
  console.log(
    "The singlePropertyName and its value is ",
    singlePropertyName,
    ObjValue[singlePropertyName]
  );
}
