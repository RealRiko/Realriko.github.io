// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      var target = document.querySelector(event.target.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop,
      });
    });
  }
});
