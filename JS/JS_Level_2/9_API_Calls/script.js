function fetchInternetData() {
  let url = "https://jsonplaceholder.typicode.com/post";

  let promiseObj = fetch(url);

  console.log("The promiseObj is ", promiseObj);

  //promise settlement
  promiseObj.then(dataIsReady, dataIsNotReady);
}

function dataIsReady(response) {
  console.log("The response is ", response);
}

function dataIsNotReady(error) {
  console.log("The error is ", error);
}
