// Two Different Versions of Dropdown

// let dropDownContainer = document.querySelector(".dropdown-container");
// let selectionItems = document.querySelector(".dropdown-sub-items");
// let dropDownItems = document.querySelectorAll(".dropdown-items");
// let isVisible
// console.log(dropDownItems);
// let mainItem = document.querySelector(".dropdown-main-item");
// dropDownContainer.addEventListener("click", () => {
//    isVisible = !isVisible; // Toggle the visibility state
//    selectionItems.style.display = isVisible ? "flex" : "none"; // Set display based on visibility state
// });

// function changeMainItem(item) {
//    console.log(item);
//    item.addEventListener("click", () => {
//       let currentMainItem = mainItem.innerHTML;
//       mainItem.innerHTML = item.innerHTML;
//       item.remove();
//       const newItem = document.createElement("div");
//       newItem.classList.add("dropdown-items");
//       newItem.innerHTML = currentMainItem;
//       selectionItems.append(newItem);
//       changeMainItem(newItem);
//    });
// }
// dropDownItems.forEach((item) => {
//    changeMainItem(item);
// });
// document.addEventListener("click", (event) => {
//    if (!dropDownContainer.contains(event.target)) {
//       selectionItems.style.display = "none";
//       isVisible = false; // Update visibility state
//    }
// });
let dropDownContainer = document.querySelector(".dropdown-select-item");
let mainItem = document.querySelector(".select");
let options = document.querySelectorAll("#option li");
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
