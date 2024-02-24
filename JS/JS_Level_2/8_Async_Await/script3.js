async function fetchRandomUser() {
  let url = "https://randomuser.me/api/";

  let promiseObjOne = fetch(url);

  //settlement of promiseObjOne
  let response = await promiseObjOne;

  let promiseObjectForJson = response.json();

  return promiseObjectForJson;
}

//below is the event listener function
async function displayUserData() {
  //settlement of promiseObjectForJson
  let requiredData = await fetchRandomUser();

  console.log("The requiredData is ", requiredData);

  //how to diplay data
}
