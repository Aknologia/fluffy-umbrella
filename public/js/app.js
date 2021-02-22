window.onscroll = function() {navbarStick()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}