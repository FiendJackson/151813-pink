var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");
link.addEventListener("click", function() {
  link.classList.toggle("main-nav__toggle--open");
  menu.classList.toggle("main-nav--open");
});
