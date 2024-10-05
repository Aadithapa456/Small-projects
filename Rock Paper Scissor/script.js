let imageContainer = document.querySelector("#image");
let images = {
   0: "images/rock.png",
   1: "images/paper.png",
   2: "images/scissor.png",
};

let currentIndex = 0;
let totalImages = Object.keys(images).length;
function changeImage() {
   setInterval(() => {
      imageContainer.src = images[currentIndex]; // Set the current image source
      currentIndex = (currentIndex + 1) % totalImages; // Cycle to the next image, reset after the last image
   }, 400); // Change image every 1000 milliseconds (1 second)
}
// changeImage();