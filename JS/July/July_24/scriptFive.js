//Public , Private Fields [Field means property]

// class Person {
//   constructor(fullName, dob, country) {
//     this.fullName = fullName;
//     this.dob = dob;
//     this.country = country;
//   }
// }

fullName = "Ramesh";
dob = "12/12/12";
country = "India";

//new public fields syntax
class Person {
  full = fullName;
  dob = dob;
  country = country;
}

let personObj = new Person();

console.log("The personObj is ", personObj);


//privateID
//privateMethods