const enterInputTag = document.getElementById("enterInput");

const tableContent = document.getElementById("tableContent");

function deleteItem() {
  console.log("The delete icon has been clicked.");
}

function addItemToTheList() {
  console.log("The input tag value is ", enterInputTag.value);

  let valueOfInput = enterInputTag.value;

  let previousContent = tableContent.innerHTML;

  let currentContent = `<tr>
                            <td>${valueOfInput}</td>
                            <td>
                                <span>
                                  <i class="bx bxs-trash" onclick="deleteItem()"></i>
                                </span>
                            </td>
                        </tr>`;

  let requiredContent = previousContent + currentContent;

  tableContent.innerHTML = requiredContent;

  enterInputTag.value = "";

  //check whether the key:value pair already exists inside the localStorage or not.
  let taskData = JSON.parse(localStorage.getItem("taskName"));

  console.log("The value of taskData is ", taskData);

  //The way of storing the data is different when modifying the already existing key value pair.
  if (taskData) {
    console.log("Now we are in if block.");
    //taking the already existing data inside the array tempArr
    let tempArr = [...taskData];

    tempArr.push(valueOfInput);

    console.log("The required taskData is ", taskData);

    localStorage.setItem("taskName", JSON.stringify(tempArr));
  } else {
    console.log("Now we are in else block.");
    //introduce the key into the localStorage ; if it does not exist already.
    let tempArr = [valueOfInput];

    localStorage.setItem("taskName", JSON.stringify(tempArr));
  }

  console.log("The tableContent is ", tableContent);
}
