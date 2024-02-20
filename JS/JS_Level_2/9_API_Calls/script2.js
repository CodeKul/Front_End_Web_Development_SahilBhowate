let requiredData = null;

function fetchInternetData() {
  startShowingLoadingSpinner();

  let url = `https://randomuser.me/api/`;

  //fetch is a built-in method of javascript that returns a promise object
  let promiseObj1 = fetch(url);

  console.log("The promiseObj1 is ", promiseObj1);

  //promise settlement
  promiseObj1.then(dataIsReady);

  promiseObj1.catch(dataIsNotReady);

  promiseObj1.finally(stopShowingLoadingSpinner);
}

function dataIsReady(response) {
  console.log("The response inside dataIsReady function is ", response);

  //converting string to json format json format means javascript object notation.
  let promiseObj2 = response.json();

  console.log("The promiseObj2 inside dataIsReady function ", promiseObj2);

  //settlement of promiseObj2
  promiseObj2.then(dataGeneratedInJson, dataNotGeneratedInJSON);
}

function dataIsNotReady(error) {
  console.log("The error is ", typeof error);
}

function dataGeneratedInJson(incomingData) {
  console.log("The incomingData is ", incomingData);

  requiredData = incomingData;
}

function dataNotGeneratedInJSON(dataError) {
  console.log("The dataError is ", dataError);
}

function displayData() {
  console.log("The requiredData inside displayData function is ", requiredData);
}

function stopShowingLoadingSpinner() {
  console.log("Stop showing the loading spinner.");
}

function startShowingLoadingSpinner() {
  console.log("Start showing the loading spinner");
}

//Step 1 -- use fetch method to get the promiseObject1
//Step 2 -- write the code for the settlement of promiseObject1
//Step 3 -- apply .json() method on the response of settlement of promiseObject1. So that you get another promise object ; lets call it as promiseObject2
//Step 4 -- write the code for the settlement of promiseObject2 ; and have your required data.
