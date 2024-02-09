let orderExecutionArray = [];
let orderReadyArray = [];

let orderExecutionQueueTag = document.getElementById("orderExecutionQueue");

let orderReadyQueueTag = document.getElementById("orderReadyQueue");

function displayOrderExecutionString() {
  let orderExecutionString = "";

  for (let index = 0; index < orderExecutionArray.length; index++) {
    let orderObject = orderExecutionArray[index];

    orderExecutionString =
      orderExecutionString +
      ` <div class="executionQueueItem"><div>Chef ${index + 1}</div>${
        orderObject.dishName
      }</div>`;
  }

  orderExecutionQueueTag.innerHTML = orderExecutionString;
}

function displayOrderReadyString(dishName) {
  let orderReadyString = "";

  let previousOrderReadyString = orderReadyQueueTag.innerHTML;

  orderReadyString =
    previousOrderReadyString +
    `<div class="executionQueueItem">${dishName}</div>`;

  orderReadyQueueTag.innerHTML = orderReadyString;
}

function removeTheReadyDishFromOrderExecutionArray(dishName) {
  let result = [];

  for (let orderExecutionObj of orderExecutionArray) {
    if (orderExecutionObj.dishName !== dishName) {
      result.push(orderExecutionObj);
    }
  }

  orderExecutionArray = [...result];

  displayOrderExecutionString();

  displayOrderReadyString(dishName);
}

function prepareDosaSambhar() {
  let dishObj = {};
  dishObj.dishName = "Dosa Sambhar";

  if (orderExecutionArray.length < 4) {
    startCountdownForDosaPreparation();
    orderExecutionArray.push(dishObj);
    displayOrderExecutionString();
  }

  let DishName = "Dosa Sambhar";
  let CookingTime = 10000;

  setTimeout(function () {
    removeTheReadyDishFromOrderExecutionArray(DishName);
  }, CookingTime);
}

function preparePizza() {
  let dishObj = {};
  dishObj.dishName = "Pizza";

  if (orderExecutionArray.length < 4) {
    orderExecutionArray.push(dishObj);
    displayOrderExecutionString();
  }

  let DishName = "Pizza";
  let CookingTime = 20000;

  setTimeout(function () {
    removeTheReadyDishFromOrderExecutionArray(DishName);
  }, CookingTime);
}

function prepareChickenRoll() {
  let dishObj = {};
  dishObj.dishName = "Chicken Roll";

  if (orderExecutionArray.length < 4) {
    orderExecutionArray.push(dishObj);
    displayOrderExecutionString();
  }

  let DishName = "Chicken Roll";
  let CookingTime = 40000;

  setTimeout(function () {
    removeTheReadyDishFromOrderExecutionArray(DishName);
  }, CookingTime);
}

function prepareIdliSambhar() {
  let dishObj = {};
  dishObj.dishName = "Idli Sambhar";

  if (orderExecutionArray.length < 4) {
    orderExecutionArray.push(dishObj);
    displayOrderExecutionString();
  }

  let DishName = "Idli Sambhar";
  let CookingTime = 30000;

  setTimeout(function () {
    removeTheReadyDishFromOrderExecutionArray(DishName);
  }, CookingTime);
}

function startCountdownForDosaPreparation() {
  let dosaSambharClockTag = document.getElementById("dosaSambharClock");
  let count = 0;
  let dosaSambharInterval = setInterval(function () {
    count = count + 1;
    dosaSambharClockTag.innerHTML = `<span>${count}</span>`;

    if (count > 10) {
      dosaSambharClockTag.innerHTML = ``;
      clearInterval(dosaSambharInterval);
    }
  }, 1000);
}

function startCountDownForPizzaPreparation() {
  let pizzaClockTag = document.getElementById("pizzaClock");
  let count = 0;
  let pizzaInterval = setInterval(function () {
    count = count + 1;
    pizzaClockTag.innerHTML = `<span>${count}</span>`;

    if (count === 20) {
      clearInterval(pizzaInterval);
      pizzaClockTag.innerHTML = ``;
    }
  }, 1000);
}

// function startCountdownForChickenRollPreparation(){

// }

// function startCountdownForIdliSambharPreparation(){

// }
