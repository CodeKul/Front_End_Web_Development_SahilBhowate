const url = "https://jsonplaceholder.typicode.com/posts";

const promiseObject = fetch(url);

function getDataFromJSONPlaceholder() {
  console.log("The getDataFromJSONPlaceholder function was called.");
  console.log(
    "The promiseObject inside getDataFromJSONPlaceholder function is ",
    promiseObject
  );
}
