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

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const selectedHref = document.querySelector(href);
      selectedHref.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});

//Sticky Navigation effect

const observerEl = document.querySelector(".section-hero");
const bodyEl = document.querySelector("body");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      bodyEl.classList.add("sticky");
    } else {
      bodyEl.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(observerEl);
