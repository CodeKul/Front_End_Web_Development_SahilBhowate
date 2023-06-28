let a = 5;
let b = 7;
let c = 8;

function findMax(x, z) {
  if (x > z) {
    return x;
  } else {
    //return z since z is bigger - [as we enetered the else block]
    return z;
  }
}

// let biggerOne = findMax(a, b);
// let biggerOne = findMax(a, b, c);
let biggerOne = findMax(a); //result is undefined because the second argument is considered as undefined

console.log(biggerOne);


