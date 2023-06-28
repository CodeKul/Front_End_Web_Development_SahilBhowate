//Arrow functions on arrays
//Print the elements of the array carBrands using the forEach statement.

const carBrands = ["Maruti", "Volvo", "BMW"];

carBrands.forEach((element, index) => {
  console.log("Arrow function inside the forEach statement has been called.");
  console.log(element, index);
});
