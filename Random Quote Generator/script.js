import { API_KEY } from "/api_key.js";

let quoteContainer = document.querySelector(".quote");
let author = document.querySelector(".quote-author");
let generateQuoteBtn = document.querySelector(".new-quote-btn");
let copyBtn = document.querySelector(".copy-quote");
let currentCategory = document.querySelector("#current-category");
async function fetchQuotes() {
   let currentCategoryValue = currentCategory.value;
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
   try {
      await navigator.clipboard.writeText(quoteContainer.innerHTML);
   } catch (err) {
      console.log(err.message);
   }
});
