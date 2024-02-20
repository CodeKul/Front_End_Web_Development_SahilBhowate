let contentAreaTag = document.getElementById("contentArea");

function getUserData() {
  console.log("The button was clicked");

  startShowingSpinner();

  let url = "https://randomuser.me/api/";

  let promiseObj = fetch(url);

  //settlement of promiseObj
  promiseObj.then(processData);

  promiseObj.catch(processError);

  //   console.log("The promiseObj is ", promiseObj);
}

function processData(dataResponse) {
  //   console.log("The dataResponse is ", dataResponse);

  let promiseObj2 = dataResponse.json();

  //   console.log("The promiseObj2 is ", promiseObj2);

  promiseObj2.then(dataGeneratedInJson);

  promiseObj2.catch(dataNotGeneratedInJson);
}

function processError(errorResponse) {
  //   console.log("The errorResponse is ", errorResponse);
  stopShowingSpinner();
}

function dataGeneratedInJson(requiredData) {
  //   console.log("The requiredData is ", requiredData);

  displayIncomingData(requiredData);
}

function dataNotGeneratedInJson(dataError) {
  //   console.log("The dataError is ", dataError);
}

function displayIncomingData(data) {
  let resultArr = data.results;

  console.log("The resultArr is ", resultArr);

  let name = `${resultArr[0].name.first} ${resultArr[0].name.last}`;

  let imageUrl = resultArr[0].picture.large;

  console.log("The name and imageUrl is ", name, imageUrl);

  let requiredTemplateLiteral = `
  <div style="display:flex;width:100vw;height: 100vh;border:1px solid black;justify-content: center;align-items: center;">
    <div>
      <img src="${imageUrl}"/>
      <div>
        ${name}
      </div>
    </div>
   </div>`;

  stopShowingSpinner();

  console.log("The requiredTemplateLiteral is ", requiredTemplateLiteral);

  console.log(
    "The requiredTemplateLiteral is ",
    typeof requiredTemplateLiteral
  );

  contentAreaTag.innerHTML = requiredTemplateLiteral;
}

function startShowingSpinner() {
  contentAreaTag.innerHTML = `<div style="display:flex;justify-content: center;align-items: center;">
<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>
</div>`;
}

function stopShowingSpinner() {
  contentAreaTag.innerHTML = ``;
}
