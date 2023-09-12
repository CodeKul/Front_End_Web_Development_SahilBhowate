const user = { name: "Ron" };

user.age = 33;

user.age = 44;
user.name = "Rakesh";
console.log("The user object with const declaration is ", user);

//You cannot modify the constant js object.
user = { name: "Rajesh" };
