let timer;
let timeLeft = 10;

function startCountdown() {
  const display = document.getElementById("display");

  timer = setInterval(() => {
    display.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      display.innerText = "💥 BOOM!";
    }

    timeLeft--;
  }, 1000);
}
