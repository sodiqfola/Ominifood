//jshint esversion:8

//making Navbar work
let menu = document.querySelector(".btn-mobile-nav");
let nav = document.querySelector(".header");

menu.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});

//to automatically change date
let currentYear = new Date().getFullYear();
let year = document.querySelector(".year");
year.textContent = currentYear;

///smooth scroll///
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      nav.classList.remove("nav-open");
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/////Sticky nav bar//////
const hero = document.querySelector(".section-hero");
const toUp = document.querySelector(".scroll-top");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
   
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      toUp.classList.add("d-vis");
    } else {
      document.body.classList.remove("sticky");
      toUp.classList.remove("d-vis");
    }
  },

  {
    //helpfull in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(hero);

  const splide = new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
    },
  });

  splide.mount(window.splide.Extensions);