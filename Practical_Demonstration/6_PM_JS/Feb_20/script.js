let contentAreaTag = document.getElementById("contentArea");

//event listener function
function getRandomUser() {
  console.log("The button was clicked.");

  showSpinner();

  let url = "https://randomuser.me/api/";

  let promiseObj = fetch(url);

  console.log("The promiseObj is ", promiseObj);

  //settlement of promise object
  //   promiseObj.then(dataIsReady, dataIsNotReady);

  promiseObj.then(dataIsReady); // equivalent to promiseObj.then(dataIsReady,null)

  promiseObj.catch(dataIsNotReady); //equivalent to promiseObj.then(null,dataIsNotReady)
}

function dataIsReady(response) {
  console.log("The response inside dataIsReady function is ", response);

  let promiseObj2 = response.json();

  console.log("The promiseObj2 is ", promiseObj2);

  //promise settlement
  promiseObj2.then(jsonDataIsGenerated);

  promiseObj2.catch(jsonDataIsNotGenerated);
}

function dataIsNotReady(errorResponse) {
  console.log("The error response is ", errorResponse);
}

function jsonDataIsGenerated(data) {
  console.log("The incoming data is ", data);

  let resultArr = data.results;

  console.log("The resultArr is ", resultArr);

  let requiredObject = resultArr[0];

  console.log("The requiredObject is ", requiredObject);

  let imageUrl = requiredObject.picture.large;

  let personName = `${requiredObject.name.first} ${requiredObject.name.last}`;

  console.log("The imageUrl and personName is ", imageUrl, personName);

  stopSpinner();

  contentAreaTag.innerHTML = `
  <div style="display:flex; justify-content:center">  
    <div><img src="${imageUrl}"/>
    <div>${personName}</div>
    <div> 
  </div>
  `;
}

function jsonDataIsNotGenerated(dataErrorObject) {
  console.log("The dataErrorObject is ", dataErrorObject);
}

function showSpinner() {
  contentAreaTag.innerHTML = `<div style="display:flex; justify-content:center"> 
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    <div>`;
}

function stopSpinner() {
  contentAreaTag.innerHTML = ``;
}
