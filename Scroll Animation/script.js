const elements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         console.log(entry.target);
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
elements.forEach((element) => {
   observer.observe(element);
});
function getThreshold() {
   if (window.innerWidth <= 768) {
      return 0.2; // For mobile devices
   } else {
      return 0.6; // For larger screens
   }
}
