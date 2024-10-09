// Accessing DOM Elements
let imageContainer = document.querySelector("#image-ai");
let userSelectionImage = document.querySelector("#image-user");
let startBtn = document.querySelector(".start-btn");
let userSelection = document.querySelector(".select-item");
let resultPopUp = document.querySelector(".pop-up");
let closePopUpBtn = document.querySelector("#close-btn");
let resultInfo = document.querySelector(".result-info");
let resultTitle = document.querySelector(".result-title");
let imageChanger; // Interval ID for image changer
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
//User selection Dropdown
let dropDownContainer = document.querySelector(".dropdown-container");
let selectionItems = document.querySelector(".dropdown-sub-items");
let dropDownItems = document.querySelectorAll(".dropdown-items");
let isVisible
console.log(dropDownItems);
let mainItem = document.querySelector(".dropdown-main-item");
dropDownContainer.addEventListener("click", () => {
   isVisible = !isVisible; // Toggle the visibility state
   selectionItems.style.display = isVisible ? "flex" : "none"; // Set display based on visibility state
});

function changeMainItem(item) {
   console.log(item);
   item.addEventListener("click", () => {
      let currentMainItem = mainItem.innerHTML;
      mainItem.innerHTML = item.innerHTML;
      item.remove();
      const newItem = document.createElement("div");
      newItem.classList.add("dropdown-items");
      newItem.innerHTML = currentMainItem;
      selectionItems.append(newItem);
      changeMainItem(newItem);
   });
}
dropDownItems.forEach((item) => {
   changeMainItem(item);
});
document.addEventListener("click", (event) => {
   if (!dropDownContainer.contains(event.target)) {
      selectionItems.style.display = "none";
      isVisible = false; // Update visibility state
   }
});

function changeImage() {
   let userInput = mainItem.textContent.trim().slice(0, 1);
   clearInterval(imageChanger);
   imageChanger = setInterval(() => {
      imageContainer.src = images[currentIndex]; // Set the current image source
      currentIndex = (currentIndex + 1) % totalImages; // Cycle to the next image, reset after the last image
   }, 400); // Change image every 400 milliseconds

   let random = Math.floor(Math.random() * 3); //Generates a random number from 0 to 2
   setTimeout(() => {
      clearInterval(imageChanger);
      imageContainer.src = images[random]; // Sets the CPU selection using random number generated above
      startGame(random,userInput);
   }, 2000);
   if (userInput == "R") {
      userSelectionImage.src = images[0];
   } else if (userInput == "P") {
      userSelectionImage.src = images[1];
   } else {
      userSelectionImage.src = images[2];
   }
}
// changeImage();
function startGame(random, userInput) {
   console.log(userInput);
   let checkWhoWon = userInput + gameOptions[random]; // Concatinates user input and CPU selection e.g: RR,RP
   // for (const pattern in winningPattern) {
   //    if (checkWhoWon == pattern) {
   //       // console.log(winningPattern[pattern]);
   //       showResult(winningPattern[pattern]);
   //    }
   // }

   // Checks if the current pattern is present in the pre-defined winning pattern or not
   if (winningPattern.hasOwnProperty(checkWhoWon)) {
      showResult(winningPattern[checkWhoWon]);
   } else {
      console.log("Unexpected game outcome");
   }
}
function showResult(didIWin) {
   if (didIWin == "Win") {
      resultTitle.innerHTML = `Congratulations!`;
      resultInfo.innerHTML = `You just <span class="green">Won 🎉</span>`;
      showPopUp();
   } else if (didIWin == "Loss") {
      resultTitle.innerHTML = `Ooops....`;
      resultInfo.innerHTML = `You<span class = "red">Lost</span>`;
      showPopUp();
   } else if (didIWin == "Draw") {
      resultTitle.innerHTML = `Ooops....`;
      resultInfo.innerHTML = `Draw, Try again!`;
      showPopUp();
   } else {
      resultInfo.innerHTML = `Unexpected Game Outcome`;
   }
}
function showPopUp() {
   setTimeout(() => {
      resultPopUp.style.display = "flex";
      resultPopUp.classList.add("fly-in");
      resultPopUp.classList.remove("fly-out");
   }, 800);
}
closePopUpBtn.addEventListener("click", () => {
   resultPopUp.classList.remove("fly-in");
   resultPopUp.classList.add("fly-out");
   setTimeout(() => {
      resultPopUp.style.display = "none";
   }, 300); //Added 300ms delay for smoother animation
});
// Event Listeners
startBtn.addEventListener("click", changeImage);
