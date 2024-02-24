//rest parameter -- packs the elements as opposed to spread operator. It is opposite because spread operator spreads the elements.
function displayData(element1, element2, ...restOfTheElements) {
  console.log("The data is ", element1, element2, restOfTheElements);
}

displayData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
