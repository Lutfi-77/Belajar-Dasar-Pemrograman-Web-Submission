const navEl = document.querySelector("#nav");
const navLink = document.querySelector(".nav-link");
const hamburger = document.querySelector(".hamburger");
const bar = document.querySelectorAll(".bar");

window.onscroll = () => {
  if (window.scrollY > 70) {
    navEl.classList.add("navbar-active");
  } else {
    navEl.classList.remove("navbar-active");
  }
};

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("nav-link-open");
  bar.forEach((element) => {
    element.classList.toggle("active");
  });
});
