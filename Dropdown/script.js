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
