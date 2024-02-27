async function fetchStudent() {
  let url = `http://localhost:3000/students`;

  let promiseObject = fetch(url);

  console.log("The promiseObject is ", promiseObject);

  //settlement of promiseObject
  let response = await promiseObject;

  let promiseObjectForJson = response.json();

  console.log("The response is ", response);

  let data = await promiseObjectForJson;

  console.log("The data is ", data);
}
