const enterInputTag = document.getElementById("enterInput");

const tableContent = document.getElementById("tableContent");

displayDataInsideLocalStorage();

function deleteItem() {
  console.log("The delete icon has been clicked.");
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

    tempObj.id = 1;

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

  for (let tempTaskObj of taskData) {
    currentContent =
      currentContent +
      `<tr>
                          <td>${tempTaskObj.taskName}</td>
                          <td>
                              <span>
                                <i class="bx bxs-trash" onclick="deleteItem()"></i>
                              </span>
                          </td>
                        </tr>`;
  }

  tableContent.innerHTML = currentContent;
}
