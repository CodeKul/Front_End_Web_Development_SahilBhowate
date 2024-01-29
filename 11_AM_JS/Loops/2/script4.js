//Find whether there is at least one element in the arrayA
//such that , the element should be greater than 10.
//If the element is not found print the message ; the element was
//not found.
//If the element is found , print the message
//"The element was found." and then come out of the loop using break

let arrayA = [1, 2, 3, 4, 5, 11, 6, 7, 8, 9, 10];

let resultOfDiscovery = false;

for (let index = 0; index < arrayA.length; index++) {
  let singleElement = arrayA[index];

  if (singleElement > 10) {
    resultOfDiscovery = true;
    break;
  }

  console.log("The singleElement is ", singleElement);
}

//checking the resultOfDiscovery
if (resultOfDiscovery) {
  console.log("The element greater than 10 exists in the array");
} else {
  console.log("The element greater than 10 does not exist in the array");
}
