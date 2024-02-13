//How to throw exceptions ?

function getMonthName(monthIndex) {
  let monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthsArray[monthIndex] !== undefined) {
    return monthsArray[monthIndex];
  } else {
    throw new Error("Wrong Month Number");
  }
}

try {
  //statements to try
  //14 will go into else statement and throw new Error
  let currentMonth = 14;

  let requiredIndexPosition = currentMonth - 1; //because index starts from 0

  //this statement is error prone so it is written in try block
  let monthName = getMonthName(requiredIndexPosition);

  console.log("The resultant monthName is ", monthName);
} catch (error) {
  console.log(
    "The error object's property values  inside catch block is ",
    error.message,
    error.name
  );

  console.log("The error object is ", error);
}

//The structure of the error object that we throwed inside the try block is
// {
//  message: ###,
//  name:###
// }
