const boxes = document.querySelectorAll(".box");
const observer = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible");
         } else {
            entry.target.classList.remove("visible");
         }
      });
   },
   {
      threshold: getThreshold(),
      rootMargin: "0px 0px -20% 0px",
   }
);
boxes.forEach((box) => {
   observer.observe(box);
});
function getThreshold() {
   if (window.innerWidth <= 768) {
      return 0.2; // For mobile devices
   } else {
      return 0.7; // For larger screens
   }
}
