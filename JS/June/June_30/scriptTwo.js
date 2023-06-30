//Try, Catch, Finally example

const numerator = 10;

denominator = "string";

try {
  console.log(numerator / denominator); //output is NaN
  console.log(x);
} catch (error) {
  console.log("Code that will catch error");
  console.log("The ERROR message " + error);
} finally {
  console.log(
    "Finally block is going to be executed without any concern to try/catch block"
  );
}
