let input = {
  itemOne: "pencil",
  itemTwo: "eraser",
};

let result = input instanceof Array;

if (result === true) {
  console.log("The input is Array");
} else if (result === false) {
  console.log("The input is not a array.");
}
