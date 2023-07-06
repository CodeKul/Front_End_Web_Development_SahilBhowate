// process 1
// process 2
// process 3

//process 3 has to wait for the completion of execution of process 2.
//But it is essential , and its a priority to execute process 3.
//So , in this case we need a mechanism due to which the execution of process 2
//would go on in the background. And while this happens ; the execution of process 3 should start. This is known as asynchronous OR non-sequential nature of the program.

//The basic solution to handle asynchronous behaviour is "Asynchronous Callbacks".

//What is a callback function ?
//Aisa function jo as a parameter / argument pass kiya jata hai ; uss function callback function kehthe hai.

//In the below line of code ; loadData is a callback function. Because loadData was passed
//as an argument to the function addEventListener.
//btn.addEventListener("click", loadData);
