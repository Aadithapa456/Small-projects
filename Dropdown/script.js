let dropDownContainer = document.querySelector(".dropdown-container");
let selectionItems = document.querySelector(".dropdown-sub-items");
let dropDownItems = document.querySelectorAll(".dropdown-items");
console.log(dropDownItems);
let mainItem = document.querySelector(".dropdown-main-item");
let isVisible = false;
dropDownContainer.addEventListener("click", () => {
   if (!isVisible) {
      selectionItems.style.display = "flex";
      isVisible = true;
   } else {
      selectionItems.style.display = "none";
      isVisible = false;
   }
});
dropDownItems.forEach((item) => {
   item.addEventListener("click", () => {
      console.log(item);

      let currentMainItem = mainItem.innerHTML;
      let currentSubItem = item.innerHTML;
      mainItem.innerHTML = item.innerHTML;
      item.remove();
      const newItem = document.createElement("div");
      newItem.classList.add("dropdown-items");
      newItem.innerHTML = currentMainItem;
      selectionItems.appendChild(newItem);
   });
});
