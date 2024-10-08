let progressLine = document.querySelector(".progress-line");
let elements = document.querySelectorAll(".circle");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let currentIndex = 1;
nextBtn.addEventListener("click", () => {
   if (currentIndex > elements.length) {
      currentIndex = elements.length - 1;
   }
   elements[currentIndex].classList.add("active");
   elements[currentIndex - 1].classList.remove("active");
   //    currentIndex = (currentIndex + 1) % elements.length;
   console.log(currentIndex);
   currentIndex++;
});
