console.log("The document is ", document);
console.log("The typeof document is ", typeof (document));
console.log("The window object is ", window);

let greetingInputTag = document.getElementById("greetingInput");

console.log("The greetingInputTag is ", greetingInputTag);

//usage of template literal string
function displayGreeting() {
    console.log("The displayGreeting has been called.");

    console.log("The value typed inside the input tag is ", greetingInputTag.value);

    let greetingMessage = greetingInputTag.value;

    let contentAreaTag = document.getElementById("contentArea");

    console.log("The contentAreaTag is ", contentAreaTag);

    contentAreaTag.innerHTML = `<b style="color:green">${greetingMessage}</b>`
}
