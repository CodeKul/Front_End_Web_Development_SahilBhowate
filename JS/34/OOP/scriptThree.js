//How to access the property values of the object ?
let domainExtension = {
  commercial: ".com",
  network: ".net",
  organization: ".org",
  government: ".gov",
};

//dot notation
console.log(domainExtension.commercial);

//square bracket notation
console.log(domainExtension["commercial"]);

//How to delete a particular key in the object ?
delete domainExtension.commercial; //delete the property known as "commercial"

console.log(
  "The domainExtension after deletion operation is ",
  domainExtension
);
