document.addEventListener("mousemove", (e) => {
   console.log(` X :${e.clientX}`);
   console.log(`Y : ${e.clientY}`);
   let mouseTrail = document.querySelector(".mouse-trail");
   requestAnimationFrame(() => {
      mouseTrail.style.left = e.clientX + 9 + "px";
      mouseTrail.style.top = e.clientY + 2 + "px";
   });
   document.addEventListener("click", () => {
      mouseTrail.classList.add("click");
   });
   mouseTrail.classList.remove("click");
});
