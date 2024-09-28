let openButton = document.querySelector(".open-btn");
let closeButton = document.querySelector(".close-btn");
let popOver = document.querySelector(".pop-over");
openButton.addEventListener("click", () => {
    
   // Changing display value manually so that animation is applied properly
   popOver.style.display = "flex";
   popOver.classList.add("pop-card-visible");
   popOver.classList.remove("pop-card-hide");
});
closeButton.addEventListener("click", () => {
   popOver.classList.add("pop-card-hide");
   popOver.classList.remove("pop-card-visible");
   setTimeout(() => {
      popOver.style.display = "none";
   }, 300);
});
