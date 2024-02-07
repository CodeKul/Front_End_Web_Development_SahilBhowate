let firstColorsObj = {
    colorOne: "Red",
    colorTwo: "Blue",
    colorThree: "Green"
}

let secondColorObj = firstColorsObj; //shallow copy

secondColorObj.colorOne = "Pink";

console.log("The value of firstColorsObj and secondColorObj is ", firstColorsObj, secondColorObj);