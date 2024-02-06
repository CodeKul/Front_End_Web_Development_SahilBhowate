let tableDataTag = document.getElementById("tableData");
let inputTaskTag = document.getElementById("inputTask");

let taskArray = [];

//manipulate the array of objects
function addTaskToTheTable() {
  if (inputTaskTag.value !== "") {
    let taskObject = {};
    taskObject.id = taskArray.length + 1;
    taskObject.taskName = inputTaskTag.value;

    taskArray.push(taskObject);
    clearTheTaskInputTag();

    displayTaskToTheTable();
  } else if (inputTaskTag.value === "") {
    window.alert("Task name cannot be empty");
  }
}

//below function converts array of objects into ui
function displayTaskToTheTable() {
  let requiredTemplateLiteralString = "";

  for (let taskObject of taskArray) {
    requiredTemplateLiteralString =
      requiredTemplateLiteralString +
      `<tr>
        <td>${taskObject.id}</td>
        <td>${taskObject.taskName}</td>
        <td><button type="button" onclick="deleteTask(taskObject)">Delete</button></td>
        </tr>`;
  }

  tableDataTag.innerHTML = requiredTemplateLiteralString;
}

//clear the input tag
function clearTheTaskInputTag() {
  inputTaskTag.value = "";
}

//event listener function for delete button
function deleteTask(taskObjectValue) {
  console.log("The deleteTask has been called.", taskObjectValue);
}
