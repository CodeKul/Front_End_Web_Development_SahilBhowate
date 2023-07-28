const userNameTag = document.getElementById("userName");

userNameTag.addEventListener("change", detectBlurEvent);

// userNameTag.addEventListener("blur", detectBlurEvent);

function detectBlurEvent(eventObject) {
  console.log("The event object is ", eventObject);
  console.log("The change event has been detected");
}
