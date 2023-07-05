const output = document.getElementById("text");

const btn = document.getElementById("changeText");

btn.addEventListener("click", loadData);

function loadData() {
  console.log("The loadData function has been called.");

  const req = new XMLHttpRequest();

  //   console.log("The xml request object is ", req);

  //open the stream for communication
  req.open("GET", "info.txt", true);

  console.log("The log before sending the request.");

  req.send();

  //block of code to process the request
  //below block of code is asynchronous in nature
  req.onreadystatechange = function () {
    // console.log("this keyword is ", this);
    if (req.readyState == 4 && req.status == 200) {
      //printing the response of our GET request
      console.log(req.responseText);
    }
  };

  console.log("The log after sending the request.");
}
