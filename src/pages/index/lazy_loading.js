const images = document.querySelectorAll('[data-src]');
const imgOptions = {};
function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src
}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    preloadImage(entry.target);
    imgObserver.unobserve(entry.target)
  })
}, imgOptions);
images.forEach(image => {
  imgObserver.observe(image)
})

// document.addEventListener("DOMContentLoaded", () => {
//   const imageObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const lazyImage = entry.target;
//         console.log("lazy loading ", lazyImage);
//         lazyImage.src = lazyImage.dataset.src;
//         // lazyImage.classList.remove("lzy_img");
//         imgObserver.unobserve(lazyImage);
//       }
//     });
//   });
//   const arr = document.querySelectorAll("img.lzy_img");
//   arr.forEach(v => {
//     imageObserver.observe(v);
//   });
// });
