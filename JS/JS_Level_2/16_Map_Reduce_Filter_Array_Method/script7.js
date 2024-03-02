//write a program to delete the object having rollNo property's value as 3

let studentsInfo = [
  { rollNo: 1, name: "Pranav" },
  {
    rollNo: 2,
    name: "Ramesh",
  },
  {
    rollNo: 3,
    name: "Suresh",
  },
  {
    rollNo: 4,
    name: "Dinesh",
  },
];

let requiredStudentsInfo = studentsInfo.filter(deleteStudentData);

function deleteStudentData(singleStudentObject) {
  return singleStudentObject.rollNo != 3;
}

console.log("The requiredStudentsInfo is ", requiredStudentsInfo);
