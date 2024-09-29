// Selecting DOM elements
let hours = document.querySelector(".clock-hour");
let minute = document.querySelector(".clock-minutes");
let seconds = document.querySelector(".clock-seconds");
let amOrPm = document.querySelector(".am-pm");

// Selecting Buttons for changing time format
let twelveHourBtn = document.querySelector("#twelve-hour-btn");
let twentyFourHourBtn = document.querySelector("#twenty-four-hour-btn");
// Flag for checking current format (True for 12-hour, False for 24-hour)
let isTwelveHourFormat = true;
twelveHourBtn.addEventListener("click", () => {
   isTwelveHourFormat = true;
});
twentyFourHourBtn.addEventListener("click", () => {
   isTwelveHourFormat = false;
});
function displayTime() {
   let time = new Date();
   let hour = time.getHours();

   //If in 12-hour form then it assigns AM, PM accordingly
   if (isTwelveHourFormat) {
      amOrPm.textContent = hour >= 12 ? "PM" : "AM";
      // At midnight (12 AM) remainder equals 0 so OR part is selected at that time and remainder of current hours at other times.
      hour = hour % 12 || 12;
   } else {
      amOrPm.textContent = "";
   }
   hours.textContent = hour;
   // Pad minutes and seconds to ensure two-digit format
   minute.textContent = String(time.getMinutes()).padStart(2, "0");
   seconds.textContent = String(time.getSeconds()).padStart(2, "0");
}
setInterval(displayTime, 1000);
displayTime();
