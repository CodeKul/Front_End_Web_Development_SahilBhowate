let listContentAreaTag = document.getElementById("listContentArea");

getList();

function getList() {
  let url = `http://localhost:3000/taskList`;

  let promiseObject = fetch(url);

  console.log("The promiseObject is ", promiseObject);

  promiseObject
    .then((response) => {
      let promiseObjectForJson = response.json();

      return promiseObjectForJson;
    })
    .then((jsonData) => {
      console.log("The jsonData is ", jsonData);
      displayList(jsonData);
    })
    .catch((error) => {
      console.log("The error object is ", error);
    });
}

function displayList(requiredJsonData) {
  [
    {
      id: "1",
      taskName: "Go to the garden",
    },
  ];

  let templateString = "";

  for (let index = 0; index < requiredJsonData.length; index++) {
    templateString =
      templateString +
      `<tr>
    <td>${requiredJsonData[index].id}</td>
    <td>${requiredJsonData[index].taskName}</td>
    <td>
    <div style="display:flex;gap:2">
     <div>
       <button type="button" onclick="deleteData(${requiredJsonData[index].id})">Delete</button>
     </div>

     <div>
       <button type="button" onclick="editData(${requiredJsonData[index].id})">Edit</button>
     </div>

    </div>
    </td>
    </tr>`;
  }

  listContentAreaTag.innerHTML = templateString;
}

function deleteData(requiredId) {
  console.log("The requiredId is ", requiredId);
}

function editData(requiredId) {
  console.log("The requiredId is ", requiredId);
}

function postData() {
  console.log("The postData function has been called.");
}
