//default values have been assigned to the getData function's parameter
const getData = (studentName = "Jack", age = 22) => {
  console.log("The value of student name and age is ", studentName, age);
};

const getColorData = () => {
  let colorName = "red";

  return colorName;
};

let info = getData();

let colorValue = getColorData();

console.log("The info is ", info);

console.log("The value of the color is ", colorValue);
