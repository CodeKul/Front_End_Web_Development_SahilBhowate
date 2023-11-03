let person = {
  name: "Rakesh",
};

//creating Symbol
let id = Symbol("id");

//adding symbol as a key
person[id] = 12;

//This wont affect the value of the Symbol id
person.id = 14;

//This would affect the value of the Symbol id ; which is used as the object key.
person[id] = 90;

console.log(person);

//To avoid the duplication of property names , we can use the symbol as object key.
