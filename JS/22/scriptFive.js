//Arrow functions on arrays
//Print the elements of the array carBrands using the forEach statement.

const carBrands = ["Maruti", "Volvo", "BMW"];

carBrands.forEach((element, index, array) => {
  console.log("Arrow function inside the forEach statement has been called.");
  console.log(element, index, array);
});

//element is the individual element of the carBrands array in each cycle of the forEach loop.

//index is the position of that element in carBrands array.

//array parameter continas the value of that array on which we applied the forEach statement.
