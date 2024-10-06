let imageContainer = document.querySelector("#image-ai");
let userSelectionImage = document.querySelector("#image-user");
let startBtn = document.querySelector(".start-btn");
let userSelection = document.querySelector(".select-item");
let result = document.querySelector(".result");
let imageChanger;
let images = {
   0: "images/rock.png",
   1: "images/paper.png",
   2: "images/scissor.png",
};

let currentIndex = 0;
let totalImages = Object.keys(images).length;
function changeImage() {
   imageChanger = setInterval(() => {
      imageContainer.src = images[currentIndex]; // Set the current image source
      currentIndex = (currentIndex + 1) % totalImages; // Cycle to the next image, reset after the last image
   }, 400); // Change image every 1000 milliseconds (1 second)
   let random = Math.floor(Math.random() * 3);
   console.log(random);
   setTimeout(() => {
      clearInterval(imageChanger);
      imageContainer.src = images[random];
      startGame(random);
   }, 2000);
   if (userSelection.value == "Rock") {
      userSelectionImage.src = images[0];
   } else if (userSelection.value == "Paper") {
      userSelectionImage.src = images[1];
   } else {
      userSelectionImage.src = images[2];
   }
}
// changeImage();
function startGame(random) {
   let userInput = userSelection.value;
   switch (userInput) {
      case "Rock":
         if (random == 0) {
            result.textContent = "Draw";
         } else if (random == 1) {
            result.textContent = "You Lost";
         } else {
            result.textContent = "You Won";
         }
         break;
      case "Paper":
         if (random == 0) {
            result.textContent = "You Won";
         } else if (random == 1) {
            result.textContent = "Draw";
         } else {
            result.textContent = "You Lost";
         }
         break;
      case "Scissor":
         if (random == 0) {
            result.textContent = "You Lost";
         } else if (random == 1) {
            result.textContent = "You Won";
         } else {
            result.textContent = "Draw";
         }
         break;
      default:
         result.textContent = "Oops and error occured, refresh the page :)";
         break;
   }
}
startBtn.addEventListener("click", changeImage);
