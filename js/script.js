let time = 3000,
  currentImageIndex = 0,
  images = document.querySelectorAll('#slider img');
max = images.length;
function nextImage() {
  images[currentImageIndex].classList.remove('selected');
  currentImageIndex++;
  if (currentImageIndex >= max) currentImageIndex = 0;
  images[currentImageIndex].classList.add('selected');
}
function start() {
  setInterval(() => {
    // troca de image
    nextImage();
  }, time);
}
window.addEventListener('load', start);

// =================================================================================

// let time1 = 5000,
//   currentImageIndex = 0,
//   images = document.querySelectorAll('#card2 img');
// max = images.length;
// function nextImage() {
//   images[currentImageIndex].classList.remove('selected');
//   currentImageIndex++;
//   if (currentImageIndex >= max) currentImageIndex = 0;
//   images[currentImageIndex].classList.add('selected');
// }
// function start() {
//   setInterval(() => {
//     // troca de image
//     nextImage();
//   }, time1);
// }
// window.addEventListener('load', start);
