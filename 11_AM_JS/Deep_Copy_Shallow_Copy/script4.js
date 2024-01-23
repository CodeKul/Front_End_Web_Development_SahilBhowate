let firstColorsObj = {
    colorOne: "Red",
    colorTwo: "Blue",
    colorThree: "Green"
}

let secondColorObj = structuredClone(firstColorsObj); //deep copy

secondColorObj.colorOne = "Pink";

console.log("The value of firstColorsObj and secondColorObj is ", firstColorsObj, secondColorObj);