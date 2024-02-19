function fetchInternetData() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  //fetch is a built-in method of javascript that returns a promise object
  let promiseObj1 = fetch(url);

  console.log("The promiseObj1 is ", promiseObj1);

  //promise settlement
  promiseObj1.then(dataIsReady, dataIsNotReady);
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
  console.log("The error is ", error);
}

function dataGeneratedInJson(requiredData) {
  console.log("The requiredData is ", requiredData);
}

function dataNotGeneratedInJSON(dataError) {
  console.log("The dataError is ", dataError);
}

//Step 1 -- use fetch method to get the promiseObject1
//Step 2 -- write the code for the settlement of promiseObject1
//Step 3 -- apply .json() method on the response of settlement of promiseObject1. So that you get another promise object ; lets call it as promiseObject2
//Step 4 -- write the code for the settlement of promiseObject2 ; and have your required data.