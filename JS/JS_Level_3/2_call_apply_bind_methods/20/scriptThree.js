// 3) Invoking a function as a constructor

//This is a function constructor
function printDetails(x, y) {
  console.log("this ", this);
  this.firstName = x;
  this.lastName = y;
}

//Below line creates a new Object
//constructor is a function using which we created the object called "morganObject"
const morganObject = new printDetails("Morgan", "Freeman");

//constructor is a function using which we created the object called "tomObject"
const tomObject = new printDetails("Tom", "Cruise");

console.log("morganObject object is ", morganObject);
console.log("tomObject object is ", tomObject);

let morganObjFirsName = morganObject.firstName;
let morganObjlastName = morganObject.lastName;

console.log("morganObject values are ", morganObjFirsName, morganObjlastName);
