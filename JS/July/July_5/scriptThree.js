const output = document.getElementById("text");

const btn = document.getElementById("changeText");

btn.addEventListener("click", loadData);//loadData is a callback function

function loadData() {
  console.log("The loadData function has been called.");

  const req = new XMLHttpRequest();

  //   console.log("The xml request object is ", req);

  //open the stream for communication
  req.open("GET", "info.txt", true);
  //true stands for asynchronous true

  console.log("The log before sending the request.");

  req.send(); //for GET method
  //req.send(string); //for POST method

  //block of code to process the request
  //below block of code is asynchronous in nature
  req.onreadystatechange = function () {
    console.log(
      "The value of req.readyState and req.status is ",
      req.readyState,
      req.status
    );
    //the below if block is to check whether the request is successfull or not.
    if (req.readyState == 4 && req.status == 200) {
      //printing the response of our GET request
      console.log(req.responseText);

      let requiredResponse = req.responseText;
      output.innerText = requiredResponse;
    }
  };

  console.log("The log after sending the request.");

  //readyState has become 4 means that the request was sent , and the server returned the response.
  //status has become 200 means that the request was successfull.
}
