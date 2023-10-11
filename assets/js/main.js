// (function () {
//   "use strict";

//   // ======= Sticky
window.onscroll = function () {
  //     // show or hide the back-top-top button
  const backToTop = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
};

//   //===== close navbar-collapse when a  clicked
//   let navbarToggler = document.querySelector(".navbar-toggler");
//   const navbarCollapse = document.querySelector(".navbar-collapse");

//   document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
//     e.addEventListener("click", () => {
//       navbarToggler.classList.remove("active");
//       navbarCollapse.classList.remove("show");
//     })
//   );
//   navbarToggler.addEventListener("click", function () {
//     navbarToggler.classList.toggle("active");
//     navbarCollapse.classList.toggle("show");
//   });

//   // ===== submenu
//   const submenuButton = document.querySelectorAll(".nav-item-has-children");
//   submenuButton.forEach((elem) => {
//     elem.querySelector("a").addEventListener("click", () => {
//       elem.querySelector(".ud-submenu").classList.toggle("show");
//     });
//   });

//   // ===== wow js
//   new WOW().init();

// ====== scroll top js
function scrollTo(element, to = 0, duration = 500) {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.querySelector(".back-to-top").onclick = () => {
  scrollTo(document.documentElement);
};
// })();
AOS.init({
  once: true,
});

// menu
const hamburger = document.querySelector(".nav-hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});
// scroll menu
let scrollpos = window.scrollY;

const header = document.querySelector(".nav-outer");
const scrollChange = 1;

const add_class_on_scroll = () => header.classList.add("is-scroll");
const remove_class_on_scroll = () => header.classList.remove("is-scroll");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

// click menu outside
const navMobile = document.getElementById("nav-mobile");

document.onclick = function (e) {
  if (e.target.id !== "nav-hamburger") {
    hamburger.classList.remove("is-active");
  }
};

const viewportWidth = window.innerWidth;
var swiper = new Swiper(".swiper-container", {
  slidesPerView: viewportWidth > 991 ? 2.5 : viewportWidth > 476 ? 1.5 : 1.25,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 64,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
