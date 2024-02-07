let toDoList = [
  { id: 1, taskName: "Go To the market" },
  { id: 2, taskName: "Go to the garden" },
  { id: 3, taskName: "Attend the music class" },
  { id: 4, taskName: "Go to College" },
];

// jsonplaceholder

function populateList() {
  let tbodyTag = document.getElementById("toDoList");

  console.log("The tbodyTag is ", tbodyTag);

  let toDoListString = "";

  for (let singleTask of toDoList) {
    toDoListString =
      toDoListString +
      `<tr>
    <td>${singleTask.id}</td>
    <td>${singleTask.taskName}</td>
    <td>Delete Action</td>
    </tr>`;
  }

  console.log("The toDoListString is ", toDoListString);

  tbodyTag.innerHTML = toDoListString;
}
