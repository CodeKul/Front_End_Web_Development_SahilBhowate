let contentAreaTag = document.getElementById("contentArea");
console.log("The contentAreaTag is ",contentAreaTag);

function getUserData() {
  startShowingSpinner();

  let url = "https://randomuser.me/api/";

  let promiseObj = fetch(url);

  promiseObj
    .then((response) => {
      let promiseForJSONFormat = response.json();

      return promiseForJSONFormat;
    })
    .then((dataInJsonForm) => {
      console.log("The dataInJsonForm is ", dataInJsonForm);

      displayIncomingData(dataInJsonForm);
    })
    .catch((errorObject) => {
      console.log("The errorObject is ", errorObject);
    })
    .finally(() => {
        console.log("You entered finally block");
      stopShowingSpinner();
    });
}

function displayIncomingData(data) {
  let resultArr = data.results;

  console.log("The resultArr is ", resultArr);

  let name = `${resultArr[0].name.first} ${resultArr[0].name.last}`;

  let imageUrl = resultArr[0].picture.large;

  console.log("The name and imageUrl is ", name, imageUrl);

  let requiredTemplateLiteral = `
    <div style="display:flex;width:100vw;height:100vh;border:1px solid black;justify-content: center;align-items: center;">
      <div>
        <img src="${imageUrl}"/>
        <div>
          ${name}
        </div>
      </div>
     </div>`;

  console.log("The requiredTemplateLiteral is ", requiredTemplateLiteral);

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
