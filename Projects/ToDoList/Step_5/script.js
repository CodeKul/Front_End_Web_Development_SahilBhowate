const enterInputTag = document.getElementById("enterInput");

const tableContent = document.getElementById("tableContent");

displayDataInsideLocalStorage();

function deleteItem(requiredTaskId) {
  console.log(
    "The requiredTaskId on the click of delete icon is ",
    requiredTaskId
  );

  let taskData = JSON.parse(localStorage.getItem("taskName"));

  let updatedArrayAfterDeletion = [];

  for (let tempTaskObj of taskData) {
    if (tempTaskObj.id !== requiredTaskId) {
      updatedArrayAfterDeletion.push(tempTaskObj);
    }
  }

  //store the updated array inside the localStorage
  localStorage.setItem("taskName", JSON.stringify(updatedArrayAfterDeletion));

  //update the UI with latest data.
  displayDataInsideLocalStorage();
}

function addItemToTheList() {
  console.log("The input tag value is ", enterInputTag.value);

  let valueOfInput = enterInputTag.value;

  enterInputTag.value = "";

  //check whether the key:value pair already exists inside the localStorage or not.
  let taskData = JSON.parse(localStorage.getItem("taskName"));

  //The way of storing the data is different when modifying the already existing key value pair.
  if (taskData) {
    //taking the already existing data inside the array tempArr
    let tempArr = [...taskData];

    let tempObj = {};

    let requiredId = tempArr.length + 1;

    tempObj.id = requiredId;

    tempObj.taskName = valueOfInput;

    tempArr.push(tempObj);

    console.log("The required taskData is ", taskData);

    localStorage.setItem("taskName", JSON.stringify(tempArr));
  } else {
    //introduce the key into the localStorage ; if it does not exist already.
    let tempArr = [];

    let tempObj = {};

    let requiredId = 1;

    tempObj.id = requiredId;

    tempObj.taskName = valueOfInput;

    tempArr.push(tempObj);

    localStorage.setItem("taskName", JSON.stringify(tempArr));
  }

  //display the data on UI when the "Add" button has been clicked.
  //To reflect the changes that have been made to the localStorage.
  displayDataInsideLocalStorage();
}

//function to display the data inside the localStorage ; when the reload icon of the browser has been clicked.
function displayDataInsideLocalStorage() {
  //check whether the key:value pair already exists inside the localStorage or not.
  let taskData = JSON.parse(localStorage.getItem("taskName"));

  console.log(
    "The taskData inside the displayDataInsideLocalStorage function is ",
    taskData
  );

  let currentContent = "";

  if (taskData) {
    for (let tempTaskObj of taskData) {
      currentContent =
        currentContent +
        `<tr>
                            <td>${tempTaskObj.taskName}</td>
                            <td>
                                <span>
                                  <i class="bx bxs-trash" onclick="deleteItem(${tempTaskObj.id})"></i>
                                </span>
                            </td>
                          </tr>`;
    }
  }

  tableContent.innerHTML = currentContent;
}
