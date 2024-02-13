//push method in js

//[1]Push the elements 'a' , 'b' and one object literal into the empty array called alphabets = []

let alphabets = [];

console.log("alphabets array before push ", alphabets);

let obj = {
  colonyName: "Gadia Estate",
  streetName: "Paud Road",
  buildingName: "Bandal Capital",
};

alphabets.push("a");

alphabets.push("b");

alphabets.push(obj);

console.log("alphabets array after push ", alphabets);
