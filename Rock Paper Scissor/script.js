let imageContainer = document.querySelector("#image-ai");
let userSelectionImage = document.querySelector("#image-user");
let startBtn = document.querySelector(".start-btn");
let userSelection = document.querySelector(".select-item");
let resultPopUp = document.querySelector(".pop-up");
let closePopUpBtn = document.querySelector("#close-btn");
let winOrLoss = document.querySelector(".result-info");
let resultTitle = document.querySelector(".result-title");
let imageChanger;
let images = {
   0: "images/rock.png",
   1: "images/paper.png",
   2: "images/scissor.png",
};
let gameOptions = {
   0: "R",
   1: "P",
   2: "S",
};
let winningPattern = {
   RR: "Draw",
   RP: "Loss",
   RS: "Win",
   PP: "Draw",
   PS: "Loss",
   PR: "Win",
   SS: "Draw",
   SR: "Loss",
   SP: "Win",
};
let currentIndex = 0;
let totalImages = Object.keys(images).length;
function changeImage() {
   clearInterval(imageChanger);
   imageChanger = setInterval(() => {
      imageContainer.src = images[currentIndex]; // Set the current image source
      currentIndex = (currentIndex + 1) % totalImages; // Cycle to the next image, reset after the last image
   }, 400); // Change image every 400 milliseconds

   let random = Math.floor(Math.random() * 3);
   setTimeout(() => {
      clearInterval(imageChanger);
      imageContainer.src = images[random];
      startGame(random);
   }, 2000);
   if (userSelection.value == "R") {
      userSelectionImage.src = images[0];
   } else if (userSelection.value == "P") {
      userSelectionImage.src = images[1];
   } else {
      userSelectionImage.src = images[2];
   }
}
// changeImage();
function startGame(random) {
   let userInput = userSelection.value;
   let checkWhoWon = userInput + gameOptions[random];
   console.log(checkWhoWon);
   // for (const pattern in winningPattern) {
   //    if (checkWhoWon == pattern) {
   //       // console.log(winningPattern[pattern]);
   //       showResult(winningPattern[pattern]);
   //    }
   // }
   if (winningPattern.hasOwnProperty(checkWhoWon)) {
      showResult(winningPattern[checkWhoWon]);
   } else {
      console.log("Unexpected game outcome");
   }
}
function showResult(didIWin) {
   console.log(didIWin);
   if (didIWin == "Win") {
      resultTitle.innerHTML = `Congratulations!`;
      winOrLoss.innerHTML = `You just <span class="green">Won 🎉</span>`;
      showPopUp();
   } else if (didIWin == "Loss") {
      resultTitle.innerHTML = `Ooops....`;
      winOrLoss.innerHTML = `You<span class = "red">Lost</span>`;
      showPopUp();
   } else if (didIWin == "Draw") {
      resultTitle.innerHTML = `Ooops....`;
      winOrLoss.innerHTML = `Draw, Try again!`;
      showPopUp();
   } else {
      winOrLoss.innerHTML = `Unexpected Game Outcome`;
   }
}
function showPopUp() {
   setTimeout(() => {
      resultPopUp.style.display = "flex";
      resultPopUp.classList.add("fly-in");
      resultPopUp.classList.remove("fly-out");
   }, 800);
}
startBtn.addEventListener("click", changeImage);
closePopUpBtn.addEventListener("click", () => {
   resultPopUp.classList.remove("fly-in");
   resultPopUp.classList.add("fly-out");
   setTimeout(() => {
      resultPopUp.style.display = "none";
   }, 300);
});
