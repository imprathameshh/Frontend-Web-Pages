var headerWrap = document.getElementsByClassName("header-wrap")[0];

window.onscroll = function (event) {
  var scroll = window.pageYOffset;
  if (scroll > 150) {
    headerWrap.style.background = "white";
  } else {
    headerWrap.style.background = "transparent";
  }
};

$(document).ready(function () {


$(".search-link").click(function() {
  $(".togglesearch").slideToggle("slow");
  $("input[type='text']").focus();
});



  $(".top-search-link").click(function () {
    $(".togglesearch").slideToggle("slow");
    $("input[type='text']").focus();
  });

  $(".nav-menu a").click(function () {
    var hash = jQuery(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1500
    );
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".nav-menu").slideToggle("slow");
    $(".header-right").slideToggle("slow");
  });




});
