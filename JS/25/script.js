//Event listener functions example
//Print the string typed inside the input tag on console ; after the button is clicked ?

//fetching the input element using getElementById()
let inputTag = document.getElementById("personName");

console.log("The inputTag is ", inputTag);

//fetching the button element using getElementById
let buttonTag = document.getElementById("personBtnId");

console.log("The button tag is ", buttonTag);

function printInputName() {
  console.log("The printInputName function has been called.");

  console.log("inputTag inside printInputName function is ", inputTag);

  let personNameInInputTag = inputTag.value;

  console.log("personNameInInputTag is ", personNameInInputTag);

  //Clearing the input tag
  inputTag.value = "";
}

//It means that ; call the printInputName() function on the click of button.
buttonTag.addEventListener("click", printInputName);
