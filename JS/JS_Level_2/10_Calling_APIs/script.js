function fetchInternetData() {
  let url = "https://jsonplaceholder.typicode.com/posts";

  let promiseObj = fetch(url);

  console.log("The promiseObj is ", promiseObj);

  //promise settlement
  promiseObj.then(dataIsReady, dataIsNotReady);
}

function dataIsReady(response) {
  console.log("The response inside dataIsReady is ", response.json());
}

function dataIsNotReady(error) {
  console.log("The error is ", error);
}
