let count = 0;

let sportsTimer = setInterval(runnerTimer, 1000);

function runnerTimer() {
  count = count + 1;

  console.log(`The time in seconds in ${count}`);

  if (count === 10) {
    clearInterval(sportsTimer);
  }
}
