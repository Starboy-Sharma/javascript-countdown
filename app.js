const newYears = "19 Sep 2020";
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");
const celeberate = document.querySelector("#confetti");
const containerEl = document.querySelector(".countdown-container");
const birthdaMsgEl = document.querySelector(".birthday-message");
const loveMessageEl = document.querySelector(".love-message");

const myMsg = `Happy Birthday Shaiz ♥`;

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (days === -1) {
    celeberate.style.display = "block";
    loveMessageEl.style.display = "block";
    birthdaMsgEl.innerHTML = myMsg;
    containerEl.style.display = "none";
    clearInterval(countdown);
    return;
  }

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// init countdown
countdown();

setInterval(countdown, 1000);
