import { API_KEY } from "/api_key.js";

let quoteContainer = document.querySelector(".quote");
let author = document.querySelector(".quote-author");
let generateQuoteBtn = document.querySelector(".new-quote-btn");
let copyBtn = document.querySelector(".copy-quote");
let currentCategory = document.querySelector("#current-category");
let dropDownContainer = document.querySelector(".dropdown-select-item");
let mainItem = document.querySelector(".select");
let options = document.querySelectorAll("#option li");
let popUp = document.querySelector(".pop-up");
let closePopUpBtn = document.querySelector("#close-btn");

dropDownContainer.addEventListener("click", () => {
   dropDownContainer.classList.toggle("active");
   document.querySelector(".dropdown-options").classList.toggle("visible");
});
options.forEach((option) => {
   option.addEventListener("click", () => {
      mainItem.innerHTML = `${option.innerHTML}`;
   });
});
document.addEventListener("click", (e) => {
   if (!dropDownContainer.contains(e.target)) {
      dropDownContainer.classList.remove("active"); // Remove active class if clicking outside
      document.querySelector(".dropdown-options").classList.remove("visible"); // Hide dropdown
   }
});

async function fetchQuotes() {
   let currentCategoryValue = mainItem.innerHTML.trim();
   // Shows error pop-up if user hasn't selected anything
   if (currentCategoryValue == "Select Category") {
      showPopUp();
   }
   try {
      const response = await fetch(
         `https://api.api-ninjas.com/v1/quotes?category=${currentCategoryValue}`,
         {
            method: "GET",
            headers: {
               "X-Api-Key": `${API_KEY}`,
               "Content-Type": "application/json",
            },
         }
      );

      if (!response.ok) {
         throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      changeQuote(result);
   } catch (error) {
      console.error("Error:", error.message);
   }
}

generateQuoteBtn.addEventListener("click", fetchQuotes);
function changeQuote(result) {
   quoteContainer.textContent = result[0].quote;
   author.innerHTML = `-${result[0].author}`;
}
copyBtn.addEventListener("click", async () => {
   // Copy to Clipboard functionality
   try {
      await navigator.clipboard.writeText(quoteContainer.innerHTML);
   } catch (err) {
      console.log(err.message);
   }
});
//Error Popup Card
function showPopUp() {
   setTimeout(() => {
      popUp.style.display = "flex";
      popUp.classList.add("scale-in");
      popUp.classList.remove("scale-out");
   }, 800);
}
closePopUpBtn.addEventListener("click", () => {
   popUp.classList.remove("scale-in");
   popUp.classList.add("scale-out");
   setTimeout(() => {
      popUp.style.display = "none";
   }, 300); //Added 300ms delay for smoother exit animation
});
