let infoElementTag = document.getElementById("infoElement");
let blankArray = [];

function addItem(){
    let inputInformation = infoElementTag.value;
    blankArray.push(inputInformation);

    console.log("The current blankArray is ",blankArray);
}

