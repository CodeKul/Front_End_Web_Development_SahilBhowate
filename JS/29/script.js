console.log("This is script.js file.");

const contentDiv = document.getElementById("content");

//Function to get the data from api.
function getCommentsData() {
  const url = "https://jsonplaceholder.typicode.com/comments";

  //fetch method returns a promise object
  let promiseObj = fetch(url);

  console.log("The promiseObj is ", promiseObj);

  //Settlement of the promise object.
  promiseObj
    .then((response) => {
      console.log("The response from the api is ", response);

      //   let requiredResponse = response.json();

      //   console.log("The requiredResponse is ", requiredResponse);

      return response.json();
    })
    .then((responseJsonObj) => {
      console.log("The responseJsonObj is ", responseJsonObj);
      populateDataOnUI(responseJsonObj);
    })
    .catch((error) => {
      console.log("The error object is ", error);
    });
}

//function to display the data coming from the api / server on the UI.
function populateDataOnUI(responseJsonObjVal) {
  console.log(
    "The responseJsonObjVal inside populateDataOnUI function is ",
    responseJsonObjVal
  );

  let commentsArray = responseJsonObjVal;

  //structure of single object for reference
  //   {
  //     "postId": 1,
  //     "id": 1,
  //     "name": "id labore ex et quam laborum",
  //     "email": "Eliseo@gardner.biz",
  //     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  //   }

  //template literal string
  let uiDisplayString = "";

  //Using for of statement to traverse through the array of objects.
  for (let commentObj of commentsArray) {
    console.log(`The email is ${commentObj.email}`);

    uiDisplayString =
      uiDisplayString +
      `<div>
        <div>Post Id : ${commentObj["postId"]}</div>
        <div>Id : ${commentObj["id"]}</div>
        <div>Name : ${commentObj["name"]}</div>
        <div>Email : ${commentObj["email"]}</div>
        <div>Body :  ${commentObj["body"]}</div>
      </div>
      <hr />
      `;
  }

  contentDiv.innerHTML = uiDisplayString;
}
