function displayRandomCat() {
  const url = `https://cataas.com/cat?type=a&t=a&filter=a&fi=a&f=a&width=100&wi=100&w=100&height=100&he=he&h=100&html=true&json=true`;

  const promiseObj = fetch(url);

  console.log("The promiseObj is ", promiseObj);

  const imgElement = document.getElementById("imgTag");

  console.log("The imgElement is ", imgElement);

  promiseObj
    .then((response) => {
      console.log("The response is ", response);
      return response.json();
    })
    .then((responseObj) => {
      console.log("The responseObj is ", responseObj);
      let requiredUrl = "https://cataas.com" + responseObj.url;
      console.log("The requiredUrl is ", requiredUrl);
      imgElement.src = responseObj.url;
    });
}
