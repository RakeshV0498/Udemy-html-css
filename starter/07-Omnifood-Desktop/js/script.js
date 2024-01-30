// Set Current Year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

// Make Mobile Navigation work

const navBtnEL = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

// const openBtn = document.querySelector("[name='menu-outline']");
// const closeBtn = document.querySelector("[name='close-outline']");

// openBtn.addEventListener("click", function () {
//   headerEl.classList.add("nav-open");
// });

// closeBtn.addEventListener("click", function () {
//   headerEl.classList.remove("nav-open");
// });

navBtnEL.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Scrolling effect
