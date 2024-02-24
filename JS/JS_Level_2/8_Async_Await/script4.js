async function displayUserInfo() {
  let url = "https://randomuser.me/api/";

  let promiseObjOne = fetch(url);

  try {
    //settlement of promiseObjOne
    let response = await promiseObjOne;

    let promiseObjectForJson = response.json();

    //settlement of promiseObjOne
    let dataInJsonForm = await promiseObjectForJson;

    console.log("The dataInJsonForm is ", dataInJsonForm);

    // populateData(dataInJsonForm);
  } catch (error) {
    console.log("The error is ", error);
  }
}
