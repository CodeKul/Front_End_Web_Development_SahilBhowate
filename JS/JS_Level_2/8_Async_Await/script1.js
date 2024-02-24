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

  return jsonData;
}

function displayUserData() {
  let requiredData = fetchRandomUser();

  console.log("The requiredData is ", requiredData);
}
