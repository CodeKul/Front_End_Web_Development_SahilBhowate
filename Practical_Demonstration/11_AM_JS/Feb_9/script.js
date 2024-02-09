let infoElementTag = document.getElementById("infoElement");
let contentAreaTag = document.getElementById("contentArea");
let blankArray = [];

function addItem() {
  let inputInformation = infoElementTag.value;
  blankArray.push(inputInformation);

  console.log("The current blankArray is ", blankArray);
}

function displayData() {
  console.log("The blankArray inside  is ", blankArray);
  let outputString = "";

  for (let index = 0; index < blankArray.length; index++) {
    let element = blankArray[index];

    outputString = outputString + `<div><span>Element ${index} = ${element}</div>`;
  }

  contentAreaTag.innerHTML = outputString;
}
