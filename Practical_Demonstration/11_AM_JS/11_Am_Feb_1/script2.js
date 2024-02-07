console.log("The document object is ", document);
console.log("The window object is ",window);

let contentAreaTag = window.document.getElementById("contentArea");

window.console.log("The typeof contentAreaTag is ", typeof contentAreaTag);

//template literal string ``
function clickDetection() {
  console.log("The button has been clicked.");
  contentAreaTag.innerHTML = `<div style="color:red">The button was clicked</div>`;
}
