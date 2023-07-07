$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".nav-right").slideToggle("slow");
  });
});

document.addEventListener("scroll", () => {
  const headerScroll =document.querySelector(".navbar-wrap");
  const navScroll =document.querySelector(".navbar-content");

  if (window.scrollY > 0) {
    headerScroll.classList.add("header-scroll");
    navScroll.classList.add("nav-link-scroll");
  } else {
    headerScroll.classList.remove("header-scroll");
    navScroll.classList.remove("nav-link-scroll");
  }
})
