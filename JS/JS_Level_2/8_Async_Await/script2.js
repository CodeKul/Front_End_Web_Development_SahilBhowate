async function displayUserInfo() {
  let url = "https://randomuser.me/api/";

  let promiseObjOne = fetch(url);

  //promiseObjOne.then()
  //.then()
  //.catch()

  //settlement of promiseObjOne
  let response = await promiseObjOne;

  let promiseObjectForJson = response.json();

  //settlement of promiseObjOne
  let dataInJsonForm = await promiseObjectForJson;

  console.log("The dataInJsonForm is ", dataInJsonForm);
}
