let a = 7;

let contentAreaTag = document.getElementById("contentArea");

console.log("The value of a is ", a);

//console using template literal string
console.log(`The value of a is ${a}`);

function displayValueOfA(){
    console.log("You have entered the function.");

    contentAreaTag.innerHTML = `<b>The value of a is ${a}</b>`;
}