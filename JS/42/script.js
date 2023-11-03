//There are two kinds of fields
//controlled means the form field where functionality is triggered on change.
//uncontrolled means the form field where functionality is triggered on the click of the button.

//Apply the validation to the input field called username.
//Such that , at least one small alphabet from a to z should be present

const userNameTag = document.getElementById("username");

const errorMessageTag = document.getElementById("errorMessage");

//event listener function of the submit button.
function triggerValidation() {
  const patternOne = /[a-z]/;

  let userNameVal = userNameTag.value;

  const inputString = userNameVal;

  let validationResult = patternOne.test(inputString);

  displayErrorMessage(validationResult);
}

//function to display the appropriate error message.
function displayErrorMessage(validationResultVal) {
  if (validationResultVal === true) {
    errorMessageTag.innerText = "";
  } else if (validationResultVal === false) {
    errorMessageTag.innerText = "At least one small alphabet required !";
  }
}

//event listener function for the username input tag.
userNameTag.addEventListener("blur", recordUsername);

//event listener function for onchange event.
function recordUsername(e) {
  console.log("The input text onChange is ", e.target.value);

  const patternOne = /[a-z]/;

  let userNameVal = e.target.value;

  const inputString = userNameVal;

  let validationResult = patternOne.test(inputString);

  displayErrorMessage(validationResult);
}
