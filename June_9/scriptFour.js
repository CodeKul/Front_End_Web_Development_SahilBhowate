//Example of object in JS
let user = {
  userName: "Rick",
  age: 33,
  occupation: "Developer",
  isWorking: true,
  phoneNumber: "708979695",
};

console.log(
  "The user object before the deletion of occupation property is ",
  user
);

//How to delete a particular property from the given JS object ?
//Delete the property called occupation from the above js object ?

delete user.occupation;

console.log(
  "The user object after the deletion of occupation property is ",
  user
);
