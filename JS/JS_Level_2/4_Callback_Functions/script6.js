let count = 0;

let startTimerTag = document.getElementById("startTimerTag");
let endTimerTag = document.getElementById("endTimerTag");

let sportsTimer = null;

function startTimer() {
  sportsTimer = setInterval(runnerTime, 1000);
}

function runnerTime() {
  count = count + 1;
  startTimerTag.innerHTML = `${count} s`;
}

function endTimer() {
  endTimerTag.innerHTML = `${count} s`;

  if (sportsTimer !== null) {
    clearInterval(sportsTimer);
  }
}
