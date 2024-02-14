const backendData = [
  { RollNo: 1, Name: "Rajesh" },
  { RollNo: 2, Name: "Tushar" },
  { RollNo: 3, Name: "Rakesh" },
  { RollNo: 4, Name: "Ramesh" },
];

let contentAreaTag = document.getElementById("contentArea");

let tableDataTag = document.getElementById("tableData");

let tableDataString = "";

function fetchBackendData() {
  displayLoadingSpinner();

  //The asynchronous code is below
  setTimeout(displayBackendData, 5000);
}

function displayBackendData() {
  console.log("The button has been clicked.");

  for (let backendObject of backendData) {
    tableDataString =
      tableDataString +
      `<tr><td>${backendObject.RollNo}</td>
      <td>${backendObject.Name}</td>
      </tr>`;
  }

  hideLoadingSpinner();

  tableDataTag.innerHTML = tableDataString;
}

function displayLoadingSpinner() {
  tableDataTag.innerHTML = ` <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
}

function hideLoadingSpinner() {
  tableDataTag.innerHTML = ``;
}
