//Traditional Function
function additionFn(x, y) {
  let result = x + y;

  return "This is the result:" + result;
}

let store1 = additionFn(3, 4);
console.log(store1);

//Arrow Function
let additionFn1 = (x, y) => {
  let result = x + y;
  return "This is the result :" + result;
};

let store2 = additionFn1(3, 4);

console.log(store2);
