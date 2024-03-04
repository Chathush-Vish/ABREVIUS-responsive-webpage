let hamburger = document.getElementById("hamburger");
let cancle = document.getElementById("close");
let navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
  navLinks.style.display = "flex";
  hamburger.style.display = "none";
  cancle.style.display = "block";
});
cancle.addEventListener("click", function () {
  navLinks.style.display = "none";
  hamburger.style.display = "block";
  cancle.style.display = "none";
});
