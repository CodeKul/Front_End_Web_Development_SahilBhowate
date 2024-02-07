//Note : Refer the table of operator precedence

var a = 7 + 8 * 9 + 78 + 7 - 5 / 9;

//8 * 9 = 72
//5 / 9 = 0.555

//a = 7 + _72_ + 78 + 7 - _0.555_
//a =  79      + 85 - 0.555
//a = 163.445

console.log("The value of a is ",a);