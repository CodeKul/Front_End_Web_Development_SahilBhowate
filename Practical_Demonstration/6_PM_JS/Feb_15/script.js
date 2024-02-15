let iceCreamCone = {
  cream: 3,
  cone: 3,
};

function orderIceCream() {
  iceCreamCone.cream = iceCreamCone.cream - 1;

  iceCreamCone.cone = iceCreamCone.cone - 1;

  let currentCreamQuantity = iceCreamCone.cream;

  let currentConeQuantity = iceCreamCone.cone;

  console.log("The iceCreamCone object is ", iceCreamCone);

  if (currentCreamQuantity > 0 && currentConeQuantity > 0) {
    console.log("The icecream is ready");
  } else {
    console.log("The ice cream is not ready");
  }
}
