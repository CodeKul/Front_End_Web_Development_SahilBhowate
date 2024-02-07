//push those elements in the result array whose color property is red.
//count those objects whose color property's value is "red"
let result = [];

let arrayOfPencils = [
  { color: "red", code: "1121" },
  { color: "yellow", code: "1122" },
  { color: "green", code: "1123" },
  { color: "red", code: "1124" },
  { color: "yellow", code: "1125" },
];

let countOfRedObjects = 0;

for (let index = 0; index < arrayOfPencils.length; index++) {
  let singleElement = arrayOfPencils[index];

  if (singleElement.color === "red") {
    console.log("The singleElement is ", singleElement);
    result.push(singleElement);

    countOfRedObjects = countOfRedObjects + 1;
  }
}

console.log("The result array is ", result);
console.log("The countOfRedObjects is ",countOfRedObjects);

//countOfRedObjects = 0;

//1st cycle
// countOfRedObjects = 0 + 1

//2nd cycle
//-------------------------

//3rd cycle
//-------------------------

//4th cycle
// countOfRedObjects = 0 + 1 + 1

//5th cycle
//------------------------