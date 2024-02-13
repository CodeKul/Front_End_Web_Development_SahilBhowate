function getDataFromBackend() {
  console.log("The button has been clicked.");
  //assume that the time required by the data to reach browser is 6000 milliseconds

  setTimeout(displayDataOnUI, 6000);
}

function displayDataOnUI() {
  console.log("The displayDataOnUI has been executed.");
}
