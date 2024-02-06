let tableDataTag = document.getElementById("tableData");

let taskArray = [
  { id: 1, taskName: "Go to the college" },
  { id: 2, taskName: "Go to the music class" },
  { id: 3, taskName: "Go to the garden" },
];

let requiredTemplateLiteralString = "";

for (let taskObject of taskArray) {
  requiredTemplateLiteralString =
    requiredTemplateLiteralString +
    `<tr>
      <td>${taskObject.id}</td>
      <td>${taskObject.taskName}</td>
      <td><button type="button">Delete</button></td>
      </tr>`;
}

tableDataTag.innerHTML = requiredTemplateLiteralString;
