//Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

async function fetchRandomUser() {
  let url = "https://randomuser.me/api/";

  let promiseObj = fetch(url);

  let jsonData = null;

  try {
    let response = await promiseObj;

    let promiseObjForJsonData = response.json();

    jsonData = await promiseObjForJsonData;

    console.log("The result is ", jsonData);
  } catch (error) {
    console.log("The error is ", error);
  }

  return jsonData; //Note :-- here actually the data is not returned. Here the promise object would be returned.
}

function displayUserData() {
  let requiredData = fetchRandomUser();

  console.log("The requiredData is ", requiredData);
}
