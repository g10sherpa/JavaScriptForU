/*jshint esversion: 6 */
let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timerRunning = false;

let leadingZero = (time) => {
  if (time <= 9) {
    return "0" + time;
  } else {
    return time;
  }
};

//start timer
let startTimer = () => {
  count++;

  minutes = Math.floor(count / 100 / 60);
  seconds = Math.floor(count / 100 - minutes * 60);
  milliSeconds = Math.floor(count - seconds * 100 - minutes * 6000);

  document.querySelector("#minutes").innerText = leadingZero(minutes);
  document.querySelector("#seconds").innerText = leadingZero(seconds);
  document.querySelector("#m-seconds").innerText = leadingZero(milliSeconds);
};

//start button
let startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
  // if (!timerRunning) {
  //   interval = setInterval(startTimer, 10); //start timer
  //   timerRunning = true;
  // }
  interval = setInterval(startTimer, 10);
});

//stop button
let stopBtn = document.querySelector("#stop-btn");
stopBtn.addEventListener("click", () => {
  clearInterval(interval); //stop the timer
});

//reset button
let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
  clearInterval(interval); //stop the timer
  count = 0;
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  timerRunning = false;

  document.querySelector("#minutes").innerText = "00";
  document.querySelector("#seconds").innerText = "00";
  document.querySelector("#m-seconds").innerText = "00";
});
