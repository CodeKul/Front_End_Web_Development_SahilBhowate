let count = 0;

setInterval(runnerTimer, 1000);

function runnerTimer() {
  count = count + 1;
  console.log(`The time in seconds is ${count}`);
}
