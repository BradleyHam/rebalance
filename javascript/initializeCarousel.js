export default function mountCarousel() {
  if (window.Splide && document.querySelector(".splide")) {
    new window.Splide(".splide").mount();
  }
}
