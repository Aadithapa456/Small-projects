let imgHoverText = document.querySelector(".img-over-text"); // selects the text that is to be appeared over iamge
let imgContainer = document.querySelector(".img-area"); 
imgContainer.addEventListener("mouseover", () => {
   imgHoverText.style.display = "flex";
   imgHoverText.classList.remove("img-over-text-invisible");
   imgHoverText.classList.add("img-over-text-visible");
   console.log("Hello");
});
imgContainer.addEventListener("mouseleave", () => {
   imgHoverText.classList.remove("img-over-text-visible");
   imgHoverText.classList.add("img-over-text-invisible");
   setTimeout(() => {
      imgHoverText.style.display = "none";
   }, 910); // Added some delay to match the animation time
   console.log("Hello");
});
