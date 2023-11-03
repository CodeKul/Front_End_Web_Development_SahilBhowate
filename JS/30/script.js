//Refer to the below article for installation of the JSON server.
// https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

function fetchEmployeesData() {
  console.log("The fetchEmployeesData function has been called.");

  const url = "http://localhost:3000/employees";

  let promiseObj = fetch(url);

  //settlement of the promise object promiseObj
  promiseObj
    .then((response) => {
      return response.json();
    })
    .then((receivedJsonObj) => {
      console.log("receivedJsonObj is ", receivedJsonObj);
    })
    .catch((error) => {
      console.log("The error object is ", error);
    });
}

function postEmployeeData() {
  const url = "http://localhost:3000/employees";

  let inputFirstNameTag = document.getElementById("firstName");

  let inputLastNameTag = document.getElementById("lastName");

  let inputEmailTag = document.getElementById("email");

  let firstNameVal = inputFirstNameTag.value;
  let lastNameVal = inputLastNameTag.value;
  let emailVal = inputEmailTag.value;

  console.log(
    "The firstNameVal , lastNameVal , emailVal is ",
    firstNameVal,
    lastNameVal,
    emailVal
  );

  //below js object structure is for reference.
  //   {
  //     "first_name": "Sebastian",
  //     "last_name": "Eschweiler",
  //     "email": "sebastian@codingthesmartway.com"
  //   }

  let postObj = {};

  postObj["first_name"] = firstNameVal;
  postObj["last_name"] = lastNameVal;
  postObj["email"] = emailVal;

  console.log("The postObj is ", postObj);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  };

  //Below code is to post the data.
  fetch(url, options).then((postResponse) => {
    console.log("The postResponse is ", postResponse);
  });
}
