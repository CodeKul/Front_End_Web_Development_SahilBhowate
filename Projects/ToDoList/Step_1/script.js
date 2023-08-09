const enterInputTag = document.getElementById("enterInput");

const tableContent = document.getElementById("tableContent");

function deleteItem() {
  console.log("The delete icon has been clicked");
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

  console.log("The tableContent is ", tableContent);
}
