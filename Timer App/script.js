let hourElement = document.querySelector(".hour");
let minuteElement = document.querySelector(".minute");
let secondElement = document.querySelector(".second");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let intervalId;
let isRunning = false;
function resetCounter() {
   clearInterval(intervalId);
   isRunning = false;
   hourCount = 0;
   minuteCount = 0;
   secondCount = 0;
   displayTimer(hourCount, minuteCount, secondCount);
}
resetBtn.addEventListener("click", () => {
   resetCounter();
});
startBtn.addEventListener("click", () => {
   startCounter();
});
function startCounter() {
   if (!isRunning) {
      isRunning = true;
      intervalId = setInterval(() => {
         secondCount++;
         if (secondCount >= 59) {
            minuteCount++;
            secondCount = 0;
         }
         if (minuteCount > 59) {
            hourCount++;
            minuteCount = 0;
         }
         displayTimer(hourCount, minuteCount, secondCount);
      }, 1000);
   }
}
function displayTimer(hour, minute, second) {
   hourElement.textContent = String(hour).padStart(2, "0");
   minuteElement.textContent = String(minute).padStart(2, "0");
   secondElement.textContent = String(second).padStart(2, "0");
}
