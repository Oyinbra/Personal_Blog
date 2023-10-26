// header.js

export function handleScroll() {
  let header = document.querySelector("header");

  window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
  });
}
