//Meta-Character '|' Alteration -- It is a kind of OR operator.
const pattern = /a|b/;

//The above pattern means any string jiske andar 'a' ho ya phir 'b' ho.

const inputStringOne = "cde";
const inputStringTwo = "ade";
const inputStringThree = "acdbea";

console.log(pattern.test(inputStringThree));
