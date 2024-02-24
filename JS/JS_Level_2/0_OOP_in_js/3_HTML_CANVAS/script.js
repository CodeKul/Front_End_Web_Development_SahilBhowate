//Step 1: Find the Canvas Element
const canvas = document.getElementById("myCanvas");

console.log("The canvas object is ", canvas);

//Step 2: Create a Drawing Object for the canvas
//The getContext() is a buil-in HTML object with properties and methods for drawing
const ctx = canvas.getContext("2d");

//Step 3: Draw on the Canvas
ctx.fillStyle = "#FF0000";

//fillRect(x,y,width,height) --- draws a rectangle
ctx.fillRect(0, 0, 150, 75);
